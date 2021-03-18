const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  
});
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://mengyue_z:suan1314@cluster0.wbjbp.mongodb.net/workout?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
// routes
app.use(require("./routes/api-route.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
