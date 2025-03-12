import React from "react";
import react from "../../src/assets/Image/react96.png";
import tailwind from "../../src/assets/Image/tailwind.png";
import js from "../../src/assets/Image/js.png";
import firebase from "../../src/assets/Image/firebase.png";
import css from "../../src/assets/Image/css3.png";
import html from "../../src/assets/Image/html5.png";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div>
      <div className="mx-auto w-11/12 text-[#ffffff]">
        <div className="text-5xl font-bold mb-16 text-center">Skills</div>
        <div className="mt-5 flex items-center justify-between sm:flex-row flex-col gap-4">
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-4 my-3 text-[#FE9307]"
          >
            <img src={react} alt="img" className="" />
          </motion.div>
          <motion.div className="mx-4 my-3 text-[#FE9307]">
            <motion.img
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              src={tailwind}
              alt="img"
              className=""
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={js}
              alt="img"
              className=""
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={firebase} alt="img" className="" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={css} alt="img" className="" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={html} alt="img" className="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
