import { HiOutlineHome, HiOutlineLogout } from "react-icons/hi";
import Card from "./Card";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function NavigationCard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/login");
    toast.success("You Successfuly Logged out");
  }

  return (
    <Card>
      <div className="px-4">
        <h2 className="text-gray-400 mb-3">Navigation</h2>

        <Link to="/" className="block flex gap-2 py-3 items-center">
          <HiOutlineHome /> Home
        </Link>
        <Link to="/my-profile" className="block flex gap-2 py-3 items-center">
          <CgProfile />
          My Profile
        </Link>

        <Link
          to="/login"
          className="block flex gap-2 py-3 items-center"
          onClick={handleLogout}
        >
          <HiOutlineLogout />
          Logout
        </Link>

        {/* <div className="flex items-center gap-2 ">
          <img src="https://placehold.co/50x50" className="rounded-full"></img>
          <span className="font-bold">Luka</span>
        </div> */}
      </div>
    </Card>
  );
}
