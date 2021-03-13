const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    required: "Enter exercise name"
  },
  duration: {
    type: Number
  },
  weight: {
    type: Number
  },
  reps:{
    type: Number
  },
  sets:{
    type: Number
  }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
