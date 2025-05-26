import userReducer from "./features/userSlice";
import {configureStore} from "@reduxjs/toolkit";
import { chatApi } from "./api";
export const store = configureStore({
    reducer: {
        [chatApi.reducerPath]: chatApi.reducer,
        user: userReducer,

    },
    middleware:(GetDefaultMiddleware) => {
        return GetDefaultMiddleware({}).concat([chatApi.middleware])
    }


});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
