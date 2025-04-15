import React, { useState } from "react";
import img from "../assets/img.jpeg";
import linkedin from "../assets/Logo/icons8-linkedin-48.png";
import facebook from "../assets/Logo/icons8-facebook-48.png";
import github from "../assets/Logo/icons8-github-64.png";
import twiter from "../assets/Logo/icons8-twitter-logo-96.png";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const HeroSec = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };
  const handleType = (count) => {
    console.log(`Made it to ${count}`);
  };
  return (
    <section className="flex items-center justify-between sm:flex-row flex-col  py-16 w-11/12 mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[#ffffff] sm:w-[50%] space-y-5"
      >
        <h1 className="font-custom font-bold text-3xl md:text-4xl mb-3">
          <span className="text-[#DA9310]">Hi, I'm</span>{" "}
          <Typewriter
            words={["frontend Developer", "Web Developer","Abu Obaed Ashik "]}
            loop={4}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </h1>
        <h3 className="font-custom font-bold text-[#DA9310] text-xl md:text-2xl ">
          <span>JUNIOR FRONTEND DEVELOPER</span>
        </h3>
        <p className="text-base md:text-lg my-2">
          Developer by Passion, Designer at Heart
        </p>
        <div className="social-icons flex items-center justify-start gap-3 text-3xl text-[#4040d3] ">
          <NavLink
            to={"https://www.facebook.com/abu.obaed.90"}
            target="_blank"
            className="h-[28px] w-[28px]"
          >
            <img src={facebook} alt="" />
          </NavLink>
          <NavLink
            to={
              "https://www.linkedin.com/in/abu-obaed-ashik-junior-web-developer-00a5b0230/"
            }
            target="_blank"
            className="h-[28px] w-[28px]"
          >
            <img src={linkedin} alt="" />
          </NavLink>
          <NavLink to={"https://x.com/AAshik44029"} target="_blank">
            <img src={twiter} alt="" className="h-[28px] w-[28px]" />
          </NavLink>
          <NavLink
            to={"https://github.com/abuobaedashik"}
            target="_blank"
            className="text-[25px]"
          >
            <FaGithub></FaGithub>
          </NavLink>
        </div>

        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1eHmUlWQLhpXStM2416gEN5yJ5DDZcmKt/view?usp=sharing"
            target="_blank"
            download={
              "https://drive.google.com/file/d/1eHmUlWQLhpXStM2416gEN5yJ5DDZcmKt/view?usp=sharing"
            }
            className="px-3 py-2 text-xl font-semibold border hover:bg-[#da931080] border-[#DA9310] rounded-md  text-[#ffffff]  "
          >
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 0.9 }}
         initial={{ opacity: 0, scale: 0.5 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.5 }}
         className="relative p-1 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
      >
        <img
          src={img}
          alt="Obaed Profile"
          className="  w-[400px] h-[400px] object-cover image-full rounded-full shadow-sm border-4 border-gray-900"
        />
      </motion.div> */}
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative p-1 rounded-full"
      >
        {/* Gradient Shadow */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 blur-lg transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Profile Image */}
        <img
          src={img}
          alt="Profile"
          className="md:w-[400px] h-[180px] w-[180px] sm:mt-0 mt-12 md:h-[400px] object-cover rounded-full shadow-lg border-4 border-gray-900 relative"
        />
      </motion.div>
    </section>
  );
};

export default HeroSec;
