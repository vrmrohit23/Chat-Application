import React, { useId } from 'react'
import { TextField, Button } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AddUser, login } from '../../contexts/authSlice'
import { nanoid } from 'nanoid'

function Form() {
    const dispatch = useDispatch()
    function SubmitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const User_Name = formData.get('User Name')
        const Email = formData.get('Email')

        const userObject = { Name: User_Name, Email: Email, $id: nanoid(14) }
        try {

            dispatch(AddUser(userObject))
            dispatch(login(userObject))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form action="" onSubmit={SubmitForm}>
            <TextField
                fullWidth
                name='User Name'
                required
                id="outlined-basic"
                sx={{ marginY: '20px' }}
                label="User Name"
                variant="outlined"
            />

            <TextField
                fullWidth
                name='Email'
                required
                id="outlined-basic"
                sx={{ marginY: '20px' }}
                label="Email"
                variant="outlined"
            />

            <Button
                type='submit'
                fullWidth
                sx={{
                    marginTop: '40px',
                    paddingY: '14px',
                    fontSize: '17px'
                }}
                variant="contained"
            >Submit
            </Button>
        </form>
    )
}

export default Form