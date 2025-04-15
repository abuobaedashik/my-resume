import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo/logoObaed.png";
import icon from "../../src/assets/Image/web/foot32.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const link = (
    <>
      <Link
        to="home"
        spy={true} 
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="text-[#FE9307]"
        className="px-3 text-xl font-medium flex gap-1 cursor-pointer items-center"
      >
        Home
      </Link>

      <Link
        to="about"
        spy={true} 
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="text-[#FE9307]"
        className="px-3 text-xl font-medium flex gap-1 cursor-pointer items-center"
      >
        About Me
      </Link>
      <Link
        to="skill"
        spy={true} 
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="text-[#FE9307]"
        className="px-3 text-xl font-medium flex gap-1 cursor-pointer items-center"
      >
        Skills
      </Link>
      <Link
        to="education"
        spy={true} 
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="text-[#FE9307]"
        className="px-3 text-xl font-medium flex gap-1 cursor-pointer items-center"
      >
        Educations
      </Link>
      <Link
        to="projects"
        spy={true} 
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="text-[#FE9307]"
        className="px-3 text-xl font-medium flex gap-1 cursor-pointer items-center"
      >
        Projects
      </Link>
      <Link
        to="contact"
        spy={true} 
        smooth={true}
        offset={-80}
        duration={500}
        activeClass="text-[#FE9307]"
        className="px-3 text-xl font-medium flex gap-1 cursor-pointer items-center"
      >
        Contact
      </Link>
    </>
  );

  return (
    <>
      <div className="navbar max-w-[1920px] z-50 bg-opacity-30 fixed bg-[#111723] px-2 sm:px-44 md:px-52 text-[#ffffff]">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
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
          <div className="md:text-xl text-base flex items-center gap-2  font-bold font-nunito">
            <img src={icon} alt="obaed" className="w-8 h-8 hidden sm:flex" />
            <p> Abu Obaed</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/file/d/1eHmUlWQLhpXStM2416gEN5yJ5DDZcmKt/view?usp=sharing"
            target="_blank"
             download={"https://drive.google.com/file/d/1eHmUlWQLhpXStM2416gEN5yJ5DDZcmKt/view?usp=sharing"}
           className="md:px-3 px-1 py-1 md:py-2 border-1 bg-[#FE9307] text-[#ffffff] rounded-xl  hover:bg-[#fe9307cc]">
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
