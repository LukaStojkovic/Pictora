import React from "react";
import Card from "../../ui/Card";
import getUserById from "../../hooks/useGetUserById";
import { useParams } from "react-router-dom";
import useGetUserPosts from "../../hooks/useGetUserPosts";
import ProfilePost from "../posts/ProfilePosts";
import Spinner from "../../ui/Spinner";

function UserPosts() {
  const { userId } = useParams();
  const { user } = getUserById(userId);
  const { userPosts, isLoading } = useGetUserPosts(userId);

  if (isLoading) return <Spinner />;

  return (
    <Card className="mt-4 w-[632px]">
      <h2 className="text-xl font-semibold mb-2">{user?.firstName}'s Posts</h2>
      <div className="space-y-4">
        {userPosts?.data?.posts.length > 0 ? (
          userPosts?.data?.posts.map((post) => (
            <ProfilePost postData={post} key={post._id} />
          ))
        ) : (
          <p className="text-sm">This user don't have any posts yet.</p>
        )}
      </div>
    </Card>
  );
}

export default UserPosts;
