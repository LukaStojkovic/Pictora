import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useRegister from "../hooks/useRegister";
import Spinner from "../ui/Spinner";
import RegisterForm from "../features/authentication/RegisterForm";

function Register() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h2>
        <RegisterForm />
        <p className="text-center text-gray-500 text-xs mt-6">
          &copy;2024. Pictora All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Register;
