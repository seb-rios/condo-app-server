const express = require("express");
const router = express.Router();

//Invite Controller
const inviteController = require("../controllers/invite.controller");
const { getInvites, createInvite } = inviteController;

router.get("/", getInvites);
router.post("/", createInvite);

module.exports = router;
