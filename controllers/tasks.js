const { Task } = require('../models')

const getAllTasks = async (req, res) => {
  let tasks = await Task.find({})
  res.send(tasks)
}

const getOneTask = async (req, res) => {
  let task = await Task.findById(req.params.id)
  res.send(task)
}

module.exports = {
  getAllTasks,
  getOneTask
}
