const { Schema, model } = require('mongoose');
const ratingAverage = require('../utils/ratingFormat')

const hospitalSchema = new Schema ({
    name: {
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
    rating:
    {
        type: Number,
        get: (arr) => ratingAverage(arr)
    }
},
{
    toJSON: {
      virtuals: true,
    },
  }
);
tagSchema
  .virtual('ratingArray')
  // Getter
  .get(function () {
    return [];
  })


const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;