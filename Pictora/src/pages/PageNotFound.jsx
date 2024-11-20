import React from "react";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="font-bold text-4xl">404 Page Not Found</h1>
      <button
        className="bg-socialBlue hover:bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
}

export default PageNotFound;
