const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

// GET all workouts
router.get('/', (_req, _res) => {
  _res.json({ mssg: 'GET all workouts' })
})

// GET a single workout
router.get('/:id', (_req, _res) => {
  _res.json({ mssg: 'GET single workout' })
})

// POST a new workout
router.post('/', async (_req, _res) => {
  const { title, reps, load } = _req.body

  try {
    const workout = await Workout.create({ title, reps, load })
    _res.status(200).json(workout)
  } catch (error) {
    _res.status(400).json({ error: error.message })
  }
})

// DELETE a workout
router.delete('/:id', (_req, _res) => {
  _res.json({ mssg: 'DELETE a workout' })
})

// UPDATE a workout
router.patch('/:id', (_req, _res) => {
  _res.json({ mssg: 'UPDATE a workout' })
})

module.exports = router