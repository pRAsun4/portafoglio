import React from "react";
import Home from "../assets/home-icon.svg"

function ButtonBar() {
  return (
    <div className=" w-full flex flex-col md:pl-[1.25rem] md:col-span-8 border ">
      <div className="button-wrapper md:max-w-[31.875rem] w-full h-auto md:gap-x-[2.5rem] flex items-center justify-between md:relative self-end py-[10px] px-8 rounded-[1.25rem] border ">
        <button className=" max-w-[5rem] w-full h-[5rem]   flex flex-col items-center justify-center rounded-[1.25rem]  border">
            <img src={Home} alt="" />
            <p className=" ">Home</p>
        </button>
        <button className=" max-w-[5rem] w-full h-[5rem]   flex items-center justify-center rounded-[1.25rem] ">1</button>
        <button className=" max-w-[5rem] w-full h-[5rem]   flex items-center justify-center rounded-[1.25rem] ">1</button>
        <button className=" max-w-[5rem] w-full h-[5rem]   flex items-center justify-center rounded-[1.25rem] ">1</button>
      </div>
    </div>
  );
}

export default ButtonBar;
