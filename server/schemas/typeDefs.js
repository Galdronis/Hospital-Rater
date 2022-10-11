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
  }

  # type Mutation {
    # addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    # addComment(thoughtId: ID!, commentText: String!): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought
  # }
`;

module.exports = typeDefs;
