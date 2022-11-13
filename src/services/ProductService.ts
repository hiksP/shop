import axios from "axios";
import { IProductResponse } from "../types/productInterface";

axios.defaults.baseURL = "http://localhost:7000";

export const ProductService = {
  async getProducts() {
    const { data } = await axios.get<IProductResponse>("/clothing");
    return data.rows;
  },

  async getProductById(id: number) {
    const res = await axios({
      method: "GET",
      url: `http://localhost:7000/clothing/${id}`,
    });
    return res.data;
  },

  async deleteProduct(id: number) {
    const res = await axios({
      method: "DELETE",
      url: `http://localhost:7000/clothing/${id}`,
    });
  },

  async addProduct() {},
};
