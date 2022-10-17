// const { Schema, model } = require('mongoose');
// const dateFormat = require('../utils/dateFormat');

// const reviewSchema = new Schema({
//   reviewAuthor: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   reviewText: {
//     type: String,
//     required: 'Please leave a review',
//     minlength: 1,
//     maxlength: 280,
//     trim: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//     get: (timestamp) => dateFormat(timestamp),
//   },
//   hospitalRating:
//   {
//     type: Number,
//     required: true,
//     trim: true
//   },
// });

// const Review = model('Review', reviewSchema);

// module.exports = Review;
