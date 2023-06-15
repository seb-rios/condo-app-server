const Invite = require("../models/invite.model");

const generateRandomNumber = () => {
  const minValue = 0;
  const maxValue = 9999;
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
