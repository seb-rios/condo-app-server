//GET: obtain all registered residents
const getResidents = async (req, res) => {
  try {
    res.json("Working Endpoint").send(200);
  } catch (error) {
    res.json({ errorMessage: error });
  }
};

module.exports = { getResidents };
