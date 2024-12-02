import React from "react";
import { useParams } from "react-router-dom";
import getUserById from "../../hooks/useGetUserById";
import Card from "../../ui/Card";

function AboutMe() {
  const { userId } = useParams();
  const { user } = getUserById(userId);

  return (
    <>
      {user?.aboutMe && (
        <Card className="mt-4 w-[632px]">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p className="text-gray-600">{user?.aboutMe}</p>
        </Card>
      )}
    </>
  );
}

export default AboutMe;
