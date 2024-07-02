import React from "react";
import buttonData from "../js/ButtonData";
import ButtonDetails from "../components/ButtonDetails";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../store/slices/sectionSlice";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";

function ButtonBar() {
  const dispatch = useDispatch();
  const activeButton = useSelector((state) => state.section.activeButton);
  const activeSection = useSelector((state) => state.section.activeSection);

  const renderSection = () => {
    console.log("Rendering section:", activeSection); // Debugging log
    switch (activeSection) {
      case 1:
        return <AboutSection />;
      case 2:
        return <ResumeSection />;
      default:
        return <AboutSection />;
    }
  };

  const handleButtonClick = (index, section) => {
    console.log("Button clicked, index:", index); // Debugging log
    console.log("Button clicked, section:", section); // Debugging log
    dispatch(setActiveSection({ section: index + 1, buttonIndex: index }));
  };

  return (
    <div className="w-full flex flex-col md:pl-[1.25rem] md:col-span-8 border">
      <div className="button-wrapper mb-3 md:max-w-[31.875rem] max-w-full w-full h-auto md:gap-x-[2.5rem] flex items-center justify-between md:relative absolute bottom-0 right-0 self-end py-[10px] px-8 rounded-[1.25rem] border">
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
      <div className="main-section">{renderSection()}</div>
    </div>
  );
}

export default ButtonBar;
