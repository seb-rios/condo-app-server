const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const ResidentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  houseInfo: {
    type: String,
    required: true,
  },
  favorites: {
    ref: "Visits",
    type: mongoose.Schema.Types.ObjectId,
  },
});

//Encrypt Passowrd
ResidentSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//Create method that compares password a.k.a read the encrypted password
ResidentSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = mongoose.model("Residents", ResidentSchema);
