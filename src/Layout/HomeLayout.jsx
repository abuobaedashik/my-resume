import About from "../Component/About";
import Educations from "../Component/Educations";
import HeroSec from "../Component/HeroSec";
import Navbar from "../Component/Navbar";
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
           <div className="w-10/12 mx-auto mt-12">
               <About></About>
           </div>
           {/* skill*/}
           <div className="w-10/12 mx-auto mt-12 pb-12">
              <Skill></Skill>
           </div>
           {/* educations */}
           <div className="w-10/12 mx-auto mt-12 pb-12">
              <Educations></Educations>
           </div>
          
        </div>
    );
};

export default HomeLayout;