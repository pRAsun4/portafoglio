import { Link } from "react-router-dom";
import Facebook from "../assets/facebook-icon.svg";
import Github from "../assets/github-icon.svg";
import Linkedln from "../assets/linkedln-icon.svg";
import Twitter from "../assets/twitter-icon.svg";
import Mobile from "../assets/mobile-icon.png";




export default function SideBar() {
  return (
    <div className=" w-full flex flex-col items-center justify-center md:col-span-4 h-dvh relative  ">
      <div className="img-box absolute top-0 w-[12.5rem] h-[12.5rem] rounded-[1.25rem] bg-purple-500 border "></div>
      <div className="side-content-box w-full h-full mt-[6.5rem] rounded-[1.25rem] pt-[7.125rem] bg-[#fff] border ">
        <div className="name-box w-full flex flex-col ">
          <h2 className="text-[#0B0909] md:text-[1.75rem] font-bold text-center ">
            Prasun Mondal
          </h2>
          <p className="text-[#0B090990] text-[1rem] text-center">
            Frontend Developer
          </p>
        </div>
        <div className="icon-box w-full flex items-center justify-center mt-3 gap-[0.5625rem]">
          <Link  to='#'  className="box flex items-center justify-center lg:w-[3.75rem] lg:h-[3.75rem] w-[2.75rem] h-[2.75rem] rounded-[0.5625rem] bg-[#F2F7FC] "> 
            <img src={Facebook} alt="facebook" className="" />
          </Link>
          <Link to='#'  className="box flex items-center justify-center lg:w-[3.75rem] lg:h-[3.75rem] w-[2.75rem] h-[2.75rem] rounded-[0.5625rem] bg-[#F2F7FC] "> 
            <img src={Linkedln} alt="linkedln" className="" />
          </Link>
          <Link to='#'  className="box flex items-center justify-center lg:w-[3.75rem] lg:h-[3.75rem] w-[2.75rem] h-[2.75rem] rounded-[0.5625rem] bg-[#F2F7FC] "> 
            <img src={Twitter} alt="twitter" className="" />
          </Link>
          <Link  to='#' className="box flex items-center justify-center lg:w-[3.75rem] lg:h-[3.75rem] w-[2.75rem] h-[2.75rem] rounded-[0.5625rem] bg-[#F2F7FC] "> 
            <img src={Github} alt="github" className="" />
          </Link>
        </div>
        <div className="details-box w-full lg:p-[1.5rem] px-5 gap-4   bg-[#fff] ">
            <div className="w-full flex flex-col py-[2.0625rem] px-[1.5rem]  rounded-[1.25rem] bg-[#F2F5F9] ">
                <a href='tel:8100698184' className="w-full flex items-start justify-center font-semibold text-[14px] ">
                    <img src={Mobile} alt="mobile logo" />
                    Phone<br/>
                    <span className="text-[#2e2e2e] leading-[120%] ">8100698184</span>
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}
