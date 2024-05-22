import {requestLogin, requestRegister, requestUpdateCurrentUser, requestUserCurrent, requestlogout, setToken } from "services/api";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { toastFulfild, toastRejected } from "../../services/notify";

export const apiUserRegister = createAsyncThunk(
  "user/signup",
  async (formData, thunkApi) => {
    try {
      const userData = await requestRegister(formData);
      toastFulfild("User successfully created!");
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiUserLogin = createAsyncThunk(
  "user/login",
  async (formData, thunkApi) => {
    try {
      const userData = await requestLogin(formData);
      toastFulfild("You have successfully logged into your account!");
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, thunkApi) => {
    try {
      await requestlogout();
       toastFulfild("You have successfully logged out your account!");
      return;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const usersCurrentThunk = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();

    try {
      setToken(state.auth.token);
      const respons = await requestUserCurrent();
      return respons;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      if (!token) return false;

      return true;
    },
  }
);

export const apiUpdateUserInfo = createAsyncThunk(
  "user/updateUser",
  async (data, thunkApi) => {
    try {
      console.log(data)
      const userData = await requestUpdateCurrentUser(data);
      toastFulfild("User info updated successfully!");
      return userData;
    } catch (error) {
      toastRejected("Error");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);




const INITIAL_STATE = {
  user: null,
    email: null,
    name: null,
  token: null,
  isLoading: false,
  error: null,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder

      // ------------ Register User ----------------------
      .addCase(apiUserRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })

      .addCase(usersCurrentThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.user = action.payload;
      })

      // ------------ Login User ----------------------
      .addCase(apiUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
     .addCase(logoutUser.fulfilled, (state, action) => {
        return INITIAL_STATE;
     })
       .addCase(apiUpdateUserInfo.fulfilled, (state, action) => {
         state.isLoading = false;
         state.user = action.payload
         })
      .addMatcher(
        isAnyOf(
          apiUserRegister.pending,
          apiUserLogin.pending,
          apiUpdateUserInfo.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          apiUserRegister.rejected,
          apiUserLogin.rejected,
          apiUpdateUserInfo.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const userReducer = userSlice.reducer;