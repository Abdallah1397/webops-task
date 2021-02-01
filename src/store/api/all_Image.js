import axios from "axios";

export const getAllImage = () => {
  return axios.get("http://localhost:3000/images");
};
