import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://we-props-backend.onrender.com/api/v1/',
        prepareHeaders:(headers)=>{
            const token = `Token ${localStorage.getItem('token')}`
            if(token){
                headers.set('authorization',`${token}`)
            }
            return headers
        },
    }),
    tagTypes:['Cart'],
    endpoints:builder=>({})
})