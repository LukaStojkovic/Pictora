import React from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import useLikePost from "../hooks/useLikePost";

function Post({ postData }) {
  const { user } = useUser();
  const { like } = useLikePost();

  const likes = new Map(Object.entries(postData?.likes));
  const likeCount = likes.size;

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <Link to={`/profile/${postData?.userId}`}>
          <img
            src={`assets/${postData?.userPicturePath}`}
            alt="User profile picture"
            className="w-10 h-10 rounded-full mr-2"
          />
        </Link>
        <div className="font-bold">{postData?.firstName}</div>
      </div>
      <div className="mb-2">{postData?.description}</div>
      <img
        src={`assets/${postData?.picturePath}`}
        alt="Post image"
        className="w-full rounded-lg"
      />
      <div className="flex justify-between mt-2 text-gray-600">
        <div className=" flex items-center gap-2">
          <button
            className="flex items-center gap-1"
            onClick={() => like({ postData, user })}
          >
            {likes.get(user?._id) ? <BiLike fill="blue" /> : <BiLike />}
          </button>
          <span>{likeCount}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRegComment /> Comment
        </div>
      </div>
    </div>
  );
}

export default Post;
