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
    review: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Review'
        }
    ],
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