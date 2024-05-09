const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

// GET all workouts
const getWorkouts = async (_req, _res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })

  _res.status(200).json(workouts)
}

// GET a single workout
const getWorkout = async (_req, _res) => {
  const { id } = _req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return _res.status(404).json({ error: 'No such workout' })
  }

  const workout = await Workout.findById(id)

  if (!workout) {
    return _res.status(404).json({ error: 'No such workout' })
  }

  _res.status(200).json(workout)
}


// CREATE a new workout
const createWorkout = async (_req, _res) => {
  const { title, reps, load } = _req.body

  // add doc to db
  try {
    const workout = await Workout.create({ title, reps, load })
    _res.status(200).json(workout)
  } catch (error) {
    _res.status(400).json({ error: error.message })
  }
}

// DELETE a workout


// UPDATE a workout


module.exports = {
  getWorkouts,
  getWorkout,
  createWorkout
}