import React from "react";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { useForm } from "react-hook-form";
import useUser from "../hooks/useUser";
import Spinner from "./Spinner";
import Button from "./Button";

function UpdateUserForm() {
  const { register, handleSubmit } = useForm();
  const { user, isLoading } = useUser();
  const { updateUser } = useUpdateUser(user?._id);

  function handleUpdateUser(data) {
    const userData = new FormData();

    if (data?.firstName) userData.append("firstName", data.firstName);
    if (data?.aboutMe) userData.append("aboutMe", data.aboutMe);
    if (data?.description) userData.append("description", data.description);
    if (data?.email) userData.append("email", data.email);
    if (data?.picture) userData.append("picture", data.picture[0]);

    updateUser(userData);
  }

  if (isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit(handleUpdateUser)}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="username"
          type="text"
          placeholder="Username"
          defaultValue={user?.firstName}
          {...register("firstName")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="email"
          type="email"
          placeholder="Email"
          defaultValue={user?.email}
          {...register("email")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          About me
        </label>
        <input
          className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="aboutMe"
          type="aboutMe"
          placeholder="About me"
          {...register("aboutMe")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Description
        </label>
        <input
          className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="description"
          type="description"
          placeholder="Description"
          {...register("description")}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="picture"
        >
          Profile Picture
        </label>
        <div className="flex gap-4 items-center justify-center">
          <img
            src={`https://pictora-backend-rr5z.onrender.com/assets/${user?.picturePath}`}
            className="rounded-[50%] h-[4.5rem] w-[4.5rem]"
          />
          <input
            className="shadow-md border rounded w-[0.1px] h-[0.1px] py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 absolute z-[-1]"
            id="picture"
            type="file"
            {...register("picture")}
          />
          <label
            htmlFor="picture"
            className="cursor-pointer rounded-md text-gray-600"
          >
            Browse image
          </label>
        </div>
      </div>
      <div className="flex justify-center">
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}

export default UpdateUserForm;
