const mongoose = require('mongoose')
const taskSchema = require('./task')
const timeslotSchema = require('./timeslot')

const Task = mongoose.model('Task', taskSchema)
const Timeslot = mongoose.model('Timeslot', timeslotSchema)

module.exports = {
  Task,
  Timeslot
}
