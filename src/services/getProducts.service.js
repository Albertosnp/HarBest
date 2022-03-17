import axios from "axios";

const API_URL = "http://localhost:9000/";

export const getProductsAPI = async ({ page = 0, active = true }) => {
  const response = await axios
    .create({
      baseURL: API_URL,
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        itemsPerPage: 4,
        page,
        active,
      },
    })
    .get("/products");

  return response.data;
};
