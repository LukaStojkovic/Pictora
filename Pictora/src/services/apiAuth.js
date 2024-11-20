import axios from "axios";

export async function register(userData) {
  const data = await axios({
    method: "post",
    url: "http://127.0.0.1:8000/auth/register",
    data: userData,
    headers: { "Content-Type": "multipart/form-data" },
  });

  if (!data) throw new Error("Something went wrong!");

  return data;
}

export async function login(userData) {
  const data = await axios({
    method: "post",
    url: "http://127.0.0.1:8000/auth/login",
    data: userData,
  });

  if (!data) throw new Error("Something went wrong!");

  if (!data?.data?.token) throw new Error("Invalid login response");

  localStorage.setItem("token", data.data.token);

  return data;
}
