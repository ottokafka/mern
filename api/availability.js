const express = require("express");
const router = express.Router();
const BusinessInfo = require("../models/BusinessInfo");
const tokenBusiness = require("../tokenBusiness");

// todo build backend that accepts work hours & free time

// test route
// GET api/availability/test
router.get("/test", async (req, res) => {
  res.json("availability Get test route is working as private route");
});

// Get availability of business
// GET api/availability/me
router.get("/me", tokenBusiness, async (req, res) => {
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

// @route    POST api/availability
// @desc     Create or update business availability
// @access   Private
router.put("/", tokenBusiness, async (req, res) => {
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

  businessInfoFields.availability = availabilityFields;
  console.log(businessInfoFields);

  try {
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
router.get("/work", tokenBusiness, async (req, res) => {
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
