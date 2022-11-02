const fs = require("fs");
const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());


app.listen(3000, () => console.log("Server is now running"));