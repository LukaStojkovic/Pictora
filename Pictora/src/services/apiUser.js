import axios from "axios";

export async function getMe() {
  const user = await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/users/getMe`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!user) throw new Error("Something went wrong!");

  return user.data.user;
}

export async function getUser(id) {
  const user = await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/users/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!user) throw new Error("Something went wrong!");

  return user.data.user;
}

export async function getUserFriends(id) {
  const friends = await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/users/${id}/friends`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  return friends.data.formattedFriends;
}

export async function updateUser(id, userData) {
  const response = await axios({
    method: "PATCH",
    url: `http://127.0.0.1:8000/users/${id}`,
    data: userData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });

  if (!response.data) throw new Error("Something went wrong!");

  return response.data.data.user;
}

export async function updateUserPassword(id, userData) {
  const response = await axios({
    method: "PATCH",
    url: `http://127.0.0.1:8000/users/${id}/password`,
    data: userData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  if (!response) throw new Error("Something went wrong!");

  return response.data.data;
}

export async function addRemoveFriend(userId, friendId) {
  const response = await axios({
    method: "PATCH",
    url: `http://127.0.0.1:8000/users/${userId}/${friendId}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });

  return response.data;
}
