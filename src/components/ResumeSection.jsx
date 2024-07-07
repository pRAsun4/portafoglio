import React from 'react'
import EducationIcon from '../assets/svg/EducationIcon';

function ResumeSection({ mood }) {
  return (
    <div
      className={`resume-sections w-full h-auto flex flex-col justify-start 
        ${mood ? "bg-[#2e2e2e]" : "bg-white"
        } py-[2.25rem] lg:px-[3rem] sm:px-[2rem] px-5 rounded-[1.25rem] gap-y-[1rem]`}
    >
      <div className="header relative">
        <h2
          className={`before-heade ${mood ? " light-text " : " dark-text"
            } text-left xl:text-[2.5rem] sm:text-[1.5rem] text-[1.2rem] font-medium relative flex items-center`}
        >
          Resume
          <span className="header-line lg:max-w-[15.625rem] md:max-w-[12rem] sm:max-w-[10rem] max-w-[8rem] w-full h-[3px]  lg:ml-8 sm:ml-5 ml-3"></span>
        </h2>
      </div>

      <div className="box-section grid grid-cols-12 items-start xl:gap-x-[3.2rem] lg:gap-x-[2rem] md:gap-x-[1.5rem] ">
        <div className="left-box md:col-span-6 col-span-12 flex flex-col ">
          <div className="header-logo flex items-center ">
            <EducationIcon />
            <h3 className=" lg:text-[1.75rem] text-[1.25rem] font-medium ">
              Education
            </h3>
          </div>
        </div>
        <div className="right-box md:col-span-6 col-span-12 flex flex-col "></div>
        <div className="about-grid-main grid grid-cols-12 lg:gap-x-[1.25rem] lg:gap-y-[1.25rem] gap-y-5 w-full h-full ">

        </div>
      </div>
    </div>
  )
}

export default ResumeSection;