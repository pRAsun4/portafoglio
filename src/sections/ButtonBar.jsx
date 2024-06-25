import React from "react";
import buttonData from "../js/ButtonData";
import ButtonDetails from "../components/ButtonDetails";

function ButtonBar() {
  return (
    <div className=" w-full flex flex-col md:pl-[1.25rem] md:col-span-8 border ">
      <div className="button-wrapper md:max-w-[31.875rem] max-w-full  w-full h-auto md:gap-x-[2.5rem] flex items-center justify-between md:relative absolute bottom-0 right-0 self-end py-[10px] px-8 rounded-[1.25rem] border ">
        {buttonData.map((btn, index) => (
          <ButtonDetails
            key={index}
            buttonLogo={btn.buttonLogo}
            buttonText={btn.buttonText}
            />
        ))}
      </div>
    </div>
  );
}

export default ButtonBar;
