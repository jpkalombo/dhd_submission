import axios from 'axios'
import React, {useEffect} from 'react'
import DataTable from 'react-data-table-component'

const Bookings = () => {
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

  const columns = [
    {
      name: 'Title',
      selector: row => row.title,
    },
    {
      name: 'Year',
      selector: row => row.year,
    },
  ];
  
  //sample data
  const data = [
      {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
    },
  ]
  
  return (
    <DataTable
			columns={columns}
			data={data}
		/>
  )
}

export default Bookings