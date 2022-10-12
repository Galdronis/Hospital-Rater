const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Review {
    _id: ID
    reviewText: String
    reviewUser: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    createdAt: String
  }

  type Query {
    reviews: [Review]!
    review(reviewId: ID!): Review
  },

  type Mutation {
    addReview(reviewText: String!, reviewUser: String!): Review
    createUser( username: String), email: String!, first_name: login(Username: 
  }
`;

module.exports = typeDefs;
