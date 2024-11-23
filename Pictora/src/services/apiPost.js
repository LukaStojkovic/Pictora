import axios from "axios";

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
