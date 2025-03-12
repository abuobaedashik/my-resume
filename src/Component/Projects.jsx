import { motion } from "framer-motion";
import p1 from "../../src/assets/Image/about-me.jpg";
import project1 from "../../src/assets/Image/colaborative.png";
import project2 from "../../src/assets/Image/car-rental.png";
import project3 from "../../src/assets/Image/bristo-boss.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      <div className="mx-auto w-11/12 text-[#ffffff]">
        <div className="text-5xl font-bold mb-16 text-center">Projects</div>
        <div className="mt-5 flex items-center justify-between sm:flex-row flex-col gap-6">
          <div className="flex p-3 flex-col gap-3  justify-center   border border-[#ffffff] rounded-lg">
            <div className=" rounded-md">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.5 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={project1}
                alt="img"
                className=" h-[300px] w-full rounded-md"
              />
            </div>
            <div className="text space-y-3 ">
              <p className="name text-xl font-bold">
                Collaborative Study Platform
              </p>
              <p className="discription">
                An interactive study platform for seamless collaboration. Offers
                real-time editing, group chats, and task management.
              </p>
              <p className="feature text-xs font-extralight list-none">
                <li>Booked Session By payment</li>
                <li>Admin Tutor and student Different Dashboard</li>
                <li>Show Running Session Only </li>
              </p>
               <div className="flex items-center gap-2">
                  <p>#React.js</p>
                  <p>#Tailwind CSS</p>
                  <p>#Firebase</p>
                  <p>#CSS</p>
                  <p>#HTML</p>
               </div>
              <div className="button flex gap-6 items-center">
                <button className="px-3 font-bold py-1 rounded-md bg-[#da9310cb]">
                  Client
                </button>
                <button className="px-3 font-bold py-1 rounded-md bg-[#da9310cb]">
                  Server
                </button>
                <NavLink target="_blank" to={'https://collaborative-study-plat-76de8.web.app/'} className="px-3 py-1 font-bold rounded-md bg-[#da9310cb]">
                 View
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex p-3 flex-col gap-3   border border-[#ffffff] rounded-lg">
            <div className=" rounded-md">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.5 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={project2}
                alt="img"
                className=" h-[300px] w-full  rounded-md"
              />
            </div>
            <div className="text space-y-3 ">
              <p className="name text-xl font-bold">
                Collaborative Study Platform
              </p>
              <p className="discription">
                An interactive study platform for seamless collaboration. Offers
                real-time editing, group chats, and task management.
              </p>
              <p className="feature text-xs font-extralight list-none">
                <li>Booked Session By payment</li>
                <li>Admin Tutor and student Different Dashboard</li>
                <li>Show Running Session Only </li>
              </p>
              <div className="flex items-center gap-2">
                  <p>#React.js</p>
                  <p>#Tailwind CSS</p>
                  <p>#Firebase</p>
                  <p>#CSS</p>
                  <p>#HTML</p>
               </div>
              <div className="button flex gap-6 items-center">
                <button className="px-3 font-bold py-1 rounded-md bg-[#da9310cb]">
                  Client
                </button>
                <button className="px-3 font-bold py-1 rounded-md bg-[#da9310cb]">
                  Server
                </button>
                <NavLink to={'https://rent-my-ride-6b8e8.web.app/'} target="_blank" className="px-3 py-1 font-bold rounded-md bg-[#da9310cb]">
                  View
                </NavLink>
              </div>
            </div>
          </div>
          <div className="flex p-3 flex-col gap-3  border border-[#ffffff] rounded-lg">
            <div className=" rounded-md">
              <motion.img
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.5 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={project3}
                alt="img"
                className=" h-[300px] w-full  rounded-md"
              />
            </div>
            <div className="text space-y-3 ">
              <p className="name text-xl font-bold">
                Collaborative Study Platform
              </p>
              <p className="discription">
                An interactive study platform for seamless collaboration. Offers
                real-time editing, group chats, and task management.
              </p>
              <p className="feature text-xs font-extralight list-none">
                <li>Booked Session By payment</li>
                <li>Admin Tutor and student Different Dashboard</li>
                <li>Show Running Session Only </li>
              </p>
              <div className="flex items-center gap-2">
                  <p>#React.js</p>
                  <p>#Tailwind CSS</p>
                  <p>#Firebase</p>
                  <p>#CSS</p>
                  <p>#HTML</p>
               </div>
              <div className="button flex gap-6 items-center">
                <button className="px-3 font-bold py-1 rounded-md bg-[#da9310cb]">
                  Client
                </button>
                <button className="px-3 py-1 font-bold rounded-md bg-[#da9310cb]">
                  Server
                </button>
                <NavLink to={'https://bristro-boss-cb2aa.web.app/'} target="_blank" className="px-3 py-1 font-bold rounded-md bg-[#da9310cb]">
                  View
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
