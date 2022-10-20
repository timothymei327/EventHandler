const { Event } = require('../models')

const getAllEvents = async (req, res) => {
  let events = await Event.find({}).populate('notes')
  res.send(events)
}

const getOneEvent = async (req, res) => {
  let event = await Event.findById(req.params.id).populate('notes')
  res.send(event)
}

const createEvent = async (req, res) => {
  let newEvent = await Event.create(req.body)
  res.send(newEvent)
}

module.exports = {
  getAllEvents,
  getOneEvent,
  createEvent
}
