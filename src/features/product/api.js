import axios from "../axios";

export const getListProduct = async () => {
  return await axios.get("/api/products");
};

export const createProduct = async (params) => {
  return await axios.post("/api/saveProduct", {params})
}
