import createApiSpec from '~/apiSpecs'
import { Tasklist } from './tasklist.model'

createApiSpec(
  Tasklist,
  'tasklist',
  {title: 'study jams', complete: true}
)
