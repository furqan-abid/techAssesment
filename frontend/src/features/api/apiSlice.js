import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:4000/api/'
    }),
    tagTypes:['Cart'],
    endpoints:builder=>({})
})