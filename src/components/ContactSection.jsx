import React from "react";
import { useSelector } from "react-redux";

function ContactSection() {
  const toggleDark = useSelector((state) => state.toggleMode.activeDark);

  return (
    <div
      className={`about-sections w-full h-auto flex flex-col justify-start 
          ${
            toggleDark ? "bg-[#2e2e2e]" : "bg-white"
          } py-[2.25rem] lg:px-[3rem] sm:px-[2rem] px-5 rounded-[1.25rem] gap-y-[1rem]`}
    >
      <div className="header relative">
        <h2
          className={`before-heade ${
            toggleDark ? "text-[#fff]" : "text-[#0B0909]"
          } text-left xl:text-[2.5rem] sm:text-[1.5rem] text-[1.2rem] font-medium relative flex items-center`}
        >
          Contact
          <span className="header-line lg:max-w-[15.625rem] md:max-w-[12rem] sm:max-w-[10rem] max-w-[8rem] w-full h-[3px]  lg:ml-8 sm:ml-5 ml-3"></span>
        </h2>
        
      </div>
      <div className="box-section flex flex-col items-start sm:gap-y-[1.75rem] gap-y-[1rem]">
        
      </div>
    </div>
  );
}

export default ContactSection;
