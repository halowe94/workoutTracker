const { json } = require("express");
const Workout = require("../models/workout");

module.exports = function(app) {
    //get route
    app.get("/api/workouts", (req, res) => {
        Workout.find({}).then(workoutDB => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })

    //post route
    app.post("/api/workouts", (req, res) => {
        Workout.create({}).then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        }); 
    })

    //put route
    app.put("/api/workouts", (req, res) => {
        Workout.findByIdAndUpdate(req.params.id, {$push: {exercises: req.body}})
        .then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err)
        })
    });

    //get route
    app.get("api/workouts", (req, res) => {
        Workout.find({}).then(workoutDB => {
            res.json(workoutDB);
        })
        .catch(err => {
            res.status(400).json(err);
        })
    })
};