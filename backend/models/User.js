const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
});
const User = mongoose.model('user',UserSchema)
module.exports = User;

//const UserSchema = new Schema({
//    title: String, // String is shorthand for {type: String}
//    author: String,
//    body: String,
//    comments: [{ body: String, date: Date }],
//    date: { type: Date, default: Date.now },
//    hidden: Boolean,
//    meta: {
//      votes: Number,
//      favs: Number
//    }
//  });