'use client';
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setUsers } from "./features/userSlice";
import {  setMessageError, setMessages } from "./features/messageSlice";

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api',
    prepareHeaders: (headers) => {
      const token = typeof localStorage !== 'undefined' && localStorage.getItem('token');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: 'POST',
        body: userData,
      }),
    }),

    login: builder.mutation({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),

    fetchUser: builder.query({
      query: () => "/users/user",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data, "user data");
        } catch (error) {
          dispatch(setMessageError(error));
        }
      },
    }),

    fetchUsers: builder.query({
      query: () => "/users",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUsers(data));
        } catch (err) {
          dispatch(setMessageError(err));
        }
      },
    }),

    fetchMessagesBySenderId: builder.query({
      query: (senderId) => `/messages/sender/${senderId}`,
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setMessages(data?.messages));
        } catch (error) {
          dispatch(setMessageError(error));
        }
      },
    }),

    addMessages: builder.mutation({
      query: (data) => ({
        url: "/message/create",
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useLoginMutation,
  useFetchUserQuery,
  useFetchUsersQuery,
  useFetchMessagesBySenderIdQuery,
  useAddMessagesMutation,
} = chatApi;
