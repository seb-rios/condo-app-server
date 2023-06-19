const express = require("express");
const router = express.Router();

//Code Controller
const codeController = require("../controllers/code.controller");
const { verifyCode } = codeController;

router.get("/:code", verifyCode);

module.exports = router;
