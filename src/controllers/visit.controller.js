const Visit = require("../models/visit.model");

//GET: obtain all registered visits
const getVisits = async (req, res) => {
  try {
    const visits = await Visit.find();
    res.json(visits);
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

//POST: create a new visit
const createVisit = async (req, res) => {
  const { name, phone, plate, documentId } = req.body;

  const visit = new Visit({
    name: name,
    phone: phone,
    plate: plate,
    documentId: documentId,
  });
  try {
    const createdVisit = await visit.save();
    res.json({ visitCreated: createdVisit });
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

module.exports = { getVisits, createVisit };
