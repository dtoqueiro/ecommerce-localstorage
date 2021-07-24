import axios from "axios";

const api = axios.create({
  // baseURL: "https://fakestoreapi.com/products",
  baseURL:
    "https://my-json-server.typicode.com/dtoqueiro/json-fakeApi/produtos",
});

export default api;
