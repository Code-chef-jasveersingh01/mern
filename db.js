const mongoose = require('mongoose');

const mongoUrl = 'mongodb://localhost:27017/hotels';

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.on('connected', () => {
  console.log('Connected to MongoDB');
});
db.on('disconnected', () => {
  console.log('Disconnected from  MongoDB');
});

module.exports = db;

