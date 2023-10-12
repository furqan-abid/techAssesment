import { apiSlice } from "./api/apiSlice";

const cartSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getAllItems:builder.query({
            query:()=>({
                url:"items"
            }),
            // transformResponse:(response)=>response.downPaymentStatus,
        }),
        addToCart:builder.mutation({
            query:(body)=>({
                url:"cart/add",
                method:"POST",
                body:body
            }),
            invalidatesTags:["Cart"]
        }),
        getCart:builder.query({
            query:()=>({
                url:'cart'
            }),
            providesTags:["Cart"]
        })
    })
})


export const {useGetAllItemsQuery,useAddToCartMutation,useGetCartQuery}=cartSlice;