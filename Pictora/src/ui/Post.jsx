import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import useLikePost from "../hooks/useLikePost";
import useCreateComment from "../hooks/useCreateComment";
import Comment from "./Comment";
import Spinner from "./Spinner";

function Post({ postData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");

  const { user } = useUser();
  const { like } = useLikePost();
  const { createComment, isLoading: isLoadingComment } = useCreateComment();

  const likes = new Map(Object.entries(postData?.likes));
  const likeCount = likes.size;

  function handleAddComment() {
    const commentData = {
      text: comment.trim(),
      userId: user._id,
    };

    createComment({ postId: postData._id, commentData });

    setComment("");
  }

  if (isLoadingComment) return <Spinner />;

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
        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1"
            onClick={() => like({ postData, user })}
          >
            {likes.get(user?._id) ? <BiLike fill="blue" /> : <BiLike />}
          </button>
          <span>{likeCount}</span>
        </div>
        <button
          className="flex items-center gap-1"
          onClick={() => setIsOpen((open) => !open)}
        >
          <FaRegComment /> Comment
        </button>
      </div>

      {isOpen && (
        <>
          <div className="mt-4 flex items-center">
            <input
              type="text"
              className="flex-grow border rounded-lg py-2 px-4"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
              onClick={handleAddComment}
            >
              Post
            </button>
          </div>
          <div className="flex flex-col mt-2">
            {postData.comments.map((comment, i) => (
              <Comment key={postData._id + i} comment={comment}></Comment>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Post;
