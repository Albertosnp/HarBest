import axios from "axios";

const API_URL = "http://localhost:9000/";
export const addProductAPI = async (newProduct) => {
  const response = await axios.create({
    baseURL: API_URL,
    headers: {
      "Content-Type": "application/json",
    },

  }).post(`/products`, newProduct);

  return response.data;
}