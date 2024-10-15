import { createSlice } from "@reduxjs/toolkit";
import chatData from "../mock_data/chatData";
const initialState = {
    chatData:chatData
}

export const chatSlice = createSlice({
    name:'chatData',
    initialState,
    reducers : {
        addmessage:(state,action)=>{
            const {id,message} = action.payload;
            if(state.chatData[id]) {
                state.chatData[id].messages.push(message)
            }
            else{
                state.chatData[id] = {'messages':[message]}
            }
        }
    }
})

export  const { addmessage } = chatSlice.actions;

export default chatSlice.reducer

