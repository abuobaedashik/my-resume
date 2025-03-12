import React from "react";
import { motion } from "framer-motion";
const Educations = () => {
  return (
    <div>
      <div className="mx-auto w-11/12 text-[#ffffff] font-custom">
        <div className="text-5xl font-bold mb-4 text-center">Educations</div>
        <div className="mt-5 flex items-center justify-between flex-col gap-4">
          <motion.div
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}
          className="mt-3 px-16 z-50 shadow-lg hover:shadow-[#CF951C] py-6 w-[600px] rounded-xl bg-[#111723c8] border border-[#ffffff]">
            <div className="mt-3">
              <p className="text-4xl">Diploma in Engineering</p>
              <p className="text-xl">Govt. Graphics Arts Institute</p>
              <p className="text-xl">Computer Technology</p>
              <p className="text-base">Session-2020-2021</p>
              <p className="text-base">Passing Year- 2024</p>
              <p className="text-base">CGPA-3.69</p>
            </div>
          </motion.div>
          <div>
            <p>
              <motion.div
                 whileHover={{ scale: 1.1 }}
                 whileTap={{ scale: 0.9 }}
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
              className="mt-3 rounded-xl bg-[#111723c8] border z-50 shadow-lg hover:shadow-[#CF951C] border-[#ffffff] px-16 py-6 w-[600px]">
             
                <p className="text-4xl">Secondary School Certificate</p>
                <p className="text-xl">Baniajan Di-mukhi High School</p>
                <p className="text-xl">Group-Science</p>
                <p className="text-base">Passing Year- 2020</p>
                <p className="text-base">GPA-4.41</p>
              </motion.div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educations;
