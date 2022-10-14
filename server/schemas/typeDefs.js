const { gql } = require('apollo-server-express');


const typeDefs = gql`
    type Review {
      _id: ID
      reviewAuthor: String
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
      reviews: [Review]
    }
    type Auth {
    token: ID!
    user: User
  }
    type Query {
      hospital: [Hospital]
      hospitalName: String
    }
    type Mutation {
      createUser(username: String, email: String, password: String): User
      login(email: String!, password: String!): Auth
      addHospital(hospitalName: String, location: String): [Hospital]
      addReview(reviewText: String!, reviewAuthor: String!, hospitalRating: Int): [Review]

      # addReview: (reviews: String): [Hospital]
    }
`;

module.exports = typeDefs;
