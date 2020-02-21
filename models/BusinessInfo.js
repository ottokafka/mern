const mongoose = require("mongoose");

// Business Model for registration
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
  date: {
    type: Date,
    default: Date.now
  }
});
module.exports = BusinessInfo = mongoose.model(
  "businessInfo",
  BusinessInfoSchema
);
