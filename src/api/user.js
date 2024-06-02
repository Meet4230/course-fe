import api from "./index";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("users/register", userData);
    return response.data;
  } catch (error) {
    console.error("Registration failed", error);
    throw error;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post("/users/sessions", userData);
    return response.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};
