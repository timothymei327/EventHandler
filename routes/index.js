const { Router } = require('express')
const { tasks, timeslots } = require('../controllers')
const router = Router()

//task routes
router.get('/tasks', tasks.getAllTasks)
router.get('/tasks/:id', tasks.getOneTask)
router.post('/tasks', tasks.createTask)
router.put('/tasks/:id', tasks.updateTask)
router.delete('/tasks/:id', tasks.deleteTask)

//timeslot routes
router.get('/timeslots', timeslots.getAllTimeslots)
router.get('/timeslots/:id', timeslots.getOneTimeslot)
router.post('/timeslots', timeslots.createTimeslot)
router.put('/timeslots/:id', timeslots.updateTimeslot)
router.delete('/timeslots/:id', timeslots.deleteTimeslot)

module.exports = router
