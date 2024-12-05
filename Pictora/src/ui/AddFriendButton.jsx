import React, { useEffect, useState } from "react";
import { IoPersonAddOutline } from "react-icons/io5";
import { useAddRemoveFriend } from "../hooks/useAddRemoveFriend";
import Spinner from "./Spinner";
import { IoPersonRemoveOutline } from "react-icons/io5";
import useUser from "../hooks/useUser";

function AddFriendButton({ friendId }) {
  const { addRemoveFriend, isLoading } = useAddRemoveFriend();
  const { user } = useUser();

  const [isFriend, setIsFriend] = useState(false);

  useEffect(() => {
    if (user?.friends) {
      setIsFriend(user.friends.includes(friendId));
    }
  }, [user, friendId]);

  function handleAddRemoveFriend() {
    addRemoveFriend({ userId: user._id, friendId });
    setIsFriend((prev) => !prev);
  }

  if (isLoading) return <Spinner />;

  return (
    <button onClick={handleAddRemoveFriend}>
      {isFriend ? (
        <IoPersonRemoveOutline className="text-red-500" size={20} />
      ) : (
        <IoPersonAddOutline className="text-socialBlue" size={20} />
      )}
    </button>
  );
}

export default AddFriendButton;
