import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Message {
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: number | string;
}

interface MessageState {
  messages: Message[];
  error: string | null;
}

const initialState: MessageState = {
  messages: [],
  error: null,
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessages: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    addLocalMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    setMessageError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addSocketMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  setMessages,
  addMessages,
  setMessageError,
  addSocketMessage,
  addLocalMessage,
} = messageSlice.actions;

export default messageSlice.reducer;
