// AboutSection.jsx
import React from "react";
import PropTypes from "prop-types";
import SmallCard from "./SmallCard";
import BoxData from "../js/BoxData";
import { useSelector } from "react-redux";

function AboutSection() {
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
          ABOUT ME
          <span className="header-line lg:max-w-[15.625rem] md:max-w-[12rem] sm:max-w-[10rem] max-w-[8rem] w-full h-[3px]  lg:ml-8 sm:ml-5 ml-3"></span>
        </h2>
        <p className={`sm:text-[1rem] font-medium ${ toggleDark ? 'text-[#fff]' : 'text-[#0B0909]' }`}>
          Hello there! Im thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </div>
      <div className="box-section flex flex-col items-start sm:gap-y-[1.75rem] gap-y-[1rem]">
        <h2
          className={`${
            toggleDark ? "text-[#fff]" : "text-[#0B0909]"
          } text-left xl:text-[2.5rem] text-[1.5rem] font-medium relative`}
        >
          What I do!
        </h2>
        <div className="about-grid-main grid grid-cols-12 lg:gap-x-[1.25rem] lg:gap-y-[1.25rem] gap-y-5 w-full h-full ">
          {BoxData.map((data, index) => (
            <SmallCard
              key={index}
              cardLogo={data.cardLogo}
              cardHeader={data.cardHeader}
              cardPara={data.cardPara}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
}

AboutSection.propTypes = {
  mood: PropTypes.bool.isRequired,
};

export default AboutSection;
