const express = require("express");
const router = express.Router();
const BusinessInfo = require("../models/BusinessInfo");
const Business = require("../models/Business");
const token = require("../tokenBusiness");

// test route
// GET api/businessinfo
router.get("/test", async (req, res) => {
  res.json("business info Get test route is working");
});

// @route    GET api/businessinfo/me
// @desc     Get current users business
// @access   Private
router.get("/me", token, async (req, res) => {
  try {
    const businessInfo = await BusinessInfo.findOne({
      business: req.business.id
    }).populate("business", ["firstName"]);

    // console.log(businessInfo);

    if (!businessInfo) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }

    res.json(businessInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    POST api/businessinfo
// @desc     Create or update business info
// @access   Private
router.post("/", token, async (req, res) => {
  const {
    address,
    city,
    state,
    zip,
    company,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    snapchat,
    tiktok
  } = req.body;

  const businessInfoFields = {
    business: req.business.id,
    company
  };

  const locationFields = {
    address,
    city,
    state,
    zip
  };

  businessInfoFields.location = locationFields;

  const socialFields = {
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    snapchat,
    tiktok
  };

  businessInfoFields.social = socialFields;

  console.log(businessInfoFields);

  try {
    // Using upsert option (creates new doc if no match is found):
    let businessInfo = await BusinessInfo.findOneAndUpdate(
      { business: req.business.id },
      { $set: businessInfoFields },
      { new: true, upsert: true }
    );
    res.json(businessInfo);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/businessinfo/all
// @desc     gets all the businesses in the db
// @access   Public
router.get("/all", async (req, res) => {
  try {
    const businesses = await BusinessInfo.find().populate("business", [
      "firstName",
      "email",
      "phoneNumber"
    ]);
    console.log(businesses);

    const availability = await BusinessInfo.find();
    console.log(availability);

    res.json({ AllBusiness: businesses, AllAvailabiltiy: availability });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/businessinfo/:id
// @desc     get business info by db _id
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    // in find req.params - this grabs the :id and searches db for it
    const businesses = await BusinessInfo.find(req.params.id);
    res.json(businesses);
  } catch (err) {
    console.error(err.message);
    if (err.kind === "ObjectId")
      return res.status(404).json({ msg: "Post not found" });
  }
});

// @route    DELETE api/business/:id
// @desc     Delete business, and availability and services
// @access   Private
router.delete("/", token, async (req, res) => {
  try {
    // Remove user posts
    await BusinessInfo.deleteMany({ business: req.business.id });
    // Remove profile
    await BusinessInfo.findOneAndRemove({ business: req.business.id });
    // Remove user
    await Business.findOneAndRemove({ _id: req.business.id });

    res.json({ msg: "Business removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// build an api that has all accessiated business info related to it from the token

// export the router
module.exports = router;
