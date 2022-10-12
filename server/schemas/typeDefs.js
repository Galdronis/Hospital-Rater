const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Hospital {
      _id: ID
      name: String
      location: String
      reviews: String
      reviewRating: Number
      rating: Number
    }
    type Query {
      _id: ID
      hospitalName: String
      location: String
      reviews: String
      reviewRating: Number
      rating: Number
    }
    type Mutation {
      addHospital: (name: String, location: String): Hospital
      addReview: (reviews: String): Hospital
    }
    
  # type Review {
  #   _id: ID
  #   reviewText: String
  #   reviewUser: String
  #   createdAt: String
  #   comments: [Comment]!
  # }

  # type Comment {
  #   _id: ID
  #   commentText: String
  #   createdAt: String
  # }

  # type Query {
  #   reviews: [Review]!
  #   review(reviewId: ID!): Review
  # }

  # type Mutation {
    # addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    # addComment(thoughtId: ID!, commentText: String!): Thought
    # removeThought(thoughtId: ID!): Thought
    # removeComment(thoughtId: ID!, commentId: ID!): Thought
  # }
`;

module.exports = typeDefs;
