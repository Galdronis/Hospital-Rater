const { Hospital, Review, User } = require('../models');

const resolvers = {
  Query: {
    hospital: async () => Hospital.find()
  },


  Mutation: {
    createUser: async (parent, args, context, info) => {
      const user = await User.create(args)
      // const hospital = await Hospital.create({ userId: user.id, })
      const data = {
        username: user.username,
        email: user.email,
        password: user.password
      }
    }
  },
};

  // Mutation: {
  //   addHospital: async (parent, { hospitalName, location }) => {
  //     return Hospital.create({ hospitalName, location })
  //   }
  // } 
  
//     addReview: async (parent, { reviews }) => {
//       return Hospital.create({ reviews })
//     }
//   }
// }


module.exports = resolvers;
