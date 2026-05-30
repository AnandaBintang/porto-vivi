import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import bgArt from "../assets/figma/projects-bg-art.jpg";
import skulsikCover from "../assets/figma/project-skulsik-mockup.png";
import sehatinCover from "../assets/figma/project-sehatin-mockup.png";
import serenityCover from "../assets/figma/project-serenity-cover.png";
import waowHandsOnCover from "../assets/figma/project-waow-handson-cover.webp";
import waowHomeworkCover from "../assets/figma/project-waow-homework-cover.webp";
import portfolioCover from "../assets/figma/project-portfolio-cover.webp";

const projects = [
  {
    id: "skulsik",
    name: "SkulSik",
    subtitle: "AI-Powered School Finder App",
    cover: skulsikCover,
  },
  {
    id: "sehatin",
    name: "Sehatin",
    subtitle: "Mental & Physical Health Tracking App",
    cover: sehatinCover,
  },
  {
    id: "serenity",
    name: "Serenity",
    subtitle: "Mental Health UI Kit",
    cover: serenityCover,
  },
  {
    id: "waowHandsOn",
    name: "WAOW Hands-On",
    subtitle: "Mobile Banking UI - Frontend Slicing Practice",
    cover: waowHandsOnCover,
  },
  {
    id: "waowHomework",
    name: "WAOW Homework",
    subtitle: "Game News Website - Frontend Slicing Practice",
    cover: waowHomeworkCover,
  },
  {
    id: "portfolioVivi",
    name: "Personal Portfolio",
    subtitle: "UI/UX Portfolio Website",
    cover: portfolioCover,
  },
];

export default function ProjectsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative bg-[#fefefa]">
      {/* Painted background */}
      <div className="fixed inset-0 pointer-events-none animate-fade-in z-0">
        <img src={bgArt} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 py-6 lg:py-8 min-h-screen flex flex-col">
        {/* Navbar */}
        <div className="mb-8 lg:mb-12 w-fit animate-fade-in-right relative z-[100]">
          <Navbar />
        </div>

        {/* Folder Container */}
        <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center animate-fade-in-up pb-12">
          <div className="w-full relative group">
            
            {/* Folder Tab */}
            <div className="w-[140px] sm:w-[220px] h-[36px] sm:h-[48px] bg-[#fefefa]/50 backdrop-blur-md rounded-t-2xl sm:rounded-t-3xl border border-b-0 border-white/60 ml-6 sm:ml-12 relative z-10 shadow-[0_-4px_10px_rgba(0,0,0,0.03)]" />

            {/* Folder Body */}
            <div 
              onClick={() => !isOpen && setIsOpen(true)}
              className={`w-full bg-[#fefefa]/50 backdrop-blur-md rounded-[32px] sm:rounded-[48px] border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-colors duration-500 overflow-hidden flex flex-col ${
                isOpen ? 'cursor-default p-6 sm:p-10 lg:p-12' : 'cursor-pointer p-6 sm:p-10 lg:p-12 hover:bg-[#fefefa]/60'
              }`}
            >
              
              {/* Closed State UI (Single Project + Click Here overlay) */}
              <div 
                className={`grid transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-full ${
                  isOpen ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'
                }`}
              >
                <div className="overflow-hidden flex flex-col items-center justify-center relative w-full pt-2 pb-6 sm:pb-8">
                  <div className="w-[88%] sm:w-[85%] relative rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-xl transform -translate-y-2">
                     <img src={projects[0].cover} alt="Top Project" className="w-full h-auto object-cover" />
                     
                     {/* Click Here Text Overlay */}
                     <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] flex items-center justify-center transition-all hover:bg-primary/30 group-hover:bg-primary/10">
                       <div className="flex items-center gap-3 animate-pulse drop-shadow-xl transform group-hover:scale-105 transition-transform duration-300">
                         <span className="font-poppins font-bold text-white text-[28px] sm:text-[42px] tracking-wide">Click Here</span>
                         {/* SVG Cursor */}
                         <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white mt-3 sm:mt-6 -ml-2 filter drop-shadow-md" fill="white" stroke="black" strokeWidth="1" viewBox="0 0 24 24">
                            <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4.7z"/>
                         </svg>
                       </div>
                     </div>
                  </div>

                  {/* Inner Pocket Overlay (bottom translucent curve) */}
                  <div className="absolute bottom-2 sm:bottom-2 left-1/2 -translate-x-1/2 w-[70%] sm:w-[50%] h-[40px] sm:h-[60px] bg-[#cde1ff]/40 backdrop-blur-md rounded-t-[28px] rounded-b-[20px] border border-white/50 shadow-inner pointer-events-none" />
                </div>
              </div>

              {/* Opened State UI (List of projects) */}
              <div 
                className={`grid transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-full ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                }`}
              >
                 <div className="overflow-hidden flex flex-col gap-6 sm:gap-10">
                   {projects.map((proj) => (
                     <div 
                       key={proj.id}
                       onClick={(e) => {
                         e.stopPropagation();
                         navigate(`/projects/${proj.id}`);
                       }}
                       className="w-full group/card rounded-[24px] sm:rounded-[40px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer border-[3px] border-transparent hover:border-white/60 relative bg-white"
                     >
                       <img src={proj.cover} alt={proj.name} className="w-full h-auto object-cover group-hover/card:scale-[1.02] transition-transform duration-700" />
                       
                       <div className="absolute top-6 right-6 sm:top-8 sm:right-8 bg-white/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/50 shadow-sm transform translate-x-4 opacity-0 group-hover/card:translate-x-0 group-hover/card:opacity-100 transition-all duration-300">
                          <span className="font-poppins font-semibold text-white text-sm sm:text-base tracking-wide">View Project</span>
                       </div>
                     </div>
                   ))}
                   
                   {/* Close Folder Button */}
                   <button 
                     onClick={(e) => {
                       e.stopPropagation();
                       setIsOpen(false);
                     }}
                     className="mx-auto mt-4 mb-2 bg-white/60 hover:bg-white/90 backdrop-blur-md border border-white/60 text-primary font-poppins font-bold text-sm sm:text-base py-3.5 px-10 rounded-full shadow-sm hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300"
                   >
                     Close Folder
                   </button>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
