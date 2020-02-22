const express = require("express");
const router = express.Router();
const Services = require("../models/Services");
const token = require("../token");

// test route
// GET api/services/test
router.get("/test", async (req, res) => {
  res.json("services  Get test route is working");
});

// @route    POST api/services
// @desc     Create or update services
// @access   Private
router.post("/", token, async (req, res) => {
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
  const servicesFields = {};
  servicesFields.barber = {};
  servicesFields.business = req.business.id;
  if (lineUp) servicesFields.barber.lineUp = lineUp;
  if (fade) servicesFields.barber.fade = fade;
  if (haircut) servicesFields.barber.haircut = haircut;
  if (edgeUp) servicesFields.barber.edgeUp = edgeUp;
  if (design) servicesFields.barber.design = design;
  if (buzzCut) servicesFields.barber.buzzCut = buzzCut;
  if (trim) servicesFields.barber.trim = trim;
  if (neckTrim) servicesFields.barber.neckTrim = neckTrim;
  if (beardTrim) servicesFields.barber.beardTrim = beardTrim;
  if (hotTowel) servicesFields.barber.hotTowel = hotTowel;
  if (mustacheTrim) servicesFields.barber.mustacheTrim = mustacheTrim;
  if (razoring) servicesFields.barber.razoring = razoring;
  if (shave) servicesFields.barber.shave = shave;
  if (sideburnShave) servicesFields.barber.sideburnShave = sideburnShave;

  // Build business location object
  servicesFields.salon = {};
  if (extensionAddOn) servicesFields.salon.extensionAddOn = extensionAddOn;
  if (braids) servicesFields.salon.braids = braids;
  if (flatIron) servicesFields.salon.flatIron = flatIron;
  if (updo) servicesFields.salon.updo = updo;
  if (otherStyle) servicesFields.salon.otherStyle = otherStyle;
  if (bangTrim) servicesFields.salon.bangTrim = bangTrim;
  if (womenTrim) servicesFields.salon.womenTrim = womenTrim;

  // build weaves object
  servicesFields.salon.weaves = {};
  if (closureSewIn) servicesFields.salon.weaves.closureSewIn = closureSewIn;
  if (fullSewIn) servicesFields.salon.weaves.fullSewIn = fullSewIn;
  if (fullWeave) servicesFields.salon.weaves.fullWeave = fullWeave;
  if (netting) servicesFields.salon.weaves.netting = netting;
  if (partialSewIn) servicesFields.salon.weaves.partialSewIn = partialSewIn;
  if (partialWeave) servicesFields.salon.weaves.partialWeave = partialWeave;
  if (quickWeave) servicesFields.salon.weaves.quickWeave = quickWeave;
  if (sewInMaintenance)
    servicesFields.salon.weaves.sewInMaintenance = sewInMaintenance;

  // build haircolor object
  servicesFields.salon.hairColor = {};
  if (allOverColor) servicesFields.salon.hairColor.allOverColor = allOverColor;
  if (bleachAndTone)
    servicesFields.salon.hairColor.bleachAndTone = bleachAndTone;
  if (caramelisingColor)
    servicesFields.salon.hairColor.caramelisingColor = caramelisingColor;
  if (colorCorrection)
    servicesFields.salon.hairColor.colorCorrection = colorCorrection;
  if (doubleProcessColor)
    servicesFields.salon.hairColor.doubleProcessColor = doubleProcessColor;
  if (partialColor) servicesFields.salon.hairColor.partialColor = partialColor;
  if (permanentColor)
    servicesFields.salon.hairColor.permanentColor = permanentColor;
  if (rootTouchUp) servicesFields.salon.hairColor.rootTouchUp = rootTouchUp;
  if (SemiPermanentColor)
    servicesFields.salon.hairColor.SemiPermanentColor = SemiPermanentColor;

  try {
    // Using upsert option (creates new doc if no match is found):
    let services = await Services.findOneAndUpdate(
      { business: req.business.id },
      { $set: servicesFields },
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
