import { requestUserCurrent, requestLogin, requestRegister, requestlogout } from "services/api";
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
      return;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  user: {
    id: null,
    email: null,
    name: null,
  },
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
        state.user.email = action.payload.user;
      })

      // ------------ Login User ----------------------
      .addCase(apiUserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isSignedIn = true;
      })
     
      .addMatcher(
        isAnyOf(
          apiUserRegister.pending,
          apiUserLogin.pending,
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
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const userReducer = userSlice.reducer;