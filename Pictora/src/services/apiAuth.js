import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export async function register(userData) {
  try {
    const data = await axios({
      method: "post",
      url: `http://127.0.0.1:8000/auth/register`,
      data: userData,
      headers: { "Content-Type": "multipart/form-data" },
    });

    return data;
  } catch (err) {
    if (err.response?.status === 409) {
      throw new Error(err.response.data.message);
    }
    throw new Error(err.response?.data?.message || "Something went wrong!");
  }
}

export async function login(userData) {
  const data = await axios({
    method: "post",
    url: `http://127.0.0.1:8000/auth/login`,
    data: userData,
  });

  if (!data) throw new Error("Something went wrong!");

  if (!data?.data?.token) throw new Error("Invalid login response");

  localStorage.setItem("token", data.data.token);

  return data;
}

export async function logout() {
  localStorage.removeItem("token");
  QueryClient.invalidateQueries(["user", { refetchActive: true }]);
}
