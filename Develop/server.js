const express = require("express");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PORT = process.env.PORT || 3000;
var path = require("path");

const app = express();
app.use(express.static("public"));
const db = require("./models");


// This assignment will require you to create Mongo database with a 
// Mongoose schema and handle routes with Express.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// When the user loads the page, they should be given the option to create a new workout, 
// or continue with their last workout.

// Add exercises to a previous workout plan.

//   * Add new exercises to a new workout plan.

//   * View multiple the combined weight of multiple exercises on the `stats` page.
