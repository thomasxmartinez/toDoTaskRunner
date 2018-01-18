import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Task must have a title']
  },

  complete: {
    type: Boolean,
    required: true,
    default: false
  }
})

export const Task = mongoose.model('task', taskSchema)
