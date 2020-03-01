const express = require("express");
const router = express.Router();
const BusinessInfo = require("../models/BusinessInfo");
const token = require("../token");

// todo build backend that accepts work hours & free time

// test route
// GET api/availability/test
router.get("/test", token, async (req, res) => {
  res.json("availability Get test route is working as private route");
});

// Get availability of business
// GET api/availability/me
router.get("/me", token, async (req, res) => {
  try {
    const availability = await BusinessInfo.findOne({
      business: req.business.id
    });

    // console.log(businessInfo);

    if (!availability) {
      return res
        .status(400)
        .json({ msg: "There is no availability for this business" });
    }

    res.json(availability);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// create or update availability

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.put("/", token, async (req, res) => {
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
    end_lunch2,
    day_of_week3,
    work3,
    start_time3,
    end_time3,
    start_lunch3,
    end_lunch3,
    day_of_week4,
    work4,
    start_time4,
    end_time4,
    start_lunch4,
    end_lunch4,
    day_of_week5,
    work5,
    start_time5,
    end_time5,
    start_lunch5,
    end_lunch5,
    day_of_week6,
    work6,
    start_time6,
    end_time6,
    start_lunch6,
    end_lunch6,
    day_of_week7,
    work7,
    start_time7,
    end_time7,
    start_lunch7,
    end_lunch7
  } = req.body;

  // Build availability object
  const businessInfoFields = {
    business: req.business.id
  };

  const availabilityFields = {
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
    end_lunch2,
    day_of_week3,
    work3,
    start_time3,
    end_time3,
    start_lunch3,
    end_lunch3,
    day_of_week4,
    work4,
    start_time4,
    end_time4,
    start_lunch4,
    end_lunch4,
    day_of_week5,
    work5,
    start_time5,
    end_time5,
    start_lunch5,
    end_lunch5,
    day_of_week6,
    work6,
    start_time6,
    end_time6,
    start_lunch6,
    end_lunch6,
    day_of_week7,
    work7,
    start_time7,
    end_time7,
    start_lunch7,
    end_lunch7
  };
  // assign to availability

  businessInfoFields.availability = availabilityFields;

  // if (day_of_week1) availabilityFields.day_of_week1 = day_of_week1;
  // if (work1) availabilityFields.work1 = work1;
  // if (start_time1) availabilityFields.start_time1 = start_time1;
  // if (end_time1) availabilityFields.end_time1 = end_time1;
  // if (start_lunch1) availabilityFields.start_lunch1 = start_lunch1;
  // if (end_lunch1) availabilityFields.end_lunch1 = end_lunch1;
  // if (day_of_week2) availabilityFields.day_of_week2 = day_of_week2;
  // if (work2) availabilityFields.work2 = work2;
  // if (start_time2) availabilityFields.start_time2 = start_time2;
  // if (end_time2) availabilityFields.end_time2 = end_time2;
  // if (start_lunch2) availabilityFields.start_lunch2 = start_lunch2;
  // if (end_lunch2) availabilityFields.end_lunch2 = end_lunch2;

  // if (day_of_week3) availabilityFields.day_of_week3 = day_of_week3;
  // if (work3) availabilityFields.work3 = work3;
  // if (start_time3) availabilityFields.start_time3 = start_time3;
  // if (end_time3) availabilityFields.end_time3 = end_time3;
  // if (start_lunch3) availabilityFields.start_lunch3 = start_lunch3;
  // if (end_lunch3) availabilityFields.end_lunch3 = end_lunch3;

  // if (day_of_week4) availabilityFields.day_of_week4 = day_of_week4;
  // if (work4) availabilityFields.work4 = work4;
  // if (start_time4) availabilityFields.start_time4 = start_time4;
  // if (end_time4) availabilityFields.end_time4 = end_time4;
  // if (start_lunch4) availabilityFields.start_lunch4 = start_lunch4;
  // if (end_lunch4) availabilityFields.end_lunch4 = end_lunch4;

  // if (day_of_week5) availabilityFields.day_of_week5 = day_of_week5;
  // if (work5) availabilityFields.work5 = work5;
  // if (start_time5) availabilityFields.start_time5 = start_time5;
  // if (end_time5) availabilityFields.end_time5 = end_time5;
  // if (start_lunch5) availabilityFields.start_lunch5 = start_lunch5;
  // if (end_lunch5) availabilityFields.end_lunch5 = end_lunch5;

  // if (day_of_week6) availabilityFields.day_of_week6 = day_of_week6;
  // if (work6) availabilityFields.work6 = work6;
  // if (start_time6) availabilityFields.start_time6 = start_time6;
  // if (end_time6) availabilityFields.end_time6 = end_time6;
  // if (start_lunch6) availabilityFields.start_lunch6 = start_lunch6;
  // if (end_lunch6) availabilityFields.end_lunch6 = end_lunch6;

  // if (day_of_week7) availabilityFields.day_of_week7 = day_of_week7;
  // if (work7) availabilityFields.work7 = work7;
  // if (start_time7) availabilityFields.start_time7 = start_time7;
  // if (end_time7) availabilityFields.end_time7 = end_time7;
  // if (start_lunch7) availabilityFields.start_lunch7 = start_lunch7;
  // if (end_lunch7) availabilityFields.end_lunch7 = end_lunch7;

  console.log(businessInfoFields);

  try {
    // Using upsert option (creates new doc if no match is found):
    // let availability = await BusinessInfo.findOneAndUpdate(
    //   { business: req.business.id },
    //   { $set: availabilityFields },
    //   { new: true, upsert: true }
    // );

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

// GET availability of the business
router.get("/work", token, async (req, res) => {
  let availability = await BusinessInfo.find({ business: req.business.id });

  console.log(availability);
  res.json(availability);
});

// // test get business availability by id
// router.get("/work", async (req, res) => {
//   let availability = await BusinessInfo.findOne({
//     business: "5e4ec3c7f50837224839ede4"
//   });

//   console.log(availability);
//   res.json(availability);
// });

// export the router
module.exports = router;
