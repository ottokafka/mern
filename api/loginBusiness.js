const express = require("express");
const router = express.Router();
const Business = require("../models/Business");
const jwt = require("jsonwebtoken");
const tokenBusiness = require("../tokenBusiness");

// @route    GET api/login
// @desc     Get the user information after you login. Grabs user info once you have a tokenBusiness
// @access   Private
router.get("/", tokenBusiness, async (req, res) => {
  try {
    const business = await Business.findById(req.business.id).select(
      "-password"
    );
    res.json(business);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/businessLogin
// @desc     Login business
// @access   Public
router.post("/businessLogin", async (req, res) => {
  const { email, password } = req.body;

  console.log(req.body);

  try {
    // search db for email
    let business = await Business.findOne({ email });

    // console.log(business);

    if (business.email !== email) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    if (password !== business.password) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    const payload = {
      business: {
        id: business.id
      }
    };
    // console.log("Created our payload");
    // console.log(payload);

    // give jwt to business
    jwt.sign(
      payload,
      "gateway",
      {
        expiresIn: 360000
      },
      (err, tokenBusiness) => {
        if (err) throw err;
        res.json({ tokenBusiness });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.json("server error");
  }
});

// export the router
module.exports = router;
