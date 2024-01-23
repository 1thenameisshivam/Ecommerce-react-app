import { createSlice } from "@reduxjs/toolkit";


const EcomerseStore=createSlice({
    name:"store",
    initialState:{
        cart:[],
        allProducts:null,
        totalPrice:null,
    },
    reducers:{
        addAllProducts:(state,action)=>{
            state.allProducts=action.payload;
        },
        addToCart:(state,action)=>{
            const existingItem =state.cart.find(item=>item.id==action.payload.id);
            if(existingItem){
                existingItem.count=existingItem.count+1
            }
            else{
                state.cart.push({...action.payload,count:1})
            }
            
        },
        deleteItem:(state,action)=>{
            const arr=state.cart.filter(data=>data.id!==action.payload);
            state.cart=[...arr]
        },
        increaseItem:(state,action)=>{
            const item=state.cart.find(item=>item.id == action.payload);
            if(item){
                item.count=item.count+1
            }
        },
        decrementItem:(state,action)=>{
            const item=state.cart.find(item=>item.id == action.payload);
            if(item){
                item.count>1?item.count-=1:null
            }
        },
        calculatePrice:(state)=>{
           let price=0;
           state.cart.map(item=>price+=(item.price*item.count))
           state.totalPrice=(price * 81)
        }
    }
})

export const {addAllProducts,addToCart,deleteItem,increaseItem,decrementItem,calculatePrice}=EcomerseStore.actions
export default EcomerseStore.reducer