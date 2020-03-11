const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
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

// @route    GET api/login/tokenBusiness
// @desc     test the tokenBusiness
// @access   Public
router.get("/tokenBusiness", tokenBusiness, async (req, res) => {
  res.json("Token route is working, this is a private route");
});

// @route    GET api/login/tokenUserID
// @desc     test the tokenBusiness
// @access   Public
router.get("/tokenUserID", tokenBusiness, async (req, res) => {
  try {
    const business = await Business.findById(req.business.id).select(
      "-password"
    );
    res.json(business);
  } catch (err) {
    res.status(500).json({ msg: "server error" });
  }
});

// GET api/login/test
router.get("/test", async (req, res) => {
  res.json({ msg: "Login Get test route is working" });
});

// POST api/login/test
router.post("/test", async (req, res) => {
  console.log(req.body);
  res.json("Login Post test route is working");
});

// @route    POST api/login/business
// @desc     Register business
// @access   Public
router.post("/business", async (req, res) => {
  // need a model to refer to for the client and the business sign up

  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    // search db for email
    let findEmail = await Business.findOne({ email });

    if (findEmail) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    business = new Business({
      firstName,
      lastName,
      email,
      password,
      phoneNumber
    });

    console.log(firstName, lastName, email, password, phoneNumber);

    // Save to the db
    await business.save();

    // give jwt to business
    jwt.sign(
      { business: { id: business.id } },
      "gateway",
      {
        expiresIn: 3600000
      },
      (err, tokenBusiness) => {
        if (err) throw err;
        res.json({ tokenBusiness });
      }
    );
  } catch (err) {
    console.log(err);
    console.log("server error");
    res.json("server error");
  }
});

// @route    POST api/login/businessLogin
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
