const fs = require("fs");
const express = require("express");
const { v4: uuid } = require("uuid");

const app = express();

app.use(express.json());

app.listen(3000, () => console.log("Server is now running"));

app.get("/items", (req, res) => {
  let items;
  if (fs.existsSync("data/items")) {
      items = fs.readFileSync("data/items/items.txt", "utf-8");
  } else {
    return res.sendStatus(404);
  }
  const sanitizedItems = sanitizeData(items);
  res.status(200).json({
    items: sanitizedItems
  })
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

/** @returns an array of objects that formats the data into something more digestible */
function sanitizeData(str){
  const splitData = str.split('\n');
  const data = [];
  try {
    splitData.forEach((element, index) => {
      if (element.length < 1){
        return;
      } 
      data.push(JSON.parse(element));
    })
  } catch (error) {
    console.log(error);
  }
  
  return data;
}