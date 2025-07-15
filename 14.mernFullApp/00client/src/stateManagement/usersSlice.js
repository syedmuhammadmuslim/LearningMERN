import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const isAuthenticated = () => !!localStorage.getItem("userToken");

export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/api/users", {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          authorization: "bearer " + localStorage.getItem("userToken"),
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

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    loading: false,
    error: null,
    loggedIn: isAuthenticated(),
  },
  reducers: {
    logout(state /*, action*/) {
      state.loggedIn = false;
      state.users = [];
    },
    login(state /*, action*/) {
      state.loggedIn = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state /*, action*/) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.users.error ? (state.loggedIn = false) : (state.loggedIn = true);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch users";
        state.loggedIn = false;
      });
  },
});

export const { login, logout } = usersSlice.actions;

export default usersSlice.reducer;
