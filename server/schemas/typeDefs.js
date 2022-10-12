const { gql } = require('apollo-server-express');
const { Hospital } = require('../models');

const typeDefs = gql`
    type Hospital {
      _id: ID
      hospitalName: String
      location: String
      review: [Review]
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
