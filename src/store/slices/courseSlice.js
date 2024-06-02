import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { getCourse } from "../../api/course";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async (courseId) => {
    try {
      const response = await getCourse(courseId);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getCoursesByUser = createAsyncThunk(
  "courses/getCoursesByUser",
  async (userId) => {
    console.log("userId", userId);
    try {
      const response = await api.get(`/course/${userId}`);
      console.log("e", response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData) => {
    const response = await createCourse(courseData);
    return response.data;
  }
);

export const updateCourse = createAsyncThunk(
  "courses/updateCourse",
  async ({ courseId, updateData }) => {
    try {
      const response = await api.put(`/courses/${courseId}`, updateData);
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
      await api.delete(`/course/${courseId}`);
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

// Create course slice
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
        console.log("a", action.payload);
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
        const { courseId, updatedCourse } = action.payload;
        const existingCourseIndex = state.courses.findIndex(
          (course) => course.id === courseId
        );
        if (existingCourseIndex !== -1) {
          state.courses[existingCourseIndex] = updatedCourse;
        }
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        const courseId = action.payload;
        state.courses = state.courses.filter(
          (course) => course.courseId !== courseId
        );
      });
  },
});

export default courseSlice.reducer;
