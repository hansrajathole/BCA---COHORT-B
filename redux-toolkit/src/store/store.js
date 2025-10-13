import {configureStore } from "@reduxjs/toolkit"
import counterReducer  from "./counterSlice"
export const store = configureStore({
    reducer : {
        counter : counterReducer,
        // user : userSlice,
        // product : productSlice

    }
})
