import { useState } from "react";
import axios from "axios";

const PostRentalPage = () => {
  const [area,setArea] = useState('');
  const [bedRoomNo,setBedRoomNo] = useState();
  const [bathRoomNo,setBathRoomNo] = useState();
  const [landMarks,setLandMarks] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    // localStorage.getItem("authToken");
    const response = await axios.post("http://localhost:8080/api/rental",{
      area,
      bedRoomNo,
      bathRoomNo,
      landMarks,
    })
    console.log("response=>",response);
  }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className="font-bold">Post Your Rental Properties</p>
      <form className='flex flex-col border border-black p-10' onSubmit={handleSignUp}>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Area:</label>
          <input className='border border-black' required value={area} onChange={(e)=>setArea(e.target.value)}/>
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>No. Of Bedrooms:</label>
          <input className='border border-black' required value={bedRoomNo} onChange={(e)=>setBedRoomNo(e.target.value)}/>
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>No. Of Bathrooms:</label>
          <input className='border border-black' type='number' required value={bathRoomNo} onChange={(e)=>setBathRoomNo(e.target.value)} />
        </div>
        <div className='flex flex-row justify-between p-2 '>
          <label className=''>Landmarks nearby:</label>
          <input className='border border-black' required value={landMarks} onChange={(e)=>setLandMarks(e.target.value)}/>
        </div>
        <button type='submit' className='border border-black p-2 m-2'>
          Register
        </button>
      </form>
    </div>
  );
};

export default PostRentalPage;
