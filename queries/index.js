const db = require('../models');

const getWorkouts = async () => {
  const result = await db.Workout.find({})
    .lean()
    .catch(console.error);
  return result;
};

const getLastSevenWorkouts = async () => {
  const result = await db.Workout.aggregate()
    .sort({ day: 'desc' })
    .limit(7)
    .addFields({
      totalDuration: { $sum: '$exercises.duration' },
    })
    .catch(console.error);
  return result;
};

module.exports = {
  getWorkouts,
  getLastSevenWorkouts,
};
