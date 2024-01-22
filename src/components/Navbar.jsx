import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import { Logout } from '@mui/icons-material'
// import Icon from '@mui/material'

const Navbar = () => (
    <Stack direction="row" alignItems="center" p={1} sx={{position:'sticky', background:'#fff', top:0, justifyContent: 'space-between'}}>
        <Link to='/' style={{ display: 'flex', alignItems: 'center', color:'#000'}}>
            <img src={logo} alt='logo' height={45} />
        </Link>
        <Link to='/bookings' style={{alignItems: 'center', color:'#fff'}} className='nav-link'>
            <h6>Bookings</h6>
        </Link>
        <Link to='/login' style={{alignItems: 'center', color:'#fff', display: 'flex'}} className='nav-link'>
            <Logout/>
            <h6>Logout</h6>
        </Link>
    </Stack>
)

export default Navbar