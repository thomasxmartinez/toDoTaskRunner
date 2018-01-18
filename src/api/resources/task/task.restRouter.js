import express from 'express'
import taskController from './task.controller'

export const taskRouter = express.Router()

taskRouter.param('id', taskController.findByParam)

taskRouter.route('/')
  .get(taskController.getAll)
  .post(taskController.createOne)

taskRouter.route('/:id')
  .get(taskController.getOne)
  .put(taskController.updateOne)
  .delete(taskController.createOne)
