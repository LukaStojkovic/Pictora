import React from "react";
import NavigationCard from "./NavigationCard";

function Sidebar() {
  return (
    <div className="w-1/4">
      <div className="sticky top-4">
        <NavigationCard />
      </div>
    </div>
  );
}

export default Sidebar;
