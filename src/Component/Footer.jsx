import React from "react";
import foot from "../../src/assets/Image/web/foot32.png";
import { FaGithub } from "react-icons/fa";
import facebook from "../../src/assets/Logo/icons8-facebook-48.png";
import linkedin from "../../src/assets/Logo/icons8-linkedin-48.png";
import twiter from "../../src/assets/Logo/icons8-twitter-logo-96.png";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center  bg-[#131313] text-primary-content p-10">
      <aside className="">
        <img src={foot} alt="foot" className="w-12 h-12" />
        <p className="font-bold font-custom md:text-4xl text-2xl ">Abu Obaed Ashik</p>
        <p className="text-xl font-medium font-nunito">Copyright © {new Date().getFullYear()} - All right reserved</p>
        <p className="font-roboto">Mohammadpur, Dhaka, Bangladesh</p>
        <div className="social-icons flex items-center justify-start gap-3 text-3xl text-[#4040d3] ">
            <NavLink to={'https://www.facebook.com/abu.obaed.90'} target="_blank" className="h-[28px] w-[28px]">
              <img src={facebook} alt="" />
            </NavLink>
            <NavLink to={'https://www.linkedin.com/in/abu-obaed-ashik-junior-web-developer-00a5b0230/'} target="_blank" className="h-[28px] w-[28px]">
              <img src={linkedin} alt="" />
            </NavLink>
            <NavLink to={'https://x.com/AAshik44029'} target="_blank">
              <img src={twiter} alt="" className="h-[28px] w-[28px]" />
            </NavLink>
            <NavLink to={'https://github.com/abuobaedashik'} target="_blank" className="text-[25px]">
              <FaGithub></FaGithub>
            </NavLink>
          </div>
      </aside>
    </footer>
  );
};

export default Footer;
