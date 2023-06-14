const Resident = require("../models/resident.model");

//GET: obtain all registered residents
const getResidents = async (req, res) => {
  try {
    const resident = await Resident.find();
    res.json(resident);
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

//POST: create a new resident
const createResident = async (req, res) => {
  const { name, username, email, password, phone, houseInfo } = req.body;

  const resident = new Resident({
    name: name,
    username: username,
    email: email,
    password: await Resident.encryptPassword(password),
    phone: phone,
    houseInfo: houseInfo,
  });

  try {
    const createdResident = await resident.save();
    res.json({ residentCreated: createdResident });
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

module.exports = { getResidents, createResident };
