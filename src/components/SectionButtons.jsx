import React from "react";
import PropTypes from "prop-types";
import ButtonData from "../js/ButtonData";
import ButtonDetails from "./ButtonDetails";
import { useSelector } from "react-redux";

function SectionButtons({ handleButtonClick, className }) {
  const activeButton = useSelector((state) => state.section.activeButton);

  return (
    <div
      className={` button-wrapper mb-3 md:max-w-[31.875rem] max-w-full w-full h-auto lg:gap-x-[2.5rem] sm:gap-x-[1.5rem] gap-0 flex items-center justify-between md:relative fixed bottom-0 right-0 self-end py-[10px] md:px-8 px-5 z-20  ${className} `}
    >
      {ButtonData.map((btn, index) => (
        <ButtonDetails
          key={index}
          buttonLogo={btn.buttonLogo}
          buttonText={btn.buttonText}
          onClick={() => handleButtonClick(index)}
          isActive={activeButton === index}
        />
      ))}
    </div>
  );
}

SectionButtons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SectionButtons;
