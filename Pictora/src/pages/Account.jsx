import React from "react";
import Card from "../ui/Card";
import useUser from "../hooks/useUser";
import { useForm } from "react-hook-form";
import { useUpdateUser } from "../hooks/useUpdateUser";
import Spinner from "../ui/Spinner";

function Account() {
  const { user, isLoading } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { updateUser } = useUpdateUser(user?._id);

  function handleUpdateUser(data) {
    const userData = {};

    if (data?.firstName) userData.firstName = data.firstName;
    if (data?.aboutMe) userData.aboutMe = data.aboutMe;
    if (data?.description) userData.description = data.description;
    if (data?.email) userData.email = data.email;
    // if (data?.picture) userData.picture = data.picture[0];

    updateUser(userData);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="mt-4 flex max-w-4xl mx-auto gap-6">
      <Card className="w-[632px] h-[900px]">
        <div className="flex gap-5 flex-col">
          <span className="text-xl">Account Settings</span>

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
                  src={`/assets/${user?.picturePath}`}
                  className="rounded-[50%] h-[4.5rem] w-[4.5rem]"
                />
                <input
                  className="shadow-md border rounded w-[0.1px] h-[0.1px] py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 absolute z-[-1]"
                  id="picture"
                  type="file"
                  // {...register("picture")}
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
              <button
                type="submit"
                className="bg-socialBlue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save
              </button>
            </div>
          </form>

          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Current Password
              </label>
              <input
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="password"
                type="text"
                placeholder="Current Password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="new-password"
              >
                New password
              </label>
              <input
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="new-password"
                type="text"
                placeholder="New password"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="confirm-password"
                type="text"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="bg-socialBlue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default Account;
