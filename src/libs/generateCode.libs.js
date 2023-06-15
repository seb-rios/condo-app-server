const Invite = require("../models/invite.model");
require("dotenv");

const generateRandomNumber = () => {
  const minValue = parseInt(process.env.MIN_CODE_VALUE);
  const maxValue = parseInt(process.env.MAX_CODE_VALUE);
  const randomNumber =
    Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  return randomNumber.toString().padStart(4, "0");
};

const isAccessCodeUnique = async (code) => {
  const invites = await Invite.find();
  for (const invite of invites) {
    const codeExists = await Invite.comparePassword(code, invite.accessCode);
    if (codeExists) {
      return false;
    }
  }
  return true;
};

const generateUniqueAccessCode = async () => {
  let code = generateRandomNumber();
  while (!(await isAccessCodeUnique(code))) {
    code = generateRandomNumber();
  }
  return code;
};

module.exports = { generateUniqueAccessCode };
