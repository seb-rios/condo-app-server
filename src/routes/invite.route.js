const express = require("express");
const router = express.Router();

//Invite Controller
const inviteController = require("../controllers/invite.controller");
const { getInvites, createInvite, getInviteIdByResident } = inviteController;

router.get("/", getInvites);
router.get("/:residentId", getInviteIdByResident);
router.post("/", createInvite);

module.exports = router;
