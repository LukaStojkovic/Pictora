import React from "react";
import Card from "../ui/Card";
import { FiSend } from "react-icons/fi";
import Post from "./Post";
import useGetFeedPosts from "../hooks/useGetFeedPosts";

function HomeMain() {
  const { posts, isLoading } = useGetFeedPosts();
  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="grow">
      <Card>
        <form className="flex items-center gap-2">
          <input
            placeholder="What's on your mind?"
            className="border rounded-lg grow py-4 px-4"
          />
          <button className="bg-socialBlue p-3 rounded-full text-gray-50">
            <FiSend />
          </button>
        </form>
      </Card>
      <Card>
        {posts.data.posts.map((post) => (
          <Post key={post._id} postData={post} />
        ))}
      </Card>
    </div>
  );
}

export default HomeMain;
