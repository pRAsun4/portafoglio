import React from "react";
import PropTypes from "prop-types";
import CodeIcon from "../assets/svg/CodeIcon";
import ButtonData from "../js/ButtonData";
import SmallCard from "./SmallCard";

function AboutSection({ mood }) {
  return (
    <div
      className={`about-sections w-full h-auto flex flex-col justify-start ${
        mood ? "bg-[#2e2e2e]" : ""
      } bg-white py-[1.25rem] px-[3rem] rounded-[1.25rem] gap-y-[1rem]`}
    >
      <div className="header relative">
        <h2
          className={` before-header ${
            mood ? "text-[#fff]" : "text-[#0B0909]"
          } text-left xl:text-[2.5rem] text-[1.5rem] font-medium relative`}
        >
          ABOUT ME
        </h2>
        <p className={`sm:text-[1rem]  font-medium`}>
          Hello there! Im thrilled to welcome you to my portfolio. I am a
          passionate and versatile full-stack developer with a keen interest in
          exploring the latest cutting-edge technologies. My journey in the
          world of web development has been nothing short of exhilarating, and I
          constantly strive to enhance my skills and embrace emerging trends in
          the industry.
        </p>
      </div>
      <div className="box-section flex flex-col items-start gap-y-[1.75rem]">
        <h2
          className={`  ${
            mood ? "text-[#fff]" : "text-[#0B0909]"
          } text-left xl:text-[2.5rem] text-[1.5rem] font-medium relative`}
        >
          What I do!
        </h2>
        <div className="about-grid-main grid grid-cols-12 lg:gap-x-[1.25rem] lg:gap-y-[1.25rem]  w-full h-full border">
          {ButtonData.map((data, index) => (
            <SmallCard
              key={index}
              cardIcon={data.cardIcon}
              cardHeader={data.cardHeader}
              cardPara={data.cardPara}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;

AboutSection.propTypes = {
  mood: PropTypes.bool.isRequired,
};
