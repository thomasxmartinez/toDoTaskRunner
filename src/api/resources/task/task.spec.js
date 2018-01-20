import createApiSpec from '~/apiSpecs'
import { Task } from './task.model'
import { User } from '../user/user.model';

import { runQuery, dropDb } from "../../../../test/helpers";
import { expect } from "chai";

createApiSpec(
  Task,
  'task',
  {title: 'walk dog', complete: false }
)

describe('Task', () => {
  let user
  beforeEach(async () => {
    await dropDb()
    user = await User.create({username: 'wildbill', passwordHash: "8675"})
  })

  afterEach(async () => {
    await dropDb()
  })

  it('should create a task', async () => {
    const result = await runQuery(`
    mutation CreateNewTask($input: NewTask!) {
      task: newTask(input: $input){
        id
        title
        complete
      }
    }
    `,{
      input: {
        title: 'walk dog',
        complete: true
      }
    }, user)

    expect(result.errors).to.not.exist
    expect(result.data.task).to.exist
    expect(result.data.task.title).to.equal('walk dog')

  })
})