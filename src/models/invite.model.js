const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const InviteSchema = mongoose.Schema({
  resident: {
    ref: "Residents",
    type: mongoose.Schema.Types.ObjectId,
  },
  visit: {
    ref: "Visits",
    type: mongoose.Schema.Types.ObjectId,
  },
  accessCode: {
    type: String,
  },
  createDate: {
    type: Date,
    default: Date.now,
    get: (value) => value.toLocaleString("en-US", { timeZone: "UTC" }),
    set: (value) => new Date(value),
  },
});

//Encrypt Access Code
InviteSchema.statics.encryptPassword = async (code) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(code, salt);
};

//Create method that compares accessCodes a.k.a read the encrypted access code
InviteSchema.statics.comparePassword = async (code, receivedCode) => {
  return await bcrypt.compare(code, receivedCode);
};

module.exports = mongoose.model("Invites", InviteSchema);
