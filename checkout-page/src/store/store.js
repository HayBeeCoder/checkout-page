import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../features/products/productsSlice.js"
// import { products } from "../models/data";
import { apiSlice } from "../features/api/apiSlice.js"

export  default configureStore(
    {
        reducer: {

            products: productsReducer,
            [apiSlice.reducerPath]: apiSlice.reducer,

        },
        middleware: getDefaultMiddleware => 
            getDefaultMiddleware().concat(apiSlice.middleware)
    },
 
)