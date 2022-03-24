// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with 'https://shopr-server-main.herokuapp.comcv'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://shopr-server-main.herokuapp.com' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getProducts` endpoint is a "query" operation that returns data
    getProducts: builder.query({
      // The URL for the request is '/api/product/all'
      query: () => '/api/product/all'
    }),

    getSingleProduct: builder.query({
      query: (productId) => `api/product/${productId}`
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetProductsQuery ,useGetSingleProductQuery} = apiSlice

export const selectLoaded = state => state.api.queries.data