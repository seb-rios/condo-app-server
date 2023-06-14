const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const pkg = require("../package.json");
const db = require("./database");
require("dotenv");

//Routes
const residentRoute = require("./routes/resident.route");
const visitRoute = require("./routes/visit.route");

const app = express();

app.set("pkg", pkg);

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/resident", residentRoute);
app.use("/visit", visitRoute);

app.get("/", (req, res) => [
  res.send({
    author: app.get("pkg").author,
    name: app.get("pkg").name,
  }),
]);

app.listen(3001);
