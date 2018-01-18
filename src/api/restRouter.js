import express from 'express'
import { userRouter } from './resources/user'
import { taskRouter } from './resources/task'
import { tasklistRouter } from './resources/tasklist'
import { apiErrorHandler } from './modules/errorHandler'

export const restRouter = express.Router()

restRouter.use('/user', userRouter)
restRouter.use('/task', taskRouter)
restRouter.use('/tasklist', tasklistRouter)
restRouter.use(apiErrorHandler)
