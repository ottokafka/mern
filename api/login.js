const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Business = require("../models/Business");
const jwt = require("jsonwebtoken");
const token = require("../token");

// @route    GET api/login
// @desc     Get business by token
// @access   Private
router.get("/", token, async (req, res) => {
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

// @route    GET api/login/token
// @desc     test the token
// @access   Public
router.get("/token", token, async (req, res) => {
  res.json("Token route is working, this is a private route");
});

// @route    GET api/login/tokenUserID
// @desc     test the token
// @access   Public
router.get("/tokenUserID", token, async (req, res) => {
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
  res.json("Login Get test route is working");
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
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
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

  try {
    // search db for email
    let business = await Business.findOne({ email });

    console.log(business);

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
    console.log("Created our payload");
    console.log(payload);

    // give jwt to business
    jwt.sign(
      payload,
      "gateway",
      {
        expiresIn: 360000
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
// @desc     Register client
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

    // give jwt to client
    var token = jwt.sign(
      { client: { id: client.id } },
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

    // give jwt to client
    var token = jwt.sign(
      { client: { id: client.id } },
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
});

// export the router
module.exports = router;
