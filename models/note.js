const { Schema } = require('mongoose')

const noteSchema = new Schema(
  {
    body: { type: String, required: true },
    event: { type: Schema.Types.ObjectId, ref: 'Event' }
  },
  { timestamps: true }
)

module.exports = noteSchema
