const express = require("express");
const router = express.Router();

//Visit Controller
const visitController = require("../controllers/visit.controller");
const { createResident } = require("../controllers/resident.controller");
const { getVisits, createVisit } = visitController;

router.get("/", getVisits);
router.post("/", createResident);

module.exports = router;
