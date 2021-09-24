const db = require('../models');

const getWorkouts = async (limit) => {
  const workouts = await db.Workout.aggregate()
    .sort({ day: 'desc' })
    .limit(limit)
    .addFields({
      totalDuration: { $sum: '$exercises.duration' },
    })
    .catch(console.error);
  const result = workouts.reverse();
  return result;
};

module.exports = {
  getWorkouts,
};
