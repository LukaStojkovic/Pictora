import React from "react";

function Button({ children, type = "button", className }) {
  return (
    <button
      className={`bg-socialBlue hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
