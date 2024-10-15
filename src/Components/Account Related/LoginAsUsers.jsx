import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../contexts/authSlice';



function LoginAsUsers() {
    const getUsers = useSelector((state) => state.auth.people)
    const dispatch = useDispatch();
    function loginUser(data){
        dispatch(login(data))
    }


    return (
        <div className='h-72'>
            {
                getUsers.map((item) =>
                    <div key={item.$id} className='flex items-center m-2 border-2 p-2 cursor-pointer hover:border-blue-500 duration-200 rounded-lg' onClick={()=>loginUser(item)}>
                        <Avatar sx={{ bgcolor: deepOrange[500] }}>{item.Name.charAt(0)}</Avatar>
                        <p className='ml-2 font-bold'>{item.Name}</p>
                    </div>
                )
            }
        </div>
    )
}

export default LoginAsUsers