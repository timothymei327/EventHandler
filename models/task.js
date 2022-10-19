const { Schema } = require('mongoose')

const taskSchema = new Schema(
  {
    task: { type: String, required: true },
    deadline: { type: Date }
  },
  { timestamps: true }
)

module.exports = taskSchema
