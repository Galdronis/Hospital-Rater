const { Hospital, Review, User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    hospital: async () => Hospital.find()
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
    // addReview: async (parent, { reviews }) => {
    //   return Hospital.findOneAndUpdate({ reviews })
    // }

  }
};

  
//     addReview: async (parent, { reviews }) => {
//       return Hospital.create({ reviews })
//     }
//   }
// }


module.exports = resolvers;
