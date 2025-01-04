import About from "../Component/About";
import HeroSec from "../Component/HeroSec";
import Navbar from "../Component/Navbar";
import Skill from "../Component/Skill";

const HomeLayout = () => {
    return (
        <div className="bg-[#111723]">
           <div className="pb-[84px]">
              <Navbar></Navbar>
           </div>
           {/* hero section */}
           <div className=" ">
              <HeroSec></HeroSec>
           </div>
           {/* about me */}
           <div className=" mt-12">
               <About></About>
           </div>
           {/* skill*/}
           <div className=" mt-12">
              <Skill></Skill>
           </div>
          
            
        </div>
    );
};

export default HomeLayout;