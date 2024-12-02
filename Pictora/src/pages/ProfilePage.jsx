import React from "react";
import UserCard from "../features/user/UserCard";
import AboutMe from "../features/user/AboutMe";
import UserPosts from "../features/user/UserPosts";

function MyProfile() {
  return (
    <div className="grow mt-4">
      <UserCard />
      <AboutMe />
      <UserPosts />
    </div>
  );
}

export default MyProfile;
