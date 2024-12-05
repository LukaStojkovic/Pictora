import React from "react";
import Sidebar from "./ui/Sidebar";
import { Outlet } from "react-router-dom";
import FriendSidebar from "./ui/FriendSidebar";

function Layout() {
  return (
    <>
      <div className="mt-4 flex max-w-[1100px] mx-auto gap-6">
        <Sidebar />
        <Outlet />
        <FriendSidebar />
      </div>
    </>
  );
}

export default Layout;
