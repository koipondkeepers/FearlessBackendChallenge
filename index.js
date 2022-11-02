const fs = require("fs");
const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is now running"));

app.get("/items", (req, res) => {
  
})

app.post("/items/addItem", (req,res) => {
  const id = uuid();
  const {itemName} = req.body;
  if (!itemName) {
    return res.sendStatus(400);
  }

  const item = {
    id: id,
    item: itemName
  }

  fs.mkdirSync("data/items", {recursive: true});
  fs.appendFileSync("data/items/items.txt", JSON.stringify(item) + "\n");

  res.status(201).json({
    id: id,
    item: itemName
  });
})