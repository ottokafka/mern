const express = require("express");
const router = express.Router();
const BusinessInfo = require("../models/businessInfo");
const token = require("../token");

// test route
// GET api/businessinfo
router.get("/test", async (req, res) => {
  res.json("business info Get test route is working");
});

// @route    POST api/profile
// @desc     Create or update user profile
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

  // Build business info object
  const businessInfoFields = {};
  businessInfoFields.business = req.business.id;
  if (company) businessInfoFields.company = company;

  // Build business location object
  businessInfoFields.location = {};
  if (address) businessInfoFields.location.address = address;
  if (city) businessInfoFields.location.city = city;
  if (state) businessInfoFields.location.state = state;
  if (zip) businessInfoFields.location.zip = zip;

  // Build social object
  businessInfoFields.social = {};
  if (youtube) businessInfoFields.social.youtube = youtube;
  if (twitter) businessInfoFields.social.twitter = twitter;
  if (facebook) businessInfoFields.social.facebook = facebook;
  if (linkedin) businessInfoFields.social.linkedin = linkedin;
  if (instagram) businessInfoFields.social.instagram = instagram;
  if (snapchat) businessInfoFields.social.snapchat = snapchat;
  if (tiktok) businessInfoFields.social.tiktok = tiktok;

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

// export the router
module.exports = router;
