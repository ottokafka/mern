const express = require("express");
const router = express.Router();
// const Services = require("../models/Services");
const BusinessInfo = require("../models/BusinessInfo");
const tokenBusiness = require("../tokenBusiness");

// test route
// GET api/services/test
router.get("/test", async (req, res) => {
  res.json("services  Get test route is working");
});

// @route    POST api/services
// @desc     Create or update services
// @access   Private
router.put("/", tokenBusiness, async (req, res) => {
  const {
    lineUp,
    fade,
    haircut,
    edgeUp,
    design,
    buzzCut,
    trim,
    neckTrim,
    beardTrim,
    hotTowel,
    mustacheTrim,
    razoring,
    shave,
    sideburnShave,
    extensionAddOn,
    braids,
    flatIron,
    updo,
    otherStyle,
    bangTrim,
    womenTrim,
    allOverColor,
    bleachAndTone,
    caramelisingColor,
    colorCorrection,
    doubleProcessColor,
    hairTint,
    partialColor,
    permanentColor,
    rootTouchUp,
    SemiPermanentColor,
    closureSewIn,
    fullSewIn,
    fullWeave,
    netting,
    partialSewIn,
    partialWeave,
    quickWeave,
    sewInMaintenance
  } = req.body;

  // Build services info object
  const businessInfoFields = {
    business: req.business.id
  };

  const servicesFields = {
    lineUp,
    fade,
    haircut,
    edgeUp,
    design,
    buzzCut,
    trim,
    neckTrim,
    beardTrim,
    hotTowel,
    mustacheTrim,
    razoring,
    shave,
    sideburnShave,
    extensionAddOn,
    braids,
    flatIron,
    updo,
    otherStyle,
    bangTrim,
    womenTrim,
    allOverColor,
    bleachAndTone,
    caramelisingColor,
    colorCorrection,
    doubleProcessColor,
    hairTint,
    partialColor,
    permanentColor,
    rootTouchUp,
    SemiPermanentColor,
    closureSewIn,
    fullSewIn,
    fullWeave,
    netting,
    partialSewIn,
    partialWeave,
    quickWeave,
    sewInMaintenance
  };

  businessInfoFields.services = servicesFields;

  console.log(businessInfoFields);

  try {
    // Using upsert option (creates new doc if no match is found):
    let services = await BusinessInfo.findOneAndUpdate(
      { business: req.business.id },
      { $set: businessInfoFields },
      { new: true, upsert: true }
    );
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// export the router
module.exports = router;
