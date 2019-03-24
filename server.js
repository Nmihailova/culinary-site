const express = require('express');
const app = express();
const jsonParser = express.json();
// const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
var port = process.env.PORT || 3001;

const Schema = mongoose.Schema;

const reicpeScheme = new Schema({
  title: String,
  text: String
},
  { versionKey: false }
);
const Recipe = mongoose.model("Recipe", reicpeScheme);

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect("mongodb://localhost:27017/recipedb", { useNewUrlParser: true },
  function (err) {
    if (err) return console.log("my error: " + err);

    app.listen(port, function () {
      console.log("Сервер ожидает подключения...");
    });
  });

// app.use(cors());
// app.options('*', cors());

const cutPotentialDangerousChars = (data) => {
  let potentialDangerousChars = /[<>{}]/gi;
  for (let key in data) {
    let newStr = data[key].toString().replace(potentialDangerousChars, " ");
    data[key] = newStr;
  }
};

app.post('/api/add-new-recipe', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  let dataObj = req.body;
  cutPotentialDangerousChars(dataObj);

  Recipe.create({
    title: dataObj.title,
    text: dataObj.text
  }).then(newRecipe => {
      res.send(newRecipe);
  }).catch(err => {
    console.log(err, 'feedback not created');
    res.send(err);
  });
});

app.get('/api/get-recipes', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) return console.log(err);

    res.send(recipes); 
  });
});

app.delete("/api/delete-recipes", function (req, res) {
  Recipe.deleteMany({ title: { $exists: true } }, function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});



