import mongoose from 'mongoose'

const tasklistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Tasklist must have title']
  },

  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'task'
  }],

  complete: {
    type: Boolean,
    required: true,
    default: false
  }
})

export const Tasklist = mongoose.model('tasklist', tasklistSchema)
