const express = require("express");
const db = require("../models");

module.exports = function (app) {

  // Get Exercise Data for getLastWorkout()
  app.get("/api/workouts", async (req, res) => {
    console.log("hit get /api/workouts");      
    try {
      const workouts = await db.Workout.find({})
      // console.log(workouts);
      res.json(workouts)
    } catch (err) {
      console.log("get /api/workouts err: ", err);
      res.json(err);
    }
  })

  // Add Exercise Data for addExercise()
  app.put("/api/workouts/:id", async (req, res) => {
    console.log("hit put /api/workouts");
    try {
      const newWorkout = await db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { exercises: req.body } },
        { new: true }
      )
      console.log(newWorkout);
      res.json(newWorkout);
    } catch (err) {
      console.log("put /api/workouts err: ", err);
      res.json(err);
    }
  })

  // Create New Workout for createWorkout()
  app.post("/api/workouts", async (req, res) => {
    console.log("hit post /api/workouts");
    try {
      const newExercise = await db.Workout.create({});
      console.log(newExercise);
      res.json(newExercise)
    } catch (err) {
      console.log("post /api/workouts err: ", err);
      res.json(err);
    }
  });

  // Get Exercise RAnge for getWorkoutsInRange()
  app.get("/api/workouts/range", async (req, res) => {
    console.log("hit get /api/workouts");      
    try {
      const workouts = await db.Workout.find({})
      // console.log(workouts);
      res.json(workouts)
    } catch (err) {
      console.log("get /api/workouts/range err: ", err);
      res.json(err);
    }
  })


}
