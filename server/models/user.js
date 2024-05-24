const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  },
  firstName:{
    type:String,
    required:true,
  },
  lastName:{
    type:String,
    required:true,
  },
  phoneNumber:{
    type:Number,
    required:true
  }
},{timestamps:true})


module.exports = mongoose.model('User', userSchema);
// Kby99FM5glLlbYvw
// chatterjeeprasoon
// mongodb+srv://<username>:<password>@clusterpresidio.82sgog4.mongodb.net/?retryWrites=true&w=majority&appName=clusterPresidio