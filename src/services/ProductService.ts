import axios from "axios";

export const ProductService = {
  async getProducts() {
    const res = await axios({
      method: "GET",
      url: "http://localhost:7000/clothing",
    });
    return res.data.rows;
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
