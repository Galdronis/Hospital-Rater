const { gql } = require('apollo-server-express');
const { Hospital } = require('../models');


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
