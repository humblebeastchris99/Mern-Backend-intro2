const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
// set up middle ware
app.use(express.json());
const cors = require("cors");
app.use(cors());

// establish communication to MongoDB atlas (database)

mongoose.connect("mongodb+srv://humblebeastchris99:Student1234!@cluster0.jzi7y1y.mongodb.net/ExoticDealership?retryWrites=true&w=majority").then( () =>
console.log("Connected To Database")).then( () =>{
app.listen(3001)
}).catch((err) => console.log(err));






