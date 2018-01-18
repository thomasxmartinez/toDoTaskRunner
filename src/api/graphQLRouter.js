import { makeExecutableSchema } from 'graphql-tools'
import { userType, userResolvers } from './resources/user'
import { taskType, taskResolvers } from './resources/task'
import { tasklistType, tasklistResolvers } from './resources/tasklist'
import merge from 'lodash.merge'
import { graphqlExpress } from 'apollo-server-express'

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    userType,
    taskType,
    tasklistType
  ],
  resolvers: merge(
    {},
    userResolvers,
    taskResolvers,
    tasklistResolvers
  )
})


export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))
