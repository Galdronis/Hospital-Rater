

const ratingAverage = (arr) => {
arr = [];
const average = arr.reduce((a, b) => a + b, 0) / arr.length;

return average
} 

module.exports = ratingAverage