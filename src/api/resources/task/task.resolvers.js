import { Task } from './task.model'

const getTask = (_, {id}, {user}) => {
  return Task.findById(id).exec()
}

const allTasks = () => {
  return Task.find({}).exec()
}

const newTask = (_, {input}) => {
  return Task.create(input)
}

const updateTask = (_, {input}) => {
  const {id, ...update} = input

  return Task.findByIdAndUpdate(id, update, {new: true}).exec()
}

export const taskResolvers = {
  Query: {
    allTasks,
    Task: getTask
  },

  Mutation: {
    newTask,
    updateTask
  }
}
