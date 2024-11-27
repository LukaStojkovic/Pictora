import React, { useEffect } from "react";
import Card from "../ui/Card";
import { FiSend } from "react-icons/fi";
import Post from "./Post";
import useGetFeedPosts from "../hooks/useGetFeedPosts";
import { CiImageOn, CiFileOn } from "react-icons/ci";
import { useForm } from "react-hook-form";
import useCreatePost from "../hooks/useCreatePost";
import useUser from "../hooks/useUser";
import Spinner from "./Spinner";
import toast from "react-hot-toast";

function HomeMain() {
  const { posts, isLoading: isLoadingFeedPosts } = useGetFeedPosts();
  const { user } = useUser();
  const { createPost, isLoading: isLoadingCreatePost } = useCreatePost();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(
    function () {
      if (errors.picture) toast.error("Please upload an image");
    },
    [errors.picture]
  );

  if (isLoadingFeedPosts || isLoadingCreatePost) return <Spinner />;

  function makePost(data) {
    const formData = new FormData();

    formData.append("picture", data.picture[0]);
    formData.append("description", data.description);
    formData.append("userId", user._id);

    reset();

    createPost(formData);
  }

  return (
    <div className="grow">
      <Card>
        <form onSubmit={handleSubmit(makePost)}>
          <div className="flex items-center gap-2">
            <input
              placeholder="What's on your mind?"
              className="border rounded-lg grow py-4 px-4"
              {...register("description", { required: true })}
            />

            <button
              type="submit"
              className="bg-socialBlue p-3 rounded-full text-gray-50"
            >
              <FiSend />
            </button>
          </div>
          <div className="px-2 pt-2 flex gap-2">
            <input
              className="shadow-md border rounded w-[0.1px] h-[0.1px] py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 absolute z-[-1]"
              id="picture"
              type="file"
              {...register("picture", { required: true })}
            />
            <label htmlFor="picture" className="cursor-pointer">
              <CiImageOn size={25} color="gray" />
            </label>

            <div className="cursor-pointer">
              <CiFileOn size={25} color="gray" />
            </div>
          </div>
        </form>
      </Card>
      <Card>
        {posts?.data.posts?.length > 0 ? (
          posts.data.posts.map((post) => (
            <Post key={post._id} postData={post} />
          ))
        ) : (
          <p className="font-semibold">
            It looks a bit quiet here... Why not kick things off and start
            posting?
          </p>
        )}
      </Card>
    </div>
  );
}

export default HomeMain;
