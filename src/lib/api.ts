'use client'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query"
import { setUsers } from "./features/userSlice";
import { setMessageError, setMessages } from "./features/messageSlice";
import { set } from "react-hook-form";
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
      login:builder.mutation({
         query:(userData) => ({
            url: "/auth/login",
            method: "POST",
            body: userData,
         }),
      }),
      fetchUser: builder.query({
         query:() =>"/users/user",
         async onQueryStarted(arg, {dispatch, queryFulfilled})}{
            try{
               const {data} = await queryFulfilled;
               console.log(data, "data")
            }catch(error){
               dispatch(setError(error))
            }
         },
      }),
      fetchUser:builder.query({
         query:() => "/users",
         async onQueryStarted(arg, { dispatch, queryFulfilled }) {
            try {
               const {data} = await queryFulfilled;
               dispatch(setUsers(data));
            }
            catch(err){
               dispatch(setError(err))
            }
         },

         fetchMessagesBySenderId: builder.query({
            query:(senderId) => `/messages/sender/${senderId}`,
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
               try{
                  const {data} = await queryFulfilled;
                  dispatch(setMessages(data));
               } catch(error) {
                  setMessageError(error)
               }
            }),
         }),
            

         
      }),
   });



export const {
   useSignupMutation,
   useLoginMutation,
   useFetchUserQuery
} = chatApi;

