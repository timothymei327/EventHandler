const { Task } = require('../models')

const getAllTasks = async (req, res) => {
  let tasks = await Task.find({})
  res.send(tasks)
}

const getOneTask = async (req, res) => {
  let task = await Task.findById(req.params.id)
  res.send(task)
}

const createTask = async (req, res) => {
  let newTask = await Task.create(req.body)
  res.send(newTask)
}

const updateTask = async (req, res) => {
  let update = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.send(update)
}

const deleteTask = async (req, res) => {
  let taskToDelete = await Task.findByIdAndDelete(req.params.id)
  res.send(taskToDelete)
}

module.exports = {
  getAllTasks,
  getOneTask,
  createTask,
  updateTask,
  deleteTask
}
