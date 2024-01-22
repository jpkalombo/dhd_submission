import { Box } from '@mui/material'
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Bookings, ViewBookings, BookingSingle, NewBookings, UpdateBookings, Login } from "./components";



const App = () => {

  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }


  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#fff'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Bookings />} />
          <Route path="/bookings" exact element={<ViewBookings />} />
          <Route path="/bookings/:id" exact element={<BookingSingle />} />
          <Route path="/bookings/new" exact element={<NewBookings />} />
          <Route path="/bookings/update/:id" exact element={<UpdateBookings />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App