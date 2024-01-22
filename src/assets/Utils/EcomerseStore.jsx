import { createSlice } from "@reduxjs/toolkit";


const EcomerseStore=createSlice({
    name:"store",
    initialState:{
        allProducts:null,
    },
    reducers:{
        addAllProducts:(state,action)=>{
            state.allProducts=action.payload;
        },
    }
})

export const {addAllProducts,addProduct}=EcomerseStore.actions
export default EcomerseStore.reducer