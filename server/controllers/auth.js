const User = require('../models/user');
const bcrypt =  require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
  return jwt.sign({ _id }, 'examplesecretkey', { expiresIn: '3d' });
};

const loginAuth = async (req, res) => {
  const{email,password} = req.body;
  const user = await User.findOne({email});
  if(!user) res.send({"message":"User doesnot exist"});
  
  const match = await bcrypt.compare(password, user.password);
  if(!match) res.send({"message":"Invalid credentials"});
  const token = createToken(user._id);
  res.status(200).json({email,token});
}

const signupAuth = async (req,res) => {
  const{email,password,firstName,lastName,phoneNumber} = req.body;
  const isEmailExists = await User.findOne({email});
  if(isEmailExists) res.send({"message":"User already exists."})
  
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await User.create({email,firstName,lastName,phoneNumber, password:hash});
  const token = createToken(user._id);
  res.status(200).json({email,token});
}

module.exports = {loginAuth,signupAuth};