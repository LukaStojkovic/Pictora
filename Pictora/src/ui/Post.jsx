import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";

function Post({ postData }) {
  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <img
          src="https://placehold.co/50x50"
          alt="User profile picture"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="font-bold">{postData.firstName}</div>
      </div>
      <div className="mb-2">{postData.description}</div>
      <img
        src="https://fakeimg.pl/600x400"
        alt="Post image"
        className="w-full rounded-lg"
      />
      <div className="flex justify-between mt-2 text-gray-600">
        <div className=" flex items-center gap-2">
          <button className="flex items-center gap-1">
            <BiLike /> Like
          </button>
        </div>
        <div className="flex items-center gap-1">
          <FaRegComment /> Comment
        </div>
      </div>
    </div>
  );
}

export default Post;
