import api from "./index";
export const createCourse = async (courseData) => {
  try {
    const response = await api.post("/course", courseData);
    return response.data;
  } catch (error) {
    console.error("Course creation failed", error);
    throw error;
  }
};

export const getCourse = async (courseId) => {
  try {
    const response = await api.get(`/course/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Fetching course failed", error);
    throw error;
  }
};

export const getCoursesByUser = async () => {
  try {
    const response = await api.get("/course/user");
    console.log("e", response.data);
    return response.data;
  } catch (error) {
    console.error("Fetching courses by user failed", error);
    throw error;
  }
};

export const updateCourse = async (courseId, updateData) => {
  try {
    const response = await api.put(`/${courseId}`, updateData);
    return response.data;
  } catch (error) {
    console.error("Updating course failed", error);
    throw error;
  }
};

export const deleteCourse = async (courseId) => {
  try {
    const response = await api.delete(`/${courseId}`);
    return response.data;
  } catch (error) {
    console.error("Deleting course failed", error);
    throw error;
  }
};
