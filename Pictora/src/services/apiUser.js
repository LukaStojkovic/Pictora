import axios from "axios";

export async function getUser(userId) {
  const user = await axios({
    method: "get",
    url: `http://127.0.0.1:8000/users/${userId}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!user) throw new Error("Something went wrong!");

  return user;
}
