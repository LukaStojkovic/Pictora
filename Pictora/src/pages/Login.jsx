import React from "react";
import LoginForm from "../features/authentication/LoginForm";

function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login to Your Account
        </h2>
        <LoginForm />

        <p className="text-center text-gray-500 text-xs mt-6">
          &copy;2024. Pictora All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Login;
