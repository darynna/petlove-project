import {requestFriends, requestNews, requestNotices, requestAddNotice, requestdeleteNotice } from "services/api";
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
  async (page, thunkApi) => {
    try {
      const userData = await requestNews(page);
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiGetNotices = createAsyncThunk(
  "user/notices",
  async (page, thunkApi) => {
    try {
      const userData = await requestNotices(page);
      return userData;
    } catch (error) {
      toastRejected("Something went wrong, please try again later!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const apiAddNoticeToFavorites = createAsyncThunk(
  "user/addNoticeToFavorites",
  async (id, thunkApi) => {
    try {
      const userData = await requestAddNotice(id);
      toastFulfild("Added to favorites!");
      return userData;
    } catch (error) {
      toastRejected("Failed to add to favorites!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const apiRemoveNoticeFromFavorites = createAsyncThunk(
  "user/removeNoticeFromFavorites",
  async (id, thunkApi) => {
    try {
      const userData = await requestdeleteNotice(id);
      toastFulfild("Removed from favorites!");
      return userData;
    } catch (error) {
      toastRejected("Failed to remove from favorites!");
      return thunkApi.rejectWithValue(error.message);
    }
  }
);


const INITIAL_STATE = {
  friends: null,
  news: null,
  notices: null,
  isLoading: false,
  error: null,
};

const infoSlice = createSlice({
  name: "info",
  initialState: INITIAL_STATE,

  extraReducers: (builder) =>
    builder

   

      // ------------ Get friends ----------------------
      .addCase(apiGetFriends.fulfilled, (state, action) => {
        state.isLoading = false;
        state.friends = action.payload;
      })
        .addCase(apiGetNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.news = action.payload;
        })
         .addCase(apiGetNotices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notices = action.payload;
         })
      .addCase(apiAddNoticeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(apiRemoveNoticeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
         })
      .addMatcher(
        isAnyOf(
            apiGetFriends.pending,
          apiGetNews.pending,
          apiGetNotices.pending,
          apiAddNoticeToFavorites.pending,
            apiRemoveNoticeFromFavorites.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
            apiGetFriends.rejected,
          apiGetNews.rejected,
          apiGetNotices.rejected,
          apiAddNoticeToFavorites.rejected,
            apiRemoveNoticeFromFavorites.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});
export const infoReducer = infoSlice.reducer;