const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const config = require("config");
const { check, validationResult } = require("express-validator");
const token = require("../../tokenUser");
const User = require("../../models/user/User");

// @route    GET api/user
// @desc     Get business by token
// @access   Private
router.get("/", token, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      // give jwt to business
      jwt.sign(
        payload,
        "gateway",
        {
          expiresIn: 3600000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.log("server error");
      res.json("server error");
    }
  }
);

// @route    POST api/user/loginUser
// @desc     Login client
// @access   Public
router.post("/loginUser", async (req, res) => {
  const { email, password } = req.body;

  // console.log(email, password);

  try {
    // search db for email

    let user = await User.findOne({ email });

    console.log(user);

    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      user: {
        id: user.id
      }
    };

    // give jwt to client
    jwt.sign(
      payload,
      "gateway",
      {
        expiresIn: 3600000
      },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.json("server error");
  }
});

module.exports = router;
