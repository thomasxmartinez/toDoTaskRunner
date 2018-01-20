import createApiSpec from "~/apiSpecs";
import { Tasklist } from "./tasklist.model";
import { User } from "../user/user.model";
import {Task} from "../task/task.model"

import { runQuery, dropDb } from "../../../../test/helpers";
import { expect } from "chai";

createApiSpec(Tasklist, "tasklist", { title: "cleanhouse", tasks: [], complete: false });

describe("Tasklist", () => {
  let user;
  let task;
  beforeEach(async () => {
    await dropDb();
    user = await User.create({ username: "wildbill", passwordHash: "8675" });
    task = await Task.create({ title: 'eat food', complete: false})
  });

  afterEach(async () => {
    await dropDb();
  });

  it("should create a tasklist", async () => {
    const result = await runQuery(
      `
    mutation CreateNewTasklist($input: NewTasklist!) {
      tasklist: newTasklist(input: $input){
        id
        title
        complete
      }
    }
    `,
      {
        input: {
          title: "take trash out",
          complete: false
        }
      },
      user
    );

    expect(result.errors).to.not.exist;
    expect(result.data.tasklist).to.exist;
    expect(result.data.tasklist.title).to.equal("take trash out");
  });
});
