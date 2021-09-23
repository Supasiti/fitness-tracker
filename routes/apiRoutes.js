const router = require('express').Router();

// route : /api/

const createWorkout = (req, res) => {
  console.log(req.body);
};

router.post('/workouts', createWorkout);

module.exports = router;
