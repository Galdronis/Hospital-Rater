const { Schema, model } = require('mongoose');

const hospitalSchema = new Schema ({
    hospitalName: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    reviews: [
      {
        reviewText: {
          type: String,
          required: true,
          minlength: 1,
          maxlength: 280,
        },
        reviewAuthor: {
          type: String,
          required: true,
        },
        hospitalRating: {
          type: Number,
          required: true
        }
      },
    ],
},
)

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;