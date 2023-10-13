import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:4000/api/',
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