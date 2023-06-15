const Invite = require("../models/invite.model");
const libs = require("../libs/generateCode.libs");
const { generateUniqueAccessCode } = libs;

//GET: obtain all registered invites
const getInvites = async (req, res) => {
  try {
    const invite = await Invite.find();
    res.json({ invite });
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

//GET: get ObjectId by username (invites)
const getInviteIdByLogin = async (req, res) => {};

//POST: create a new invite
const createInvite = async (req, res) => {
  const { resident, visit } = req.body;
  let accessCode = "";

  //generates access code
  await generateUniqueAccessCode()
    .then((code) => {
      accessCode = code;
      console.log("Access Code Generated: " + accessCode);
    })
    .catch((error) => {
      console.log({ errorMessage: error });
    });

  const invite = new Invite({
    resident: resident,
    visit: visit,
    accessCode: await Invite.encryptPassword(accessCode),
  });

  try {
    const createdInvite = await invite.save();
    res.json({ inviteCreated: createdInvite });
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

module.exports = { getInvites, createInvite };
