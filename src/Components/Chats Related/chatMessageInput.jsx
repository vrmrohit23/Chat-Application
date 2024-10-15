import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {addmessage} from '../../contexts/chatSlice'


function ChatMessageInput({currentChat}) {
    const [errortext, setErrortext] = useState('')
    const currentUser = useSelector((state)=>state.auth.data)
    const inputref = useRef()
    const dispatch = useDispatch()
    function handelMessage() {
        const inputmessage = inputref.current.value;
        console.log(inputmessage)
        if(inputmessage === '') {setErrortext('Field is required'); return;}
        const messageObject = {id:currentUser.$id, message :{
            message: inputmessage,
            addedfor:currentChat?.$id
        }}
        try {
            dispatch(addmessage(messageObject))
            
        } catch (error) {
            
        }
        inputref.current.value = ''
        
    }
    return (
        <div className={currentChat.$id ?'':'hidden'  }>
            <TextField
                onClick={()=>setErrortext('')}
                inputRef={inputref}
                size='small'
                sx={{ mr: '4px', color: 'white' }}
                id="standard-basic"
                label="Send a message"
                helperText={errortext}
                variant="outlined" />
            <Button
                onClick={handelMessage}
                variant="contained"     
                size='medium'>
                Send
            </Button>
        </div>
    )
}

export default ChatMessageInput