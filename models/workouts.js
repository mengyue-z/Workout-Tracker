const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const workoutSchema = new Schema({
  day: {
      type:Date,
      default: Date.now
  },
  exercises:[{
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
  },
  distance: {
    type: Number
  }
}]
} ,opts );

workoutSchema.virtual('totalDuration').
  get(function() { 
  let totalDuration = 0
  this.exercises.forEach(exercise => {
    totalDuration += exercise.duration
  });
  return totalDuration;
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
