import React from "react";
import Card from "../ui/Card";

function Account() {
  return (
    <div className="mt-4 flex max-w-4xl mx-auto gap-6">
      <Card className="w-[632px] h-[744px]">
        <div className="flex gap-5 flex-col">
          <span className="text-xl">Account Settings</span>

          <form>
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
                // value="" TO-DO NAPRAVI DA OVDE PO DEAFULTU BUDE IME KORISNIKA TAKODJE I EMAIL
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
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="profile-picture"
              >
                Profile Picture
              </label>
              <div className="flex gap-4 items-center justify-center">
                <img
                  src="https://placehold.co/50x50"
                  className="rounded-[50%] h-[4.5rem] w-[4.5rem]"
                />
                <input
                  className="shadow-md border rounded w-[0.1px] h-[0.1px] py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 absolute z-[-1]"
                  id="photo"
                  type="file"
                />
                <label
                  htmlFor="photo"
                  className="cursor-pointer rounded-md text-gray-600"
                >
                  Browse image
                </label>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
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
