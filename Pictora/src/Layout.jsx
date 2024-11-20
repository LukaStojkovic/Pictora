import React from "react";
import Sidebar from "./ui/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="mt-4 flex max-w-4xl mx-auto gap-6">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
