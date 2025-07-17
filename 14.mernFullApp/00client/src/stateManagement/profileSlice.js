import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../api/config";

export const fetchProfile = createAsyncThunk(
  "profile/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (!res.ok) {
        throw new Error("Unauthorized");
      }
      return await res.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
    user: {},
    loading: true,
    error: null,
  },
  reducers: {
    addProfile(state, action) {
      state.user = action.payload || {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state /*, action*/) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
      });
  },
});

export const { addProfile } = profileSlice.actions;
export default profileSlice.reducer;
