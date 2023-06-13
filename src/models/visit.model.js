const moongose = require("mongoose");

const VisitSchema = moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  plate: {
    type: String,
    required: true,
  },
  documentId: {
    type: Number,
    required: true,
  },
});

module.exports = moongose.model("Visits", VisitSchema);
