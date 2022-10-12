const { Review, User } = require('../models');

const resolvers = {
  Query: {
    reviews: async () => {
      return Review.find().sort({ createdAt: -1 });
    },

    review: async (parent, { reviewId }) => {
      return Review.findOne({ _id: reviewId });
    },
  },

  Mutation: {
    addReview: async (parent, { reviewText, reviewAuthor }) => {
      return review.create({ reviewText, reviewAuthor });
    },
    addComment: async (parent, { reviewId, commentText }) => {
      return Review.findOneAndUpdate(
        { _id: reviewId },
        {
          $addToSet: { comments: { commentText } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeReview: async (parent, { reviewId }) => {
      return Review.findOneAndDelete({ _id: reviewId });
    },
    removeComment: async (parent, { reviewId, commentId }) => {
      return review.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
    createUser: async (parent, args, context, info) => {
      const user = await User.create(args)
      const hospital = await Hospital.create({ userId: user.id, })
      const data = {
        email: user.email,
        name: user.username,
        id: user.id,
        hospitalId: user.hospital.id
      }
    }
  },
};

module.exports = resolvers;
