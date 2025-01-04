import React from "react";
import img from '../assets/Image/IMG-20240319-WA0006.jpg'
import linkedin from '../assets/Logo/icons8-linkedin-48.png'
import facebook from '../assets/Logo/icons8-facebook-48.png'
import github from '../assets/Logo/icons8-github-64.png'
import twiter from '../assets/Logo/icons8-twitter-logo-96.png'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitch } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const HeroSec = () => {
  return (
    <section className="flex items-center justify-between sm:flex-row flex-col  py-16 w-11/12 mx-auto" >
      <div className="text-[#ffffff] sm:w-[50%] space-y-5">
        <h1 className="font-custom font-bold text-5xl mb-3">
          Hi, I am <span>Obaed</span>
        </h1>
        <h3 className="font-custom font-bold text-[#DA9310] text-5xl ">
          <span>WEB DEVELOPER</span>
        </h3>
        <p className="text-base my-2">
         Developer by Passion, Designer at Heart
        </p>
        <div className="social-icons flex items-center justify-start gap-3 text-3xl text-[#4040d3] ">
            <a href="#" className="h-[28px] w-[28px]" ><img src={facebook} alt="" /></a>
            <a href="#" className="h-[28px] w-[28px]"><img src={linkedin} alt="" /></a>
            <a href="#"><img src={twiter} alt="" className="h-[28px] w-[28px]" /></a>
            <a href="#" className="text-[25px]"><FaGithub></FaGithub></a>
        </div>

        <div className="mt-8">
          <a href="#" className="px-3 py-2 text-xl font-semibold border border-[#DA9310] rounded-md  text-[#ffffff]  ">
            Download Resume
          </a>
        </div>
      </div>

      <div className="home-image">
         <img src={img} alt="Obaed Profile" className="  w-[250px] h-[280px] rounded-lg shadow-sm" />
      </div>
    </section>
  );
};

export default HeroSec;
