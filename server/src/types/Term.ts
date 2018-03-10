export default `
  type Term {
    name: String!
  }

  type Query {
    terms: [Term]
    term(id: ID!): Term
  }

  type Mutation {
    createTerm(name: String!): Boolean!
  }
`
