import { Box } from '@mui/material'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Hotels, ViewBookings, BookingSingle, NewBookings, UpdateBookings } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hotels />} />
          <Route path="/bookings" exact element={<ViewBookings />} />
          <Route path="/bookings/:id" exact element={<BookingSingle />} />
          <Route path="/bookings/new" exact element={<NewBookings />} />
          <Route path="/bookings/update/:id" exact element={<UpdateBookings />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App