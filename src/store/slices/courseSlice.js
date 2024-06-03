import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (courseId) => {
    try {
      const response = await api.get(`/course/${courseId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCoursesByUser = createAsyncThunk(
  "courses/getCoursesByUser",
  async (userId) => {
    try {
      const response = await api.get(`/course/${userId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData) => {
    const response = await api.post("/course", courseData);
    return response.data;
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.put(`/course/${payload._id}`, payload);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId) => {
    try {
      const response = await api.delete(`/course/courseId/${courseId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCourseById = createAsyncThunk(
  "courses/getCourseById",
  async (courseId) => {
    try {
      const response = await api.get(`/course/courseId/${courseId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  courses: [],
  status: "idle",
  error: null,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoursesByUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCoursesByUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses = action.payload;
      })
      .addCase(getCoursesByUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.courses.push(action.payload);
      })
      .addCase(updateCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        const courseData = action.payload;
        const existingCourseIndex = state.courses.findIndex(
          (course) => course._id === courseData._id
        );
        if (existingCourseIndex !== -1) {
          state.courses[existingCourseIndex] = courseData;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        const courseId = action.payload.courseId;
        state.courses = state.courses.filter(
          (course) => course._id !== courseId
        );
      });
  },
});

export default courseSlice.reducer;
