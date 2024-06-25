import React from "react";
import { useSelector } from "react-redux";

function TempSection() {
  const activeSection = useSelector((state) => state.section.activeSection);
  return (
    <div>
      {activeSection === 1 && <div className="w-full h-16 bg-slate-200">Content of Section 1</div>}
      {activeSection === 2 && <div className="w-full h-16 bg-slate-200">Content of Section 2</div>}
      {activeSection === 3 && <div className="w-full h-16 bg-slate-200">Content of Section 3</div>}
      {activeSection === 4 && <div className="w-full h-16 bg-slate-200">Content of Section 4</div>}
    </div>
  );
}

export default TempSection;
