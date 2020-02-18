const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// GET api/login/test
router.get("/test", async (req, res) => {
  res.json("Login Get test route is working");
});

// POST api/login/test
router.post("/test", async (req, res) => {
  console.log(req.body);
  res.json("Login Post test route is working");
});

// skip encrypting password shit

// Business Model for registration
const BusinessSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
Business = mongoose.model("business", BusinessSchema);

// @route    POST api/login/business
// @desc     Register business
// @access   Public
router.post("/business", async (req, res) => {
  // need a model to refer to for the client and the business sign up

  const { firstName, lastName, email, password, phoneNumber } = req.body;

  try {
    // search db for email
    let findEmail = await Client.findOne({ email });

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

    res.json("saved successfully");
  } catch (err) {
    console.log("server error");
    res.json("server error");
  }
});

// @route    POST api/login/businessLogin
// @desc     Login business
// @access   Public
router.post("/businessLogin", async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  try {
    // search db for email
    let businessInfo = await Client.findOne({ email });

    if (!businessInfo) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    console.log(businessInfo);

    if (password !== businessInfo.password) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    res.json("successfully logged in client ");
  } catch (err) {
    console.log("server error");
    res.json("server error");
  }
});

// client model
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
Client = mongoose.model("client", ClientSchema);

// @route    POST api/login/client
// @desc     Login client
// @access   Public
router.post("/client", async (req, res) => {
  // need a model to refer to for the client and the business sign up

  const { name, email, password } = req.body;

  try {
    // search db for email
    let clientEmail = await Client.findOne({ email });

    if (clientEmail) {
      return res.status(400).json({ errors: [{ msg: "User already exists" }] });
    }

    client = new Client({
      name,
      email,
      password
    });

    console.log(name, email, password);

    // Save to the db
    await client.save();
  } catch (err) {
    console.log("server error");
    res.json("server error");
  }
});

// @route    POST api/login/clientLogin
// @desc     Login client
// @access   Public
router.post("/clientLogin", async (req, res) => {
  const { email, password } = req.body;

  console.log(email, password);

  try {
    // search db for email
    let clientInfo = await Client.findOne({ email });

    if (!clientInfo) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    console.log(clientInfo);

    if (password !== clientInfo.password) {
      return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }] });
    }

    res.json("successfully logged in client ");
  } catch (err) {
    console.log("server error");
    res.json("server error");
  }
});

// export the router
module.exports = router;
