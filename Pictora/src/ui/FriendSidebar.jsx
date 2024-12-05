import React from "react";
import Card from "./Card";
import useGetUserFriends from "../hooks/useGetUserFriends";
import useUser from "../hooks/useUser";
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

function FriendSidebar() {
  const { user, isLoading: isLoadingUser } = useUser();

  const { friends, isLoading: isLoadingFriends } = useGetUserFriends(user?._id);

  if (isLoadingFriends || isLoadingUser) return <Spinner />;

  return (
    <div className="w-1/4">
      <div className="sticky top-4">
        <Card>
          <div className="px-4">
            <h2 className="text-gray-400 mb-4">Friend List</h2>
            {friends.length > 0 ? (
              friends.map((friend) => (
                <div className="flex items-center gap-2 mb-3" key={friend._id}>
                  <Link
                    to={`/profile/${friend._id}`}
                    className="flex items-center gap-2"
                  >
                    <img
                      className="rounded-full h-10 w-10"
                      src={`${import.meta.env.VITE_API_URL}/assets/${
                        friend.picturePath
                      }`}
                    />
                    <div className="text-sm">
                      <p>{friend.firstName.concat(" ", friend.lastName)}</p>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-700">You have no friends yet</p>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FriendSidebar;
