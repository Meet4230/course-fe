import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import api from "../../api";

const initialState = {
  accessToken: null,
  data: [],
};

export const adminLogin = createAsyncThunk(
  "adminLogin",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/users/sessions", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const adminRegister = createAsyncThunk(
  "adminRegister",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post("/users/register", data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserById = createAsyncThunk(
  "getUserById",
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.get("/users/me");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state) => {
      console.log(Cookies.get("accessToken"));
      state.accessToken = Cookies.get("accessToken");
      console.log(state.accessToken);
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
      .addCase(getUserById.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { setLogin, setLogout } = authSlice.actions;

export default authSlice.reducer;
