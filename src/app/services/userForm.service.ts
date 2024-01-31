// userService.js
import axios from "axios";

const baseURL = "http://localhost:5000/user";

const userService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const createUser = async (userData: any) => {
  try {
    const response = await userService.post("", userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to create user");
  }
};
export const loginUser = async (loginData: any) => {
  try {
    const response = await userService.post("/login", loginData);
    console.log(response);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to login user");
  }
};
