const mongoose = require('mongoose');
const user = require('./user');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  area:{
    type:String,
    required:true,
    unique:true,
  },
  noOfBedRooms:{
    type:Number,
    required:true,
  },
  noOfBathRooms:{
    type:String,
    required:true,
  },
  landMarks:{
    type:String,
    required:true,
  },
  ownerId: {
    type:mongoose.Types.ObjectId,
    required:true
  }
},{timestamps:true})


module.exports = mongoose.model('User', userSchema);