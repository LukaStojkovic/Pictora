import React from "react";
import Card from "../ui/Card";
import { FiEdit2 } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import useGetUserPosts from "../hooks/useGetUserPosts";
import ProfilePost from "../ui/ProfilePosts";
import getUserById from "../hooks/useGetUserById";
import useUser from "../hooks/useUser";
import Spinner from "../ui/Spinner";

function MyProfile() {
  const { userId } = useParams();
  const { userPosts, isLoading } = useGetUserPosts(userId);
  const { user } = getUserById(userId);
  const { user: loggedUser } = useUser();
  const isLoggedInUser = userId === loggedUser?._id;

  if (isLoading) return <Spinner />;

  return (
    <div className="grow mt-4">
      <Card className="w-[632px]">
        <div className="flex items-center gap-4">
          <img
            src={`/assets/${user?.picturePath}`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            <h1 className="text-2xl font-bold">
              {user?.firstName} {user?.lastName}
            </h1>
            {user?.description && (
              <p className="text-gray-500">{user?.description}</p>
            )}

            <p className="text-gray-500 text-sm">Lives in {user?.location}</p>
            {isLoggedInUser && (
              <Link
                to="/account"
                className="flex items-center gap-1 mt-2 text-sm text-socialBlue"
              >
                <FiEdit2 />
                Edit Profile
              </Link>
            )}
          </div>
        </div>
      </Card>

      {user?.aboutMe && (
        <Card className="mt-4 w-[632px]">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-600">{user?.aboutMe}</p>
        </Card>
      )}
      <Card className="mt-4 w-[632px]">
        <h2 className="text-xl font-semibold mb-2">
          {user?.firstName}'s Posts
        </h2>
        <div className="space-y-4">
          {userPosts?.data?.posts.map((post) => (
            <ProfilePost postData={post} key={post._id} />
          ))}
        </div>
      </Card>
    </div>
  );
}

export default MyProfile;
