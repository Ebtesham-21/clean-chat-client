import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    messages:[],
    error: null
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        setMessages:(state, action) => {
            state.messages = action.payload;
        },
        addMessages: (state, action) => {
            state.messages.push(action.payload);
        },
        setMessageError:(state, action) => {
            state.error = action.payload;
        }
    }
});

export const {setMessages, addMessages, setMessageError} = messageSlice.actions;
export default messageSlice.reducer;


