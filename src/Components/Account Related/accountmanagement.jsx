import { Avatar } from '@mui/material'
import { pink } from '@mui/material/colors';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { logout } from '../../contexts/authSlice';

function Accountmanagement() {
    const username = useSelector((state) => state.auth.data.Name)
    const [showProfileBox, setshowProfileBox] = useState(false);
    const dispatch = useDispatch()
    function handlelogout(){
        try {
            dispatch(logout())
        } catch (error) {
            
        }
    }
    return (
        <div className='mb-5'>
            <Avatar
                sx={{ bgcolor: pink[500],cursor:'pointer'}}
                onClick={() => setshowProfileBox((prev) => !prev)}>
                {username.charAt(0)}
            </Avatar>
            <div className={'rounded-lg bg-gray-800 absolute z-10 p-4 ' + (showProfileBox ? '' : 'hidden')}>
                <p className='text-white font-bold mb-2'>{username}</p>
                <Button
                    onClick={handlelogout}
                    variant="contained"
                    size='medium'>
                    Logout
                </Button>
            </div>
        </div>
    )
}

export default Accountmanagement