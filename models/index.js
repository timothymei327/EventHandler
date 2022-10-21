const mongoose = require('mongoose')
const eventSchema = require('./event')
const taskSchema = require('./task')
const timeslotSchema = require('./timeslot')

const Event = mongoose.model('Event', eventSchema)
const Task = mongoose.model('Task', taskSchema)
const Timeslot = mongoose.model('Timeslot', timeslotSchema)

module.exports = {
  Event,
  Task,
  Timeslot
}
