const mongoose = require('mongoose')
const eventSchema = require('./event')
const noteSchema = require('./note')
const taskSchema = require('./task')

const Event = mongoose.model('Event', eventSchema)
const Note = mongoose.model('Note', noteSchema)
const Task = mongoose.model('Task', taskSchema)

module.exports = {
  Event,
  Note,
  Task
}
