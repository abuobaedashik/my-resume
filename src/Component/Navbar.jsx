import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../assets/Logo/logoObaed.png'


const Navbar = () => {
  const link = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3  text-xl text-[#FE9307] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-xl font-medium px-3"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
       className={({ isActive }) =>
        isActive
          ? "px-3  text-xl text-[#FE9307] font-medium flex gap-1 items-center"
          : " flex gap-1 items-center text-xl font-medium px-3"
      }
        to="/"
      >
       About Us
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3  text-xl text-[#FE9307] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-xl font-medium px-3"
        }
        to="/"
      >
        Educations
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3  text-xl text-[#FE9307] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-xl font-medium px-3"
        }
        to="/"
      >
        Skills
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "px-3  text-xl text-[#FE9307] font-medium flex gap-1 items-center"
            : " flex gap-1 items-center text-xl font-medium px-3"
        }
        to="/"
      >
        Contact 
      </NavLink>

      
    </>
  );

  return (
    <>
      <div className="navbar max-w-[1920px] z-50 bg-opacity-30 fixed bg-[#111723] px-4 sm:px-44 md:px-52 text-[#ffffff]">
        <div className="navbar-start">
          <div className="dropdown">
             
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <div className="text-xl font-bold font-nunito">Abu Obaed</div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="px-3 py-2 border-1 bg-[#FE9307] text-[#ffffff] rounded-xl  hover:bg-[#fe9307cc]">Download Resume</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
