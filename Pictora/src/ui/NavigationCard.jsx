import { HiOutlineLogout } from "react-icons/hi";
import Card from "./Card";
import { Link, NavLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import useUser from "../hooks/useUser";
import { CiHome, CiSettings, CiUser } from "react-icons/ci";
import Spinner from "./Spinner";

export default function NavigationCard() {
  const { user, isLoading: isLoadingUser } = useUser();
  const { logout } = useLogout();

  function handleLogout() {
    logout();
  }

  if (isLoadingUser) return <Spinner />;

  return (
    <Card>
      <div className="px-4">
        <h2 className="text-gray-400 mb-3">Navigation</h2>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex gap-2 py-3 items-center ${
              isActive ? "text-socialBlue" : "text-gray-900"
            }`
          }
        >
          <CiHome size={20} /> Home
        </NavLink>
        <NavLink
          to={`/profile/${user?._id}`}
          className={({ isActive }) =>
            `flex gap-2 py-3 items-center ${
              isActive ? "text-socialBlue" : "text-gray-900"
            }`
          }
        >
          <CiUser size={20} />
          My Profile
        </NavLink>

        <NavLink
          to="/account"
          className={({ isActive }) =>
            `flex gap-2 py-3 items-center ${
              isActive ? "text-socialBlue" : "text-gray-900"
            }`
          }
        >
          <CiSettings size={20} />
          Settings
        </NavLink>

        {user && (
          <div className="mt-20">
            <div className="flex items-center mb-2">
              <Link to={`/profile/${user._id}`}>
                <img
                  src={`https://pictora-backend-rr5z.onrender.com/assets/${user.picturePath}`}
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
