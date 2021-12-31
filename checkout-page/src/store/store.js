import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice.js"
// import { products } from "../models/data";

export  default configureStore(
    {
        reducer: {

            products: productsReducer
        }
    },
 
)