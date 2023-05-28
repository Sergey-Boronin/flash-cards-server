const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
  },
  definition: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
