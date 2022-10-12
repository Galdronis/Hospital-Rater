const { Schema, model } = require('mongoose');
const ratingAverage = require('../utils/ratingFormat')

const hospitalSchema = new Schema ({
    hospitalName: {
        type: String,
        required: 'please enter hospital name',
        unique: true,
        trim: true
    },
    location: {
        type: String,
        required: 'please enter hospital location',
        trim: true
    },
    reviews: [
        {
        type: String,
        maxlength: 280
        }
    ],
    reviewRating: [
        {
        type: Number,
        max: 5
        }
    ],
    rating:
    {
        type: Number,
        get: (arr) => ratingAverage(arr)
    }
},
)
// {
//     toJSON: {
//       virtuals: true,
//     },
//   }
// );
// tagSchema
//   .virtual('ratingArray')
//   // Getter
//   .get(function () {
//     return [];
//   })


const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;