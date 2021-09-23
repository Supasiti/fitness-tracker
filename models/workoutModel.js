const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: 'type is required',
  },

  name: {
    type: String,
    trim: true,
    required: 'name is required',
  },

  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number,
});

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: 'Date is required.',
    default: Date.now,
  },
  exercises: [ExerciseSchema],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
