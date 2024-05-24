import { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/api/auth/signup",{
      firstName,
      lastName,
      email,
      phoneNumber,
      password
    })
    const authToken = response.data.token;
    localStorage.setItem("authToken", authToken);
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className="font-bold">Sign Up</p>
      <form className='flex flex-col border border-black p-10' onSubmit={handleSignUp}>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>First Name:</label>
          <input className='border border-black' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Last Name:</label>
          <input className='border border-black' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Email:</label>
          <input className='border border-black' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Phone Number:</label>
          <input className='border border-black' type='number' value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Password:</label>
          <input className='border border-black' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='border border-black p-2 m-2'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
