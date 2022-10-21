const { Timeslot } = require('../models')

const getAllTimeslots = async (req, res) => {
  let timeslots = await Timeslot.find({})
  res.send(timeslots)
}

const getOneTimeslot = async (req, res) => {
  let timeslot = await Timeslot.findById(req.params.id)
  res.send(timeslot)
}

const createTimeslot = async (req, res) => {
  let newTimeslot = await Timeslot.create(req.body)
  res.send(newTimeslot)
}

const updateTimeslot = async (req, res) => {
  let update = await Timeslot.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(update)
}

const deleteTimeslot = async (req, res) => {
  let timeslotToDelete = await Timeslot.deleteOne({
    _id: req.params.id
  })
  res.send(timeslotToDelete)
}

module.exports = {
  getAllTimeslots,
  getOneTimeslot,
  createTimeslot,
  updateTimeslot,
  deleteTimeslot
}
