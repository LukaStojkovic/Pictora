import React from "react";

function ProfilePost({ postData }) {
  return (
    <div className="mb-6">
      <div className="border p-4 rounded-md">
        <p className="text-gray-800 font-medium">{postData?.description}</p>
        <img
          src={`${import.meta.env.VITE_API_URL}/public/assets/${
            postData?.picturePath
          }`}
          alt="Post"
          className="rounded-md mt-2"
        />
      </div>
    </div>
  );
}

export default ProfilePost;
