const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type Review {
      reviewText: String
      hospitalRating: Int
    }
    type Hospital {
      _id: ID
      hospitalName: String
      location: String
      reviews: [Review]
    }
    type Query {
      hospital: [Hospital]
      hospitalName: String
    }
    # type Mutation {
    #   addHospital: (hospitalName: String, location: String): Hospital
    #   createUser(name: String, email: String, id: String, hospitalId: String): Hospital
      # addReview: (reviews: String): [Hospital]
    
`;

module.exports = typeDefs;
