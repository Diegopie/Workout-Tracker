const mongoose = require('mongoose');

async function db () {
  try {
    mongoose.connect(
      process.env.MONGODB_URI || 'mongodb://localhost/workout',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      });
      console.log("Connected to DB");
  } catch (err) {
    console.log('DB Connection Error: ', err);
  }
}

module.exports = db;

