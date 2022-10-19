const { Event } = require('../models')

const getAllEvents = async (req, res) => {
  let events = await Event.find({}).populate('notes')
  res.send(events)
}

module.exports = {
  getAllEvents
}
