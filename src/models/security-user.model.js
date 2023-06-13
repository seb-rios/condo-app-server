const mongoose = require("mongoose");

const SecurityUserSchema = moongose.Schema({
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
});

//Encrypt Passowrd
SecurityUserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//Create method that compares password a.k.a read the encrypted password
SecurityUserSchema.statics.comparePassword = async (
  password,
  receivedPassword
) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = mongoose.model("SecurityUsers", SecurityUserSchema);
