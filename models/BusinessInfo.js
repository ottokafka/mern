const mongoose = require("mongoose");

// Businessinfo Model for business info
const BusinessInfoSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business"
  },
  company: {
    type: String,
    required: true
  },
  location: {
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zip: {
      type: String,
      required: true
    }
  },

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },
    tiktok: {
      type: String
    },
    snapchat: {
      type: String
    }
  },
  availability: {
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
    }
  },
  services: {
    lineUp: {
      type: Number
    },
    fade: {
      type: Number
    },
    haircut: {
      type: Number
    },
    edgeUp: {
      type: Number
    },
    design: {
      type: Number
    },

    buzzCut: {
      type: Number
    },
    trim: {
      type: Number
    },
    neckTrim: {
      type: Number
    },
    beardTrim: {
      type: Number
    },

    hotTowel: {
      type: Number
    },
    mustacheTrim: {
      type: Number
    },
    razoring: {
      type: Number
    },
    shave: {
      type: Number
    },
    sideburnShave: {
      type: Number
    },

    extensionAddOn: {
      type: Number
    },
    braids: {
      type: Number
    },
    flatIron: {
      type: Number
    },
    updo: {
      type: Number
    },
    otherStyle: {
      type: Number
    },
    bangTrim: {
      type: Number
    },
    womenTrim: {
      type: Number
    },

    closureSewIn: {
      type: Number
    },
    fullSewIn: {
      type: Number
    },
    fullWeave: {
      type: Number
    },
    netting: {
      type: Number
    },
    partialSewIn: {
      type: Number
    },
    partialWeave: {
      type: Number
    },
    quickWeave: {
      type: Number
    },
    sewInMaintenance: {
      type: Number
    },

    allOverColor: {
      type: Number
    },
    bleachAndTone: {
      type: Number
    },
    caramelisingColor: {
      type: Number
    },
    colorCorrection: {
      type: Number
    },
    doubleProcessColor: {
      type: Number
    },
    hairTint: {
      type: Number
    },
    partialColor: {
      type: Number
    },
    permanentColor: {
      type: Number
    },
    rootTouchUp: {
      type: Number
    },
    SemiPermanentColor: {
      type: Number
    }
  },

  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = BusinessInfo = mongoose.model(
  "businessInfo",
  BusinessInfoSchema
);
