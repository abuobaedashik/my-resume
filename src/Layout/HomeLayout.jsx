import About from "../Component/About";
import Contact from "../Component/Contact";
import Educations from "../Component/Educations";
import Footer from "../Component/Footer";
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
           <div name="home" className="w-10/12 mx-auto">
              <HeroSec></HeroSec>
           </div>
           {/* about me */}
           <div   name="about" className="w-10/12 mx-auto mt-24">
               <About></About>
           </div>
           {/* skill*/}
           <div name="skill" className="w-10/12 mx-auto mt-28 pb-12">
              <Skill></Skill>
           </div>
           {/* educations */}
           <div name="education" className="w-10/12 mx-auto mt-24 pb-12">
              <Educations></Educations>
           </div>
           {/* projects */}
           <div name="projects" className="w-10/12 mx-auto mt-24 pb-12">
              <Projects></Projects>
           </div>
           {/* contact */}
           <div name="contact" className="w-10/12 mx-auto mt-24 pb-12">
              <Contact></Contact>
           </div>
           {/* contact */}
           <div className="w-full mx-auto mt-24 ">
              <Footer></Footer>
           </div>
          
        </div>
    );
};

export default HomeLayout;