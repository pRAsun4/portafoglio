import React from 'react'
import { useSelector } from 'react-redux';
import AboutSection from '../components/AboutSection';
import ResumeSection from '../components/ResumeSection';

function MainSection() {

    const activeSection = useSelector((state) => state.section.activeSection);

    const renderSection = () => {
        switch (activeSection) {
            case 1:
                return <AboutSection />;
            case 2:
                return <ResumeSection />;
            
            default:
                return <AboutSection />;
        }
    };

  return (
    <div>
        {renderSection()}
    </div>
  )
}

export default MainSection;