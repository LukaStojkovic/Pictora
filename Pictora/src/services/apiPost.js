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
