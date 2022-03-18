import axios from "axios";

const API_URL = "http://localhost:9000/";
export const deleteProductAPI = async ({ _id }) => {
  const response = await axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }).delete(`/products/${_id}`);

  return response.data;
}