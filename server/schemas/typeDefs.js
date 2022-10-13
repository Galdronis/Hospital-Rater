const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type Review {
      reviewText: String
      hospitalRating: Int
    }
    type User {
    username: String,
    email: String, 
    _id: ID,
    hospitalId: String,
    password: String
  }
    type Hospital {
      _id: ID
      hospitalName: String
      location: String
      reviews: [Hospital]
    }
    type Query {
      hospital: [Hospital]
      hospitalName: String
    }
    type Mutation {
      createUser(username: String, email: String, id: String, hospitalId: String, password: String): User
      # addHospital: (hospitalName: String, location: String): [Hospital]
      # addReview: (reviews: String): [Hospital]
    }
`;

module.exports = typeDefs;
