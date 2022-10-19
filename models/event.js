const { Schema } = require('mongoose')

const eventSchema = new Schema(
  {
    title: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String },
    description: { type: String },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
  },
  { timestamps: true }
)

module.exports = eventSchema
