export default `
  type Category {
    name: String
  }

  type Query {
    categories: [Category]
    category(id: ID!): Category
  }
`
