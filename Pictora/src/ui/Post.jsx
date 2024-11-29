import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import { FaRegComment, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useUser from "../hooks/useUser";
import useLikePost from "../hooks/useLikePost";
import useCreateComment from "../hooks/useCreateComment";
import Comment from "./Comment";
import Spinner from "./Spinner";
import useDeletePost from "../hooks/useDeletePost";
import { HiOutlineDotsVertical } from "react-icons/hi";
import useOutsideClick from "../hooks/useOutsideClick";

function Post({ postData }) {
  const [isOpenComment, setIsOpenComment] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [comment, setComment] = useState("");

  const { user } = useUser();
  const { like } = useLikePost();
  const { createComment, isLoading: isLoadingComment } = useCreateComment();
  const { deletePost, isLoading } = useDeletePost();
  const ref = useOutsideClick(() => setIsOpenMenu(false));

  const isLoggedInUser = user._id === postData.userId;

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

  function handleDeletePost() {
    deletePost(postData._id);
  }

  if (isLoadingComment) return <Spinner />;

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2 justify-between">
        <Link to={`/profile/${postData?.userId}`} className="flex items-center">
          <img
            src={`assets/${postData?.userPicturePath}`}
            alt="User profile picture"
            className="w-10 h-10 rounded-full mr-2"
          />
          <div className="font-bold">{postData?.firstName}</div>
        </Link>
        {isLoggedInUser && (
          <div className="relative">
            <HiOutlineDotsVertical
              size={20}
              className="cursor-pointer"
              onClick={() => setIsOpenMenu((open) => !open)}
            />
            {isOpenMenu && (
              <div
                className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-10"
                ref={ref}
              >
                <ul className="py-2">
                  <li>
                    <button
                      className="w-full flex gap-2 items-center text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-red-500"
                      onClick={handleDeletePost}
                    >
                      <FaRegTrashAlt size={15} /> Delete
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
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
          onClick={() => setIsOpenComment((open) => !open)}
        >
          <FaRegComment /> Comment
        </button>
      </div>

      {isOpenComment && (
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
