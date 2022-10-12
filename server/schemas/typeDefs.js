const { gql } = require('apollo-server-express');


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
    type Mutation {
      createUser(name: String, email: String, id: String, hospitalId: String): Hospital
      # addHospital: (hospitalName: String, location: String): [Hospital]
      # addReview: (reviews: String): [Hospital]
    }

`;

module.exports = typeDefs;
