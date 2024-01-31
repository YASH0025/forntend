import axios from "axios";

const baseURL = "http://localhost:5000";

const userActivityService = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getProducts = async () => {
  try {
    const response = await userActivityService.get("/user/allProducts");
    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to create user");
  }
};
export const getCategorys = async () => {
  try {
    const response = await userActivityService.get("/user/allCategory");
    console.log(response);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to create user");
  }
};
export const getFilterProducts = async (categoryId: any) => {
  try {
    const response = await userActivityService.post(`/admin/filtered`, {
      params: { categoryId },
    });
    console.log(response);

    return response.data;
  } catch (error: any) {
    throw new Error(error.response.data.message || "Failed to create user");
  }
};
