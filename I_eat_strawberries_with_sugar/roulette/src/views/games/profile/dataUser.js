const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
  gender: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  balans: {
    type: Number,
    required: 0,
  },
  win: {
    type: Number,
    required: 0,
  },
  games: {
    type: Number,
    required: 0,
  },
  spent: {
    type: Number,
    required: 0,
  },
  raiting: {
    type: Number,
    required: 0,
  },
  img: String,
  default: true
})

const dataUser = mongoose.model('datauser', dataSchema)
module.exports = dataUser