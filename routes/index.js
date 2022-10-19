const { Router } = require('express')
const { events, notes, tasks } = require('../controllers')
const router = Router()

//event routes
router.get('/events', events.getAllEvents)

//notes routes
//task routes

module.exports = router
