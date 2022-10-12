const { Hospital } = require('../models');


const resolvers = {
  Query: {
    hospital: async () => Hospital.find()
  },

  // Mutation: {
  //   addHospital: async (parent, { hospitalName, location }) => {
  //     return Hospital.create({ hospitalName, location })
  //   }
  // } 
  }
//     addReview: async (parent, { reviews }) => {
//       return Hospital.create({ reviews })
//     }
//   }
// }

module.exports = resolvers;
