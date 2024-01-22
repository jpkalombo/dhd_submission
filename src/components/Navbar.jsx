import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'

import {logo} from '../utils/constants'
import { Logout } from '@mui/icons-material'
// import Icon from '@mui/material'

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={2} sx={{position:'sticky', background:'#000', top:0, justifyContent: 'space-between'}}>
        <Link to='/' style={{ display: 'flex', alignItems: 'center', color:'#fff'}}>
            <img src={logo} alt='logo' height={45} />
        </Link>
        <Link to='/bookings' style={{alignItems: 'center', color:'#fff'}} className='nav-link'>
                <h6>Bookings</h6>
            </Link>
            <Link to='/bookings' style={{alignItems: 'center', color:'#fff', display: 'flex'}} className='nav-link'>
                <Logout/>
                <h6>Logout</h6>
            </Link>
        
         {/* <Link to='/bookings/:id' style={{alignItems: 'center', color:'#fff'}}>
            <h6>View Booking</h6>
         </Link> */}

        {/*<Link to='/bookings' style={{alignItems: 'center', color:'#fff'}}>
            <h6>New Bookigs</h6>
        </Link>
        <Link to='/bookings' style={{alignItems: 'center', color:'#fff'}}>
            <h6>Bookings</h6>
        </Link>
        <Link to='/bookings' style={{alignItems: 'center', color:'#fff'}}>
            {/* <h6> <i>{Logout}</i> Logout</h6> 
        </Link> */}
    </Stack>
)

export default Navbar