import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";

import AuthService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));

//asynchronous function that sends a POST request to the server with the provided 'username', 'email', and 'password'
export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, thunkAPI) => {

    //If the request is successful, the function dispatches a 'setMessage' action with a success message and returns the response data
    try {
      const response = await AuthService.register(username, email, password);
      thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } 
    
    //If the request fails, the function dispatches a 'setMessage' action with an error message and returns 'thunkAPI.rejectWithValue()' function.
    catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


//sends a POST request with the provided 'username' and 'password'
export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, thunkAPI) => {

    //if success returns an object with the user data 
    try {
      const data = await AuthService.login(username, password);
      return { user: data };
    } 
    
    //if fails dispatches a 'setMessage' action with an error message and returns a 'thunkAPI.rejectWithValue()' function.
    catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  }
);


//sends a POST request to the server to log the user out
export const logout = createAsyncThunk("auth/logout", 
async () => {
  await AuthService.logout();
});

const initialState = user ? { isLoggedIn: true, user }: { isLoggedIn: false, user: null };

const authSlice = createSlice({
  name: "auth",
  initialState, //use above 'initialState' const here
  extraReducers: { //'extraReducers' is used instead of 'reducers' to handle asynchronous actions
    
    //'register' action is fulfilled or rejected --> 'isLoggedIn' set to false
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
    },
    [register.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },

    //'login' action is fulfilled --> 'isLoggedIn' set to true and 'user' set to user data returned by the action payload
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    //'login' action is rejected --> 'isLoggedIn' set to false and 'user' set to null
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },

    //logout action is fulfilled --> 'isLoggedIn' set to false and 'user' set to null.
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
