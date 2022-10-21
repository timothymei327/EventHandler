const { Task } = require('../models')

const getAllTasks = async (req, res) => {
  let tasks = await Task.find({})
  res.send(tasks)
}

module.exports = {
  getAllTasks
}
