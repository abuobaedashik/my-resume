import React, { useState } from "react";
import about from "../assets/Image/about-me.jpg";
import { motion } from "framer-motion";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto w-11/12 text-[#ffffff]"
    >
      <div className="text-5xl font-bold text-center mb-16">About Me</div>
      <div className="mt-5 flex items-center justify-between sm:flex-row flex-col">
        <div className="sm:w-[45%]">
          <img
            src={about}
            alt="img"
            className="w-[350px] rounded-3xl text-justify h-[260px] "
          />
        </div>
        <div className="sm:w-[45%]">
          <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="z-50 shadow-lg hover:shadow-[#CF951C] px-4 py-2 rounded-md">
              Hi, I'm Abu Obaed, a frontend developer with a passion for
              creating visually stunning and user-friendly web experiences. I
              specialize in crafting responsive and dynamic designs using
              technologies like HTML, CSS, React.js, and Tailwind CSS. Beyond
              coding, I love exploring new places and diving into captivating
              books. These hobbies not only fuel my creativity but also inspire
              my approach to design and problem-solving. Let’s create something
              amazing together!
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
