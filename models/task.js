const { Schema } = require('mongoose')

const taskSchema = new Schema(
  {
    body: { type: String, required: true },
    deadline: { type: Date }
  },
  { timestamps: true }
)

module.exports = taskSchema
