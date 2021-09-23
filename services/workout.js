const db = require('../models');

// create a new workout
// will use today as default
const create = async (data) => {
  const newWorkout = new db.Workout(data);
  const result = await newWorkout.save();
  return result;
};

module.exports = { create };
