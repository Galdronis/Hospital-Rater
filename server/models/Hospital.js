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
    ratingArray: [

    ],
    rating:
    {
        type: Number,
        get: (arr) => ratingAverage(arr)

    }
})


const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;