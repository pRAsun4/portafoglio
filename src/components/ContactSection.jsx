import React from "react";
import { useSelector } from "react-redux";
import EmailIcon from "../assets/svg/EmailIcon";
import PhoneIcon from "../assets/svg/PhoneIcon";

function ContactSection() {
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
          Contact
          <span className="header-line lg:max-w-[15.625rem] md:max-w-[12rem] sm:max-w-[10rem] max-w-[8rem] w-full h-[3px]  lg:ml-8 sm:ml-5 ml-3"></span>
        </h2>
      </div>
      <div className="box-section grid grid-cols-12 lg:gap-x-[1.6875rem] gap-x-4 lg:gap-y-8 gap-y-6 ">
        <div className=" lg:col-span-6 col-span-12 w-full h-full min-h-[9.375rem] flex flex-col px-[1.4rem] py-[1.6rem] gap-6 bg-[#FFEED9] rounded-[1.25rem] ">
          <div className="box-header flex items-start gap-2">
            <PhoneIcon />
            <h4 className=""> Phone:</h4>
          </div>
          <div className="numbers w-full flex flex-col pl-8 items-start">
            <h5 className="">+91 8100698184</h5>
            <h5 className="">+91 7908050089</h5>
          </div>
        </div>
        <div className="lg:col-span-6 col-span-12 w-full h-full min-h-[9.375rem] flex flex-col px-[1.4rem] py-[1.6rem] gap-6 bg-[#F2F7FC] rounded-[1.25rem] overflow-hidden text-ellipsis whitespace-nowrap">
          <div className="box-header flex items-start gap-2">
            <EmailIcon />
            <h4 className=""> Email:</h4>
          </div>
          <div className="numbers w-full flex flex-col xl:pl-8 pl:3 items-start ">
            <h5 className="overflow-hidden text-ellipsis whitespace-nowrap">prasun0403.pm@gmail.com</h5>
          </div>
        </div>
        <div className=" col-span-12  flex flex-col p-[1.875rem] bg-[#F8FBFB] rounded-[1.25rem]">
          <p className=" max-w-[35.625rem] leading-[2]">I am always open to discussing <strong> new projects, opportunities in tech world,
          partnerships</strong> and more so <strong>mentorship.</strong> </p>

        </div>
      </div>
    </div>
  );
}

export default ContactSection;
