import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? "https://api.worthto.watch",
  withCredentials: true,
  headers: {
    Accept: "application/json",
  },
});
