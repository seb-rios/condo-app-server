const mongoose = require("mongoose");

const InviteSchema = moongose.Schema({
  resident: {
    ref: "Residents",
    type: mongoose.Schema.Types.ObjectId,
  },
  visit: {
    ref: "Visits",
    type: mongoose.Schema.Types.ObjectId,
  },
  accessCode: {
    type: Number,
  },
  createDate: {
    type: Date,
    default: Date.now,
    get: (value) => value.toLocaleString("en-US", { timeZone: "UTC" }),
    set: (value) => new Date(value),
  },
});

module.exports = mongoose.model("Invites", InviteSchema);
