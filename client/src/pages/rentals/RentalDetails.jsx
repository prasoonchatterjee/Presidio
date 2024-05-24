import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

const RentalDetails = () => {
  const [rental,setRental] = useState({});
  const {rentalId} = useParams();
  useEffect(()=>{
    const fetchSingleRental = async () => {
      const response = await axios.get(`http://localhost:8080/api/rental/${rentalId}`)
      setRental(response.data);
    }
    fetchSingleRental();
  },[rentalId])
  return (
    <div>
      <p>Area: {rental.area}</p>
      <p>No. Of Bedrooms: {rental.noOfBedRooms}</p>
      <p>No of Bathrooms: {rental.noOfBathRooms}</p>
      <p>Landmarks nearby: {rental.landMarks}</p>
    </div>
  )
}

export default RentalDetails;