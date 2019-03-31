const express = require('express');
const app = express();
const jsonParser = express.json();
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 3001;

const Schema = mongoose.Schema;

const reicpeScheme = new Schema({
  title: String,
  text: String
},
  { versionKey: false }
);
const Recipe = mongoose.model("Recipe", reicpeScheme);

app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get(/\/[^get-]/, function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

mongoose.connect("mongodb://localhost:27017/recipedb", { useNewUrlParser: true },
  function (err) {
    if (err) return console.log("my error: " + err);

    app.listen(port, function () {
      console.log("Сервер ожидает подключения...");
    });
  });

const cutPotentialDangerousChars = (data) => {
  let potentialDangerousChars = /[<>{}]/gi;
  for (let key in data) {
    let newStr = data[key].toString().replace(potentialDangerousChars, " ");
    data[key] = newStr;
  }
};

app.post('/add-new-recipe', jsonParser, function (req, res) {
  if (!req.body) return res.sendStatus(400);

  let dataObj = req.body;
  cutPotentialDangerousChars(dataObj);

  Recipe.create({
    img: dataObj.img,
    title: dataObj.title,
    text: dataObj.text
  }).then(newRecipe => {
      res.send(newRecipe);
  }).catch(err => {
    console.log(err, "recipe not created");
    res.send(err);
  });
});

app.get('/get-recipes', (req, res) => {
  Recipe.find({}, (err, recipes) => {
    if (err) return console.log(err);

    res.send(recipes); 
  });
});

app.put('/update-recipe', jsonParser, (req, res) => {
  let dataObj = req.body;
  cutPotentialDangerousChars(dataObj);

  let id = dataObj.id;
  Recipe.findOneAndUpdate({_id: id}, {title: dataObj.title, text: dataObj.text}, {new: true}, function(err, recipe) {
    if(err) return console.log(err);

    res.send(recipe);
  })
})

app.delete("/delete-recipes/:id", function (req, res) {
  let id = req.params.id;
  Recipe.findByIdAndDelete(id, function (err, data) {
    if (err) return console.log(err);
    res.send(data);
  });
});



