import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

//Get user from LocalStoragesService
const user=JSON.parse(localStorage.getItem("user"))

const initialState={
    user:user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

//Register the user

export const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=false
            state.message=""
        }
    },
    extraReducers:()=>{}
})

export const {reset}=authSlice.actions
export default authSlice.reducer