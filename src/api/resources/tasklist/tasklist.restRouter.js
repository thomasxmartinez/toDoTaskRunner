import express from 'express'
import tasklistController from './tasklist.controller'

export const tasklistRouter = express.Router()

tasklistRouter.param('id', tasklistController.findByParam)

tasklistRouter.route('/')
  .get(tasklistController.getAll)
  .post(tasklistController.createOne)

tasklistRouter.route('/:id')
  .get(tasklistController.getOne)
  .put(tasklistController.updateOne)
  .delete(tasklistController.createOne)
