import axios from "axios";
import { useEffect,useState } from "react";

const RentalHomePage = () => {
  const [allRentals,setAllRentals] = useState([]);

  useEffect(()=>{
    const getAllRentals = async () => {
      const response = await axios.get('http://localhost:8080/api/rental')
      setAllRentals(response.data);
    }
    getAllRentals()
  },[])

  const renderAllRentals = () => {
    return allRentals.map((rental)=>(
      <div key={rental._id} className="border border-black h-fit p-2 m-2">
        <p>Area:{rental.area}</p>
        <p>No. Of Bed Rooms: {rental.noOfBedRooms}</p>
        <p>No. Of Bath Rooms: {rental.noOfBathRooms}</p>
        <p>Landmarks Nearby: {rental.landMarks}</p>
      </div>
    ))
  }
  return (
    <div className="h-screen flex justify-around flex-wrap">
    {renderAllRentals()}
    </div>
  )
}

export default RentalHomePage;