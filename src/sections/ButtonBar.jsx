import React from "react";
import buttonData from "../js/ButtonData";
import ButtonDetails from "../components/ButtonDetails";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../store/slices/sectionSlice";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";

function ButtonBar({ mood }) {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.section.activeButton);
  const activeSection = useSelector((state) => state.section.activeSection);

  const renderSection = () => {
    switch (activeSection) {
      case 1:
        return <AboutSection />;
      case 2:
        return <ResumeSection />;
      case 3:
        return <ContactSection />;
      case 4:
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  const handleButtonClick = (index) => {
    dispatch(setActiveSection({ section: index + 1, buttonIndex: index }));
  };

  return (
    <div className="button-bar w-full flex flex-col md:pl-[1.25rem] md:col-span-8 ">
      <div className="button-wrapper mb-3 md:max-w-[31.875rem] max-w-full w-full h-auto lg:gap-x-[2.5rem] sm:gap-x-[1.5rem] gap-0 flex items-center justify-between md:relative fixed bottom-0 right-0 self-end py-[10px] px-8 rounded-[1.25rem] z-20 border">
        {buttonData.map((btn, index) => (
          <ButtonDetails
            key={index}
            buttonLogo={btn.buttonLogo}
            buttonText={btn.buttonText}
            onClick={() => handleButtonClick(index)}
            isActive={activeButton === index}
          />
        ))}
      </div>
      <div className={` main-section  `}>{renderSection()}</div>
    </div>
  );
}

export default ButtonBar;
