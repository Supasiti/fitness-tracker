const db = require('../models');

// add exercise to workout
// return true if successful
const addExercise = async (workoutId, exerciseData) => {
  const workout = await db.Workout.findById(workoutId).catch(
    console.error,
  );
  workout.exercises.push(exerciseData);
  await workout.save();
  return true;
};

module.exports = addExercise;
