const { gql } = require('apollo-server-express');
const { Hospital } = require('../models');



  type Query {
    reviews: [Review]!
    review(reviewId: ID!): Review
  },

  type Mutation {
    addReview(reviewText: String!, reviewUser: String!): Review
    createUser( username: String), email: String!, first_name: login(Username: 
  }

const typeDefs = gql`
    type Hospital {
      _id: ID
      hospitalName: String
      location: String
      reviews: String
      # reviewRating: Number
      # rating: Number
    }
    type Query {
      hospital: [Hospital]
      hospitalName: String
    }
    # type Mutation {
    #   addHospital: (hospitalName: String, location: String): [Hospital]
    #   addReview: (reviews: String): [Hospital]
    # }

`;

module.exports = typeDefs;
