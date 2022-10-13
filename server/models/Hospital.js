const { Schema, model } = require('mongoose');
const ratingAverage = require('../utils/ratingFormat')

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
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        },
      ],
},
)

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;