import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { BsFileEarmarkPost } from "react-icons/bs";
import application from "../../../assets/application.png";
import addjob from "../../../assets/addjob.png";
import Logo from "../../../assets/Logo.png";
import useAuth from "../../../Context/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { User, signOutUser } = useAuth();

  const handleRegister = () => {
    setIsMobileMenuOpen(false);
    navigate("/register");
  };

  const handleSignIn = () => {
    setIsMobileMenuOpen(false);
    navigate("/signin");
  };

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        toast.success(`${User?.displayName}, You are Signout Now.`, {
          style: {
            backgroundColor: "#E2E8F0",
            color: "#05264e",
          },
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const navlinks = (
    <>
      <li>
        <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
          <MdHome className="inline text-[20px] text-black" /> Home
        </NavLink>
      </li>
      <li className="flex">
        <NavLink
          to="/application/me"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img src={application} className="w-5" />
          My Applications
        </NavLink>
      </li>
      <li className="flex">
        <NavLink to="/add-job" onClick={() => setIsMobileMenuOpen(false)}>
          <img src={addjob} className="w-5" />
          Add Job
        </NavLink>
      </li>
      <li>
        <NavLink to="/my-jobs" onClick={() => setIsMobileMenuOpen(false)}>
          <BsFileEarmarkPost className="inline text-black" />
          My Posted Jobs
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar font-inter relative z-50 px-4 sm:px-6 md:px-8 flex-nowrap">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-merriweather flex justify-start items-center">
          <img src={Logo} className="w-8 md:w-9" alt="HireHive Logo" />
          <span className="text-2xl sm:text-3xl font-semibold text-[#05264e] ml-2 sm:ml-3">
            HireHive
          </span>
        </a>
      </div>

      <div className="hidden xl:flex justify-center">
        <ul className="menu menu-horizontal space-x-3 text-sm md:text-[17px] font-medium text-[#05264e]">
          {navlinks}
        </ul>
      </div>

      <div className="hidden xl:flex items-center space-x-8 ml-4">
        {User ? (
          <button
            onClick={handleSignOut}
            className="btn bg-blue-600 rounded-[5px] px-4 py-2 text-white hover:-translate-y-1 duration-200 hover:bg-[#05264e] text-sm md:text-base"
          >
            Sign Out
          </button>
        ) : (
          <div className="flex gap-5">
            <button
              onClick={handleRegister}
              className="text-[#05264e] underline hover:text-blue-600 hover:-translate-y-1 duration-200 text-sm md:text-base cursor-pointer"
            >
              Register
            </button>
            <button
              onClick={handleSignIn}
              className="btn bg-blue-600 rounded-[5px] px-4 py-2 text-white hover:-translate-y-1 duration-200 hover:bg-[#05264e] text-sm md:text-base"
            >
              Sign In
            </button>
          </div>
        )}
      </div>

      {/* for small and medium devices */}
      <div className="xl:hidden flex items-center">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="btn btn-ghost"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-blue-600 font-bold"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 w-screen h-screen z-50 transition-all duration-1000 ease-in-out bg-blue-100 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <button
          className="absolute top-6 right-8 text-3xl text-blue-600 font-bold"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-5 p-4">
          <ul className="menu text-xl font-medium text-[#05264e] space-y-3">
            {navlinks}
          </ul>
          {User ? (
            <button
              onClick={handleSignOut}
              className="btn bg-blue-600 w-40 rounded-[5px] py-2 text-white"
            >
              Sign Out
            </button>
          ) : (
            <div className="flex flex-col gap-4">
              <button
                onClick={handleRegister}
                className="text-[#05264e] w-40 text-center py-2 border border-[#05264e] rounded cursor-pointer"
              >
                Register
              </button>
              <button
                onClick={handleSignIn}
                className="btn bg-blue-600 w-40 rounded-[5px] py-2 text-white"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
