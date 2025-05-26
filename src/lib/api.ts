'use client'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
export const chatApi = createApi({
   reducerPath: 'chatApi',
   baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api',
      prepareHeaders: (headers) => {
         const token = localStorage && localStorage.getItem('token')
         if (token) {
            headers.set('Authorization', `Bearer ${token}`)
         }
         return headers
      }
   }),
   endpoints: (builder) => ({
      signup: builder.mutation({
         query:(userData) => ({
            url:"/auth/register",
            method: 'POST',
            body: userData,

         }),
      }),
   }),
});

export const {
   useSignupMutation
} = chatApi


