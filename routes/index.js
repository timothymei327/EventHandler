const { Router } = require('express')
const { events, tasks, timeslots } = require('../controllers')
const router = Router()

//event routes
router.get('/events', events.getAllEvents)
router.get('/events/:id', events.getOneEvent)
router.post('/events', events.createEvent)
router.put('/events/:id', events.updateEvent)
router.delete('/events:id', events.deleteEvent)

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
