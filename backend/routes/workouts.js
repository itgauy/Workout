const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', (_req, _res) => {
  _res.json({ mssg: 'DELETE a workout' })
})

// UPDATE a workout
router.patch('/:id', (_req, _res) => {
  _res.json({ mssg: 'UPDATE a workout' })
})

module.exports = router