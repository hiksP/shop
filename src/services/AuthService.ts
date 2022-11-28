import axios from "axios";

export const AuthService = {
  async signIn(email: string, password: string) {
    const { data } = await axios.post("/user/signin", {
      email,
      password,
    });
    return data;
  },

  async signUp(email: string, password: string) {
    const { data } = await axios.post("/user/signup", {
      email,
      password,
      role: "ADMIN",
    });
    return data;
  },

  async tokenCheck() {
    const response = await axios.get("/user/auth");
    return response;
  },
};
