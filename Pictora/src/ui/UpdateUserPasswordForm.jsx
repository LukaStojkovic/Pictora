import React from "react";
import { useForm } from "react-hook-form";
import { useUpdateUserPassword } from "../hooks/useUpdateUserPassword";
import useUser from "../hooks/useUser";
import Spinner from "./Spinner";
import Button from "./Button";

function UpdateUserPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useUser();
  const { updateUserPassword, isLoading } = useUpdateUserPassword(user?._id);

  function handleUpdateUserPassword(data) {
    updateUserPassword(data);
  }

  if (isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit(handleUpdateUserPassword)}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Current Password
        </label>
        <input
          className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="currentPassword"
          type="password"
          placeholder="Current Password"
          {...register("currentPassword", { required: true })}
        />
        {errors.currentPassword && (
          <p className="text-red-400 text-[12px]">This field is required!</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="newPassword"
        >
          New password
        </label>
        <input
          className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="newPassword"
          type="password"
          placeholder="New password"
          {...register("newPassword", { required: true })}
        />
        {errors.newPassword && (
          <p className="text-red-400 text-[12px]">This field is required!</p>
        )}
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="confirmPassword"
        >
          Confirm Password
        </label>
        <input
          className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && (
          <p className="text-red-400 text-[12px]">This field is required!</p>
        )}
      </div>
      <div className="flex justify-center">
        <Button type="submit">Change Password</Button>
      </div>
    </form>
  );
}

export default UpdateUserPasswordForm;
