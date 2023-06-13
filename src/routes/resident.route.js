const express = require("express");
const router = express.Router();

//Resident Controller
const residentController = require("../controllers/resident.controller");
const { getResidents } = residentController;

router.get("/", getResidents);

module.exports = router;
