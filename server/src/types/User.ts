export default `
  type User {
    firstName: String
    lastName: String
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }
`
