import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import Spinner from "../ui/Spinner";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { register: registerFn, isLoading } = useRegister();

  function handleSubmitForm(data) {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("location", data.location);
    formData.append("picture", data.picture[0]);

    registerFn(formData);
  }

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="flex justify-center gap-2">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow-md border rounded w-32 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="firstName"
                type="text"
                placeholder="First Name"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <p className="text-red-400 text-[12px]">
                  This field is required!
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow-md border rounded w-32 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="lastName"
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <p className="text-red-400 text-[12px]">
                  This field is required!
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="location"
              >
                Location
              </label>
              <input
                className="shadow-md border rounded w-32 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                id="location"
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <p className="text-red-400 text-[12px]">
                  This field is required!
                </p>
              )}
            </div>
          </div>
          <div className="mb-6">
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
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-400 text-[12px]">
                This field is required!
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-400 text-[12px]">
                This field is required!
              </p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="picture"
            >
              Profile Picture
            </label>
            <input
              className="shadow-md border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="picture"
              type="file"
              {...register("picture")}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-socialBlue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Register"}
            </button>
            <Link
              className="text-sm font-bold text-socialBlue hover:text-blue-600"
              to="/login"
            >
              Already have account?
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs mt-6">
          &copy;2024. Pictora All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Register;
