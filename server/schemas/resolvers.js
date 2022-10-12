const { Hospital } = require('../models');

const resolvers = {
  Query: {
    hospitals: async () => Category.find(),
    hospital: async (parent, { hospitalId }) => {
      return Hospital.findOne({ _id: hospitalId });
    },
  },

    Mutation: {
      addHospital: async (parent, { hospitalName, location }) => {
        return hospital.create({ hospitalName, location })
      }
    }

  // Mutation: {
  //   addReview: async (parent, { reviewText, reviewAuthor }) => {
  //     return review.create({ reviewText, reviewAuthor });
  //   },
  //   addComment: async (parent, { reviewId, commentText }) => {
  //     return Review.findOneAndUpdate(
  //       { _id: reviewId },
  //       {
  //         $addToSet: { comments: { commentText } },
  //       },
  //       {
  //         new: true,
  //         runValidators: true,
  //       }
  //     );
  //   },
  //   removeReview: async (parent, { reviewId }) => {
  //     return Review.findOneAndDelete({ _id: reviewId });
  //   },
  //   removeComment: async (parent, { reviewId, commentId }) => {
  //     return review.findOneAndUpdate(
  //       { _id: reviewId },
  //       { $pull: { comments: { _id: commentId } } },
  //       { new: true }
  //     );
  //   },
  // },
};

module.exports = resolvers;
