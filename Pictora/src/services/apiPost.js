import axios from "axios";

export async function getFeedPosts() {
  const posts = await axios({
    method: "get",
    url: `${import.meta.env.VITE_API_URL}/post/`,
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
    url: `${import.meta.env.VITE_API_URL}/post/`,
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
    url: `${import.meta.env.VITE_API_URL}/post/${userId}`,
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
      `${import.meta.env.VITE_API_URL}/post/${postData?._id}/like`,
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
      url: `${import.meta.env.VITE_API_URL}/post/${postId}/comment`,
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

export async function deletePost(postId) {
  try {
    const data = axios({
      method: "DELETE",
      url: `${import.meta.env.VITE_API_URL}/post/${postId}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return data;
  } catch (err) {
    console.error(err.message);
  }
}
