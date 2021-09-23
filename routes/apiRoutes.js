const router = require('express').Router();
const query = require('../queries');
const services = require('../services');

// route : /api/

// get all workouts
const getWorkouts = async (req, res) => {
  try {
    const workouts = await query.getWorkouts();
    res.json(workouts);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// add an exercise to a workout
const addExercise = async (req, res) => {
  try {
    const isSuccessful = await services.addExercise(
      req.params.id,
      req.body,
    );
    if (isSuccessful) {
      res.json({ message: 'successfully add exercise' });
    } else {
      res.status(400).json({ message: 'Cannot add your exercise' });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
};

// create a new workout
const createWorkout = async (req, res) => {
  try {
    const workout = await services.workout.create();
    res.json(workout);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

router.get('/workouts', getWorkouts);
router.put('/workouts/:id', addExercise);
router.post('/workouts', createWorkout);

module.exports = router;
