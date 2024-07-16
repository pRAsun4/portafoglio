import React from "react";
import EducationIcon from "../assets/svg/EducationIcon";
import { useSelector } from "react-redux";
import ExperienceIcon from "../assets/svg/ExperienceIcon";
import BulletDetails from "../js/BulletData";

function ResumeSection({ mood }) {
  const activeSection = useSelector((state) => state.section.activeSection);
  console.log(activeSection, "resumeSection");

  return (
    <div
      className={`resume-sections ${
        activeSection ? "sec-anime" : "no-anime"
      } w-full h-auto flex flex-col justify-start 
        ${
          mood ? "dark-bg" : "light-bg"
        }  rounded-[1.25rem] overflow-hidden gap-y-[1rem]`}
    >
      <div className="header relative py-[2.25rem] lg:px-[3rem] sm:px-[2rem] px-5 ">
        <h2
          className={`before-heade ${
            mood ? " light-text " : " dark-text"
          } text-left xl:text-[2.5rem] sm:text-[1.5rem] text-[1.2rem] font-medium relative flex items-center`}
        >
          Resume
          <span className="header-line lg:max-w-[15.625rem] md:max-w-[12rem] sm:max-w-[10rem] max-w-[8rem] w-full h-[3px]  lg:ml-8 sm:ml-5 ml-3"></span>
        </h2>
      </div>

      <div className="box-section grid grid-cols-12 items-start gap-y-6 xl:gap-x-[3.2rem] lg:gap-x-[2rem] md:gap-x-[1.5rem]   pb-[2.25rem] lg:px-[3rem] sm:px-[2rem] px-5">
        <div className="left-box md:col-span-6 col-span-12 flex flex-col gap-y-[1.25rem]">
          <div className="header-logo flex items-center ">
            <EducationIcon />
            <h3
              className={` ${
                mood ? "light-text" : "dark-text"
              } lg:text-[1.75rem] text-[1.25rem] font-medium  ml-2`}
            >
              Education
            </h3>
          </div>
          <div className="resume-box p-4 flex flex-col justify-start items-start gap-y-2 rounded-lg border ">
            <p className={` text-[0.8125rem] text-[#A89479] font-normal `}>
              2022-2023
            </p>
            <h4 className={` text-[0.875rem] text-[#000] font-semibold `}>
              Full stack Web Development
            </h4>
            <p className={` text-[0.8125rem] text-[#000] font-medium `}>
              Ekeeda school of data science
            </p>
          </div>

          <div className="resume-box p-4 flex flex-col justify-start items-start gap-y-2 rounded-lg border ">
            <p className={` text-[0.8125rem] text-[#A89479] font-normal `}>
              2016-2020
            </p>
            <h4 className={` text-[0.875rem] text-[#000] font-semibold `}>
              Electrical Engineering (B.tech)
            </h4>
            <p className={` text-[0.8125rem] text-[#000] font-medium `}>
              Calcutta Institute of Technology
            </p>
          </div>
        </div>

        <div className="right-box md:col-span-6 col-span-12 flex flex-col gap-y-[1.25rem]">
          <div className="header-logo flex items-center ">
            <ExperienceIcon />
            <h3
              className={` ${
                mood ? "light-text" : "dark-text"
              } lg:text-[1.75rem] text-[1.25rem] font-medium  ml-2`}
            >
              Experience
            </h3>
          </div>
          <div className="resume-box p-4 flex flex-col justify-start items-start gap-y-2 rounded-lg border ">
            <p className={` text-[0.8125rem] text-[#A89479] font-normal `}>
              2023-2024
            </p>
            <h4 className={` text-[0.875rem] text-[#000] font-semibold `}>
              Front end Developer
            </h4>
            <p className={` text-[0.8125rem] text-[#000] font-medium `}>
              Quadrant informatics pvt.ltd
            </p>
          </div>

          <div className="resume-box p-4 flex flex-col justify-start items-start gap-y-2 rounded-lg border ">
            <p className={` text-[0.8125rem] text-[#A89479] font-normal `}>
              2020-2022
            </p>
            <h4 className={` text-[0.875rem] text-[#000] font-semibold `}>
              Electrical Officer
            </h4>
            <p className={` text-[0.8125rem] text-[#000] font-medium `}>
              AMN Life Science pvt. Ltd
            </p>
          </div>
        </div>
      </div>
      <div
        className={`about-skills-grid ${
          mood ? "dark-bg" : "bg-[#E1E8EF]"
        } grid grid-cols-12 items-start gap-y-6 xl:gap-x-[3.2rem] lg:gap-x-[1rem] md:gap-x-[1.5rem] w-full h-full   py-[2.25rem] lg:px-[3rem] sm:px-[2rem] px-5`}
      >
        <div className="left-box  flex flex-col gap-y-[1.25rem]">
          <div className="header-logo flex items-center ">
            <h3
              className={` ${
                mood ? "light-text" : "dark-text"
              } lg:text-[1.75rem] text-[1.25rem] font-medium `}
            >
              Work Skills
            </h3>
          </div>
          <div className="bullet-box flex flex-wrap gap-x-[1.875rem] gap-y-[1.25rem] ">
            {BulletDetails.map((blt, index) => (
              <span
                key={index}
                className=" min-w-[3.75rem] h-[2.1875rem] flex items-center justify-center rounded-[.5rem] bg-[#E1E8EF] py-[5px] px-[8px] "
              >
                {blt.softS}
              </span>
            ))}
          </div>
        </div>

        <div className="right-box  flex flex-col gap-y-[1.25rem]">
          <div className="header-logo flex items-center ">
            <h3
              className={` ${
                mood ? "light-text" : "dark-text"
              } lg:text-[1.75rem] text-[1.25rem] font-medium  ml-2`}
            >
              Soft Skills
            </h3>
          </div>
          <div className="bullet-box flex flex-wrap gap-x-[1.875rem] gap-y-[1.25rem] ">
            {BulletDetails.slice(0, 5).map((blt, index) => (
              <span
                key={index}
                className=" min-w-[3.75rem] h-[2.1875rem] flex items-center justify-center rounded-[.5rem] bg-[#E1E8EF] py-[5px] px-[8px] "
              >
                {blt.workS}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeSection;
