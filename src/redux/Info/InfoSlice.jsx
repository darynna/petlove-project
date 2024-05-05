import {requestFriends, requestNews } from "services/api";
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { toastFulfild, toastRejected } from "../../services/notify";

export const apiGetFriends = createAsyncThunk(
  "user/friends",
  async (formData, thunkApi) => {
    try {
      const userData = await requestFriends();
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetNews = createAsyncThunk(
  "user/news",
  async (formData, thunkApi) => {
    try {
      const userData = await requestNews();
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);



const INITIAL_STATE = {
  friends: null,
  news: null,
  isLoading: false,
  error: null
};

const userSlice = createSlice({
  name: "info",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder

   

      // ------------ Get friends ----------------------
      .addCase(apiGetFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friends = action.payload.friends;
      })
        .addCase(apiGetNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload.news;
      })
      .addMatcher(
        isAnyOf(
            apiGetFriends.pending,
            apiGetNews.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
            apiGetFriends.rejected,
            apiGetNews.pending
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const userReducer = userSlice.reducer;