import { createSlice } from "@reduxjs/toolkit";


const configSlice=createSlice({
    name:"config",
    initialState:{
        toggleCheckout:false,
    },
    reducers:{
        addToggleCheckout:(state,action)=>{
            state.toggleCheckout=(!state.toggleCheckout)
        }
    }
})

export const {addToggleCheckout} =configSlice.actions;
export default configSlice.reducer;