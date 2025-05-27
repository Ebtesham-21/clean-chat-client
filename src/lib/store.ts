import userReducer from "./features/userSlice";
import {configureStore} from "@reduxjs/toolkit";
import { chatApi } from "./api";
import messageReducer from "./features/messageSlice";
export const Store = configureStore({
    reducer: {
        [chatApi.reducerPath]: chatApi.reducer,
        user: userReducer,
        message: messageReducer,

    },
    middleware:(GetDefaultMiddleware) => {
        return GetDefaultMiddleware({}).concat([chatApi.middleware])
    }


});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
