const db = require('../models');

const getWorkouts = async () => {
  const result = await db.Workout.find({})
    .lean()
    .catch(console.error);
  return result;
};

module.exports = { getWorkouts };
