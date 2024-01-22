import axios from 'axios';
import React, { useEffect } from 'react'

const UpdateBookings = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    // alert(token)
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://restful-booker.herokuapp.com/booking',
      headers: { 
        'Authorization': 'Bearer ' + token
      }
    };
    axios(config)
    .then(function (response) {
      console.log(response.data)
      localStorage.setItem("bookings", response.data)
    });

    
  }, [])
  return (
    <div>UpdateBookings</div>
  )
}

export default UpdateBookings