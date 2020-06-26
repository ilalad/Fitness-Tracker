const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
    useNewUrlParser: true,
    useFindAndModify: false
});
const db = require("./models");

const path = require("path");

// This assignment will require you to create Mongo database with a 
// Mongoose schema and handle routes with Express.


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
})

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/exercise.html"));
})

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/stats.html"));
})


app.get("/api/workouts", (req, res) => {
    // console.log("req.body from/api/workouts", req.body);
    db.Workout.find({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});
// Add exercises to a previous workout plan.

app.get("/api/workouts/:id", (req, res) => {
    db.Workout.update({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});



app.put("/api/workouts/:id", (req, res) => {
    console.log("req.body from PUT at /api/workouts", req.body);
    db.Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        })
});

app.post("/api/workouts/", (req, res) => {
    db.Workout.create(req.body)
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


//   * Add new exercises to a new workout plan.

//   * View multiple the combined weight of multiple exercises on the `stats` page.
