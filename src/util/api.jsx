import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:9003",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
