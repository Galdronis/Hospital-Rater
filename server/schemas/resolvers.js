const { Hospital, Review, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    hospital: async () => {
     return Hospital.find()
    },
    reviews: async () => {
     return Review.find()
    }
  },


  Mutation: {
    createUser: async (parent, args, context) => {
      const user = await User.create(args)
      return user
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      } 
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }
      // console.log(user)
      const token = signToken(user);
      console.log(token)
      return { token, user };
    },
    addHospital: async (parent, { hospitalName, location }) => {
      return Hospital.create({ hospitalName, location })
    },
    addReview: async (parent, { hospitalId, reviewText, reviewAuthor, hospitalRating }) => {
      return Hospital.findOneAndUpdate(
        { _id: hospitalId },
        {
          $addToSet: { reviews: { reviewText, reviewAuthor, hospitalRating } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
  }
  };


module.exports = resolvers;
