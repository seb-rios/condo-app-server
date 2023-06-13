const express = require("express");
const cors = require("cors");
const pkg = require("../package.json");
const db = require("./database");
require("dotenv");

//Routes
const residentRoute = require("./routes/resident.route");

const app = express();

app.set("pkg", pkg);

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/resident", residentRoute);

app.get("/", (req, res) => [
  res.send({
    author: app.get("pkg").author,
    name: app.get("pkg").name,
  }),
]);

app.listen(3001);
