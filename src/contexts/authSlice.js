import { createSlice } from "@reduxjs/toolkit";
import users from "../mock_data/users";

const initialState = {
    status:false,
    data:null,
    people:users,
}

export const authSlice = createSlice({
    name:'authorize',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status = true;
            state.data = action.payload;
        },
        logout:(state)=>{
            state.data = null;
            state.status = false;
        },
        AddUser:(state,action)=>{
            state.people = [...state.people,action.payload]
        }
    }
})

export const {login,logout, AddUser} = authSlice.actions;

export default authSlice.reducer;