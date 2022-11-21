import axios from "axios";
import { IProduct, IProductResponse } from "../types/productInterface";

axios.defaults.baseURL = "http://localhost:7000";

export const ProductService = {
  async getProducts() {
    const { data } = await axios.get<IProductResponse>("/clothing");
    return data.rows;
  },

  async getProductById(id: string) {
    const res = await axios.get<IProduct>(`/clothing/${id}`);
    return res.data;
  },

  async deleteProduct(id: string) {
    const res = await axios({
      method: "DELETE",
      url: `http://localhost:7000/clothing/${id}`,
    });
  },

  async addProduct() {},
};
