const { Schema } = require('mongoose')

const timeslotSchema = new Schema(
  {
    subject: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String },
    description: { type: String },
    notes: [{ type: String }]
  },
  { timestamps: true }
)

module.exports = timeslotSchema
