import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { loginUser, getUserDetails } from "../../api/user";

const initialState = {
  accessToken: null,
  data: [],
};

export const adminLogin = createAsyncThunk(
  "adminLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await loginUser(data);
      return response;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserId = createAsyncThunk(
  "getUserId",
  async (data, { rejectWithValue }) => {
    try {
      console.log("okk");
      const response = await api.get("/users/me");
      console.log(response);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.accessToken = Cookies.get("accessToken");
    },
    setLogout: (state) => {
      state.accessToken = null;
      Cookies.remove("accessToken");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(adminLogin.fulfilled, (state, action) => {
        state.accessToken = action.payload.accessToken;
      })
      .addCase(getUserId.fulfilled, (state, action) => {
        console.log(state);
        state.data = action.payload;
      });
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
