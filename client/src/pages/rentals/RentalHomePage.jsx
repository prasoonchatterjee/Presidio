import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

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
      <Link to={`rental/${rental._id}`} key={rental._id} className="border border-black h-fit p-2 m-2">
        <p>Area:{rental.area}</p>
        <p>No. Of Bed Rooms: {rental.noOfBedRooms}</p>
        <p>No. Of Bath Rooms: {rental.noOfBathRooms}</p>
        <p>Landmarks Nearby: {rental.landMarks}</p>
      </Link>
    ))
  }
  return (
    <div className="h-screen flex justify-around flex-wrap">
    {renderAllRentals()}
    </div>
  )
}

export default RentalHomePage;