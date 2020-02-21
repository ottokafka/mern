const mongoose = require("mongoose");

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
  day_of_week3: {
    type: String
  },
  work3: {
    type: Boolean
  },
  start_time3: {
    type: String
  },
  end_time3: {
    type: String
  },
  start_lunch3: {
    type: String
  },
  end_lunch3: {
    type: String
  },

  day_of_week4: {
    type: String
  },
  work4: {
    type: Boolean
  },
  start_time4: {
    type: String
  },
  end_time4: {
    type: String
  },
  start_lunch4: {
    type: String
  },
  end_lunch4: {
    type: String
  },

  day_of_week5: {
    type: String
  },
  work5: {
    type: Boolean
  },
  start_time5: {
    type: String
  },
  end_time5: {
    type: String
  },
  start_lunch5: {
    type: String
  },
  end_lunch5: {
    type: String
  },

  day_of_week6: {
    type: String
  },
  work6: {
    type: Boolean
  },
  start_time6: {
    type: String
  },
  end_time6: {
    type: String
  },
  start_lunch6: {
    type: String
  },
  end_lunch6: {
    type: String
  },
  day_of_week7: {
    type: String
  },
  work7: {
    type: Boolean
  },
  start_time7: {
    type: String
  },
  end_time7: {
    type: String
  },
  start_lunch7: {
    type: String
  },
  end_lunch7: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = Availability = mongoose.model(
  "availability",
  AvailabilitySchema
);
