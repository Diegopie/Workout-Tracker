const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    day: {
      type: Date,
      required: true,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
          trim: true,
          lowercase: true,
        },
        duration: {
          type: Number,
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },

      }
    ]
  }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;