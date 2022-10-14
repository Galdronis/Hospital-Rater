const db = require('../config/connection');
const { Hospital } = require('../models');
const hospitalSeeds = require('./hospitalSeeds.json');

db.once('open', async () => {
  await Hospital.deleteMany({});
  await Hospital.create(hospitalSeeds);

  console.log('all done!');
  process.exit(0);
});