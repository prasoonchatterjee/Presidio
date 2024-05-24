import { useState } from "react";
import axios from "axios";
const LogIn = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/api/auth/login",{
      email,
      password
    })
    const authToken = response.data.token;
    localStorage.setItem("authToken", authToken);
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className="font-bold">Log In</p>
      <form className='flex flex-col border border-black p-10' onSubmit={handleSignUp}>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Email:</label>
          <input className='border border-black' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Password:</label>
          <input className='border border-black' type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
        <button type='submit' className='border border-black p-0.5 m-2'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
