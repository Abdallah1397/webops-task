import axios from "axios";

export const getAllCategories = () => {
  return axios.get("http://localhost:3000/categories");
};
