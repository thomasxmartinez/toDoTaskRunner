import createApiSpec from '~/apiSpecs'
import { Task } from './task.model'

createApiSpec(
  Task,
  'task',
  {title: 'downtown jamming', complete: true }
)
