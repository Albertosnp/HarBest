import axios from "axios";

const API_URL = "http://localhost:9000/";
export const setProductAPI = async (newProduct) => {
  const response = await axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  }).put(`/products/${newProduct._id}`, newProduct);

  return response.data;
}