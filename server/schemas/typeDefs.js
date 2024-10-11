const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    bookcount: String!
    savedbooks: String!
  }

  type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    image: String!
    Link: String!
  }
  type Auth {
  token: String!
  user: User
  }
  

  type Query {
    getsingleuser: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
