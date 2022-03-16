import axios from "axios";

const API_URL = "http://localhost:9000/";

export const getProducts = async () => {
  const response = await axios.create(
    {
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        itemsPerPage: 5,
        page: 1,
        active: true,
      },
    }
  ).get("/products");
  
  
  return response.data;
};