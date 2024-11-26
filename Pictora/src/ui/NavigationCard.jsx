import { HiOutlineHome, HiOutlineLogout } from "react-icons/hi";
import Card from "./Card";
import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useUser from "../hooks/useUser";
import { CiHome, CiSettings, CiUser } from "react-icons/ci";

export default function NavigationCard() {
  const { user, isLoading } = useUser();
  const { logout } = useLogout();

  function handleLogout() {
    logout();
  }

  return (
    <Card>
      <div className="px-4">
        {/* <img src="public/assets/logo/Pictora-dark-logo.png" /> */}
        <h2 className="text-gray-400 mb-3">Navigation</h2>

        <Link to="/" className=" flex gap-2 py-3 items-center">
          <CiHome size={20} /> Home
        </Link>
        <Link
          to={`/profile/${user?._id}`}
          className=" flex gap-2 py-3 items-center"
        >
          <CiUser size={20} />
          My Profile
        </Link>

        <Link to="/account" className=" flex gap-2 py-3 items-center">
          <CiSettings size={20} />
          Settings
        </Link>

        {user && (
          <div className="mt-20">
            <div className="flex items-center mb-2">
              <Link to={`/profile/${user._id}`}>
                <img
                  src={`/assets/${user.picturePath}`}
                  alt="User profile picture"
                  className="w-10 h-10 rounded-full mr-2"
                />
              </Link>
              <div>{user.firstName}</div>
              <div className="ml-auto">
                <Link to="/login" onClick={handleLogout}>
                  <HiOutlineLogout className="hover:bg-slate-200 rounded-full" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
