import axios from "axios";
import useUser from "../hooks/useUser";

export async function getFeedPosts() {
  const posts = await axios({
    method: "get",
    url: "http://127.0.0.1:8000/post/",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!posts) throw new Error("Something went wrong!");
  return posts;
}

export async function createPost(postData) {
  const newPost = await axios({
    method: "POST",
    url: "http://127.0.0.1:8000/post/",
    data: postData,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!newPost) throw new Error("Something went wrong creating post!");
  return newPost;
}

export async function getUserPosts(userId) {
  const userPosts = await axios({
    method: "GET",
    url: `http://127.0.0.1:8000/post/${userId}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

  if (!userPosts) throw new Error("Something went wrong!");
  return userPosts;
}

export async function likePost(postData, user) {
  try {
    const response = await axios.patch(
      `http://127.0.0.1:8000/post/${postData?._id}/like`,
      { userId: user?._id },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    return response.data.updatedPost;
  } catch (err) {
    console.error(err.message);
  }
}

export async function createComment(postId, commentData) {
  try {
    const post = await axios({
      method: "POST",
      url: `http://127.0.0.1:8000/post/${postId}/comment`,
      data: commentData,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
    });

    return post;
  } catch (err) {
    console.error(err.message);
  }
}
