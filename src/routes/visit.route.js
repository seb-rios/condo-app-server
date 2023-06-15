const express = require("express");
const router = express.Router();

//Visit Controller
const visitController = require("../controllers/visit.controller");
const { getVisits, createVisit } = visitController;

router.get("/", getVisits);
router.post("/", createVisit);

module.exports = router;
