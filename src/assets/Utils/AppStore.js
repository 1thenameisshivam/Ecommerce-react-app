import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice"
import storeReducer from "./EcomerseStore"
const AppStore=configureStore({
    reducer:{
        config:configReducer,
        store:storeReducer,
    }
})

export default AppStore;