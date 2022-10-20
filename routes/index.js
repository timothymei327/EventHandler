const { Router } = require('express')
const { events, notes, tasks } = require('../controllers')
const router = Router()

//event routes
router.get('/events', events.getAllEvents)
router.get('/events/:id', events.getOneEvent)
router.post('/events', events.createEvent)

//notes routes
//task routes

module.exports = router
