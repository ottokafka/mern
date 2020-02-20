const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Business = require("../models/Business");
const token = require("../token");

// todo build backend that accepts work hours & free time

// test route
// GET api/availability/test
router.get("/test", token, async (req, res) => {
  res.json("availability Get test route is working as private route");
});

// day_of_week3: String,
// work3: Boolean,
// start_time3: String,
// end_time3: String,
// start_lunch3: String,
// end_lunch3: String,

// day_of_week4: String,
// work4: Boolean,
// start_time4: String,
// end_time4: String,
// start_lunch4: String,
// end_lunch4: String,

// day_of_week5: String,
// work5: Boolean,
// start_time5: String,
// end_time5: String,
// start_lunch5: String,
// end_lunch5: String,

// day_of_week6: String,
// work6: Boolean,
// start_time6: String,
// end_time6: String,
// start_lunch6: String,
// end_lunch6: String,
// day_of_week7: String,
// work7: Boolean,
// start_time7: String,
// end_time7: String,
// start_lunch7: String,
// end_lunch7: String

// Availability Model work hours
const AvailabilitySchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business"
  },
  day_of_week1: {
    type: String
  },
  work1: {
    type: Boolean
  },
  start_time1: {
    type: String
  },
  end_time1: {
    type: String
  },
  start_lunch1: {
    type: String
  },
  end_lunch1: {
    type: String
  },

  day_of_week2: {
    type: String
  },
  work2: {
    type: Boolean
  },
  start_time2: {
    type: String
  },
  end_time2: {
    type: String
  },
  start_lunch2: {
    type: String
  },
  end_lunch2: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
Availability = mongoose.model("availability", AvailabilitySchema);

// create or update availability

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post("/", token, async (req, res) => {
  const {
    day_of_week1,
    work1,
    start_time1,
    end_time1,
    start_lunch1,
    end_lunch1,
    day_of_week2,
    work2,
    start_time2,
    end_time2,
    start_lunch2,
    end_lunch2
    // day_of_week3,
    // work3,
    // start_time3,
    // end_time3,
    // start_lunch3,
    // end_lunch3,
    // day_of_week4,
    // work4,
    // start_time4,
    // end_time4,
    // start_lunch4,
    // end_lunch4,
    // day_of_week5,
    // work5,
    // start_time5,
    // end_time5,
    // start_lunch5,
    // end_lunch5,
    // day_of_week6,
    // work6,
    // start_time6,
    // end_time6,
    // start_lunch6,
    // end_lunch6,
    // day_of_week7,
    // work7,
    // start_time7,
    // end_time7,
    // start_lunch7,
    // end_lunch7
  } = req.body;

  // Build availability object
  const availabilityFields = {};
  availabilityFields.business = req.business.id;
  if (day_of_week1) availabilityFields.day_of_week1 = day_of_week1;
  if (work1) availabilityFields.work1 = work1;
  if (start_time1) availabilityFields.start_time1 = start_time1;
  if (end_time1) availabilityFields.end_time1 = end_time1;
  if (start_lunch1) availabilityFields.start_lunch1 = start_lunch1;
  if (end_lunch1) availabilityFields.end_lunch1 = end_lunch1;
  if (day_of_week2) availabilityFields.day_of_week2 = day_of_week2;
  if (work2) availabilityFields.work2 = work2;
  if (start_time2) availabilityFields.start_time2 = start_time2;
  if (end_time2) availabilityFields.end_time2 = end_time2;
  if (start_lunch2) availabilityFields.start_lunch2 = start_lunch2;
  if (end_lunch2) availabilityFields.end_lunch2 = end_lunch2;
  console.log(availabilityFields);

  try {
    // Using upsert option (creates new doc if no match is found):
    let availability = await Availability.findOneAndUpdate(
      { business: req.business.id },
      { $set: availabilityFields },
      { new: true, upsert: true }
    );

    res.json(availability);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// export the router
module.exports = router;
