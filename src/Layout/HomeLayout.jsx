import About from "../Component/About";
import Contact from "../Component/Contact";
import Educations from "../Component/Educations";
import HeroSec from "../Component/HeroSec";
import Navbar from "../Component/Navbar";
import Projects from "../Component/Projects";
import Skill from "../Component/Skill";

const HomeLayout = () => {
    return (
        <div className="bg-[#111723] max-w-[1920px] mx-auto">
           <div className="pb-[84px] mx-auto ">
              <Navbar></Navbar>
           </div>
           {/* hero section */}
           <div className="w-10/12 mx-auto">
              <HeroSec></HeroSec>
           </div>
           {/* about me */}
           <div className="w-10/12 mx-auto mt-24">
               <About></About>
           </div>
           {/* skill*/}
           <div className="w-10/12 mx-auto mt-28 pb-12">
              <Skill></Skill>
           </div>
           {/* educations */}
           <div className="w-10/12 mx-auto mt-24 pb-12">
              <Educations></Educations>
           </div>
           {/* projects */}
           <div className="w-10/12 mx-auto mt-24 pb-12">
              <Projects></Projects>
           </div>
           {/* contact */}
           <div className="w-10/12 mx-auto mt-24 pb-12">
              <Contact></Contact>
           </div>
          
        </div>
    );
};

export default HomeLayout;