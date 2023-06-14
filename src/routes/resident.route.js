const express = require("express");
const router = express.Router();

//Resident Controller
const residentController = require("../controllers/resident.controller");
const { getResidents, createResident } = residentController;

router.get("/", getResidents);
router.post("/", createResident);

module.exports = router;
