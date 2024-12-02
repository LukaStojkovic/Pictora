import React from "react";
import Card from "../../ui/Card";
import getUserById from "../../hooks/useGetUserById";
import { Link, useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { FiEdit2 } from "react-icons/fi";

function UserCard() {
  const { user: loggedUser } = useUser();
  const { userId } = useParams();
  const { user } = getUserById(userId);
  const isLoggedInUser = userId === loggedUser?._id;

  return (
    <Card className="w-[632px]">
      <div className="flex items-center gap-4">
        {user?.picturePath && (
          <img
            src={`/assets/${user.picturePath}`}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
        )}

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
  );
}

export default UserCard;
