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
    averageRating: {
        
    },
    reviews: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Review',
        },
      ],
},
)

const Hospital = model('Hospital', hospitalSchema);

module.exports = Hospital;