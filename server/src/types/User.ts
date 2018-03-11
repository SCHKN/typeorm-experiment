export default `
  type User {
    name: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type SignUpResponse {
    success: Boolean!
    errors: [Error!]
  }

  type Mutation {
    signup(name: String!, email: String!, password: String!): SignUpResponse!
  }
`
