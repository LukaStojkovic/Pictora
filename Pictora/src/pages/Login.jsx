import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import Spinner from "../ui/Spinner";

function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login, isLoading } = useLogin();

  function handleSubmitLogin(data) {
    login(data);
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit(handleSubmitLogin)}>
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
          <div className="flex items-center justify-between">
            <button
              className="bg-socialBlue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="submit"
            >
              Login
            </button>
            <Link
              className="text-sm font-bold text-socialBlue hover:text-blue-600"
              to="/register"
            >
              Don't have account yet?
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

export default Login;
