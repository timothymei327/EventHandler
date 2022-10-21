const mongoose = require('mongoose')
const eventSchema = require('./event')
const taskSchema = require('./task')

const Event = mongoose.model('Event', eventSchema)
const Task = mongoose.model('Task', taskSchema)

module.exports = {
  Event,
  Task
}
