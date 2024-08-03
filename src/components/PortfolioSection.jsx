import { useSelector } from "react-redux";
import images from "../assets/left-img-1.jpg";
import images1 from "../assets/blog-img.jpg";
import workData from "../js/workData";
import { Link } from "react-router-dom";

export default function PortfolioSection() {
  const toggleDark = useSelector((state) => state.toggleMode.activeDark);



  return (
    <div
      className={` work-main flex flex-col w-full h-auto ${
        toggleDark ? "bg-[#2e2e2e]" : "bg-white"
      }  py-[2.25rem] lg:px-[3rem] sm:px-[2rem] px-5 rounded-[1.25rem] gap-y-[1rem] `}
    >
      <div className="header relative">
        <h2
          className={`before-heade ${
            toggleDark ? "text-[#fff]" : "text-[#0B0909]"
          } text-left xl:text-[2.5rem] sm:text-[1.5rem] text-[1.2rem] font-medium relative flex items-center`}
        >
          Portfolio
          <span className="header-line lg:max-w-[15.625rem] md:max-w-[12rem] sm:max-w-[10rem] max-w-[8rem] w-full h-[3px]  lg:ml-8 sm:ml-5 ml-3"></span>
        </h2>
      </div>
      {/* FILTERS TO BE ADDED HERE */}
      <div
        className={` project-div w-full h-auto grid grid-cols-12 lg:gap-x-6 gap-x-0 lg:gap-y-8 gap-y-6 `}
      >
        {workData.map((info, index) => (
          <Link
            to={info.liveLink}
            key={index}
            className={` project-cards lg:col-span-6 col-span-12 h-full  rounded-lg flex flex-col items-start p-[0.5rem] gap-2 overflow-hidden border `}
          >
            <img
              src={info.coverImg}
              alt={info.imgAlt}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="">{info.imgTitle}</p>
            <h4 className="">{info.header}</h4>
          </Link>
        ))}
      </div>
    </div>
  );
}
