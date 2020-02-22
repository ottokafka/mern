const mongoose = require("mongoose");

// Services Model for different types of business services
const ServicesSchema = new mongoose.Schema({
  business: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business"
  },
  barber: {
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
    }
  },

  salon: {
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

    weaves: {
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
      }
    }
  },

  hairColor: {
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
module.exports = Services = mongoose.model("services", ServicesSchema);
