import React from "react";
import { useForm } from "react-hook-form";
import useLogin from "../../hooks/useLogin";
import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import Button from "../../ui/Button";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { login, isLoading } = useLogin();

  if (isLoading) return <Spinner />;

  function handleSubmitLogin(data) {
    login(data);
  }
  return (
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
          <p className="text-red-400 text-[12px]">This field is required!</p>
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
          <p className="text-red-400 text-[12px]">This field is required!</p>
        )}
      </div>
      <div className="flex items-center justify-between">
        <Button type="submit">Login</Button>
        <Link
          className="text-sm font-bold text-socialBlue hover:text-blue-600"
          to="/register"
        >
          Don't have account yet?
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
