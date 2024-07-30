import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const {currentUser} = useContext(AuthContext);
  

  return (
    <>
      <nav className="flex justify-between items-center h-[100px]">
        <div className="flex items-center w-[60%]">
          <Link
            className="flex gap-2 text-[20px] transition-all duration-400 ease-in-out hover:scale-105"
            to="/"
          >
            <img className="flex w-[28px]" src="/logo.png" alt="" />
            <span className="flex font-bold">Real Estate</span>
          </Link>
          <div className="flex items-center gap-[50px]">
            <span className="font-bold"></span>
            <div className="flex gap-5">
              <Link
                className="transition-all duration-400 ease-in-out hover:scale-105"
                to="/"
              >
                Home
              </Link>
              <Link
                className="transition-all duration-400 ease-in-out hover:scale-105"
                to="/about"
              >
                About
              </Link>
              <Link
                className="transition-all duration-400 ease-in-out hover:scale-105"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="transition-all duration-400 ease-in-out hover:scale-105"
                to="/agents"
              >
                Agents
              </Link>
            </div>
          </div>
        </div>

        <div className="flex w-[40%] items-center justify-end bg-[#fcf5f3] h-full">
          {currentUser ? (
            <>
              <div className="py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105 flex items-center gap-2">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src={currentUser.avatar || "/noAvatar.png"}
                  alt=""
                />
                <span>{currentUser.username}</span>
              </div>
              <Link
                className="bg-yellow-400 py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105 relative"
                to="/ProfilePage"
              >
                Profile
                <span className="absolute top-[-10px] right-[-10px] bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Link>
            </>
          ) : (
            <>
              <Link
                className="py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105"
                to="/login"
              >
                Sign in
              </Link>
              <Link
                className="bg-yellow-400 py-[6px] px-[20px] m-5 transition-all duration-400 ease-in-out hover:scale-105"
                to="/register"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
