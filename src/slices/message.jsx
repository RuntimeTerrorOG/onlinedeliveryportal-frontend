import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {

    //sets the 'message' state to the payload of the action
    setMessage: (state, action) => {
      return { message: action.payload };
    },

    //resets the 'message' field to an empty string.
    clearMessage: () => {
      return { message: "" };
    },
  },
});

const { reducer, actions } = messageSlice;

export const { setMessage, clearMessage } = actions
export default reducer;