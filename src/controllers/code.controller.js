const Invite = require("../models/invite.model");

//GET: verified code entered by visit
const verifyCode = async (req, res) => {
  try {
    const { code: enteredCode } = req.params;
    const invites = await Invite.find();

    for (let invite of invites) {
      const matchCode = await Invite.comparePassword(
        enteredCode,
        invite.accessCode
      );

      if (matchCode) {
        return res.json(matchCode);
      }
    }

    res.json(false);
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

module.exports = { verifyCode };
