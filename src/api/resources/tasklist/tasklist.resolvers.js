import { Tasklist } from './tasklist.model'

const getTasklist = (_, {id}) => {
  return Tasklist.findById(id).exec()
}

const allTasklists = () => {
  return Tasklist.find({}).exec()
}

const newTasklist = (_, {input}) => {
  return Tasklist.create(input)
}

const updateTasklist = (_, {input}) => {
  const {id, ...update} = input

  return Tasklist.findByIdAndUpdate(id, update, {new: true}).exec()
}

export const tasklistResolvers = {
  Query: {
    allTasklists,
    Tasklist: getTasklist,
  },

  Mutation: {
    newTasklist,
    updateTasklist
  },

  Tasklist: {
    async tasks(tasklist) {
      const populated = await tasklist
      .populate('tasks')
      .execPopulate()

      return populated.tasks
    }
  }
}
