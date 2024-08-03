import React from "react";
import buttonData from "../js/ButtonData";
import ButtonDetails from "../components/ButtonDetails";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "../store/slices/sectionSlice";
import AboutSection from "../components/AboutSection";
import ResumeSection from "../components/ResumeSection";
import ContactSection from "../components/ContactSection";
import SectionButtons from "../components/SectionButtons";
import PortfolioSection from "../components/PortfolioSection";

function ButtonBar() {
  const dispatch = useDispatch();
  const activeSection = useSelector((state) => state.section.activeSection);

  const renderSection = () => {
    switch (activeSection) {
      case 1:
        return <AboutSection />;
      case 2:
        return <ResumeSection />;
      case 3:
        return <PortfolioSection />;
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
      <SectionButtons className="  "  handleButtonClick={handleButtonClick} />
      {/* <SectionButtons  className=" md:flex hidden " handleButtonClick={handleButtonClick} /> */}
      <div className={` main-section md:mb-0 mb-[4.6875rem] `}>{renderSection()}</div>
    </div>
  );
}

export default ButtonBar;
