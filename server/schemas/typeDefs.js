const { gql } = require('apollo-server-express');


const typeDefs = gql`
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
      reviews: [Review]
    }
    type Review {
      _id: ID
      reviewAuthor: String
      reviewText: String
      hospitalRating: Int
    }
    type Auth {
    token: ID!
    user: User
  }
    type Query {
      hospital: [Hospital]
      reviews: [Review]
    }
    type Mutation {
      createUser(username: String, email: String, password: String): Auth
      login(email: String!, password: String!): Auth
      addHospital(hospitalName: String, location: String): Hospital
      addReview(hospitalId: ID, reviewText: String!, reviewAuthor: String!, hospitalRating: Int): Hospital
    }
`;

module.exports = typeDefs;
