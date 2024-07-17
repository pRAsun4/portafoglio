// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import Name from "../assets/name.png";
import WhiteName from "../assets/name-white.png";
import Moon from "../assets/half-moon.svg";
import Sun from "../assets/sun-icon.svg";
import "../assets/css/Header.css";
import MenuBtn from "../components/MenuBtn";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDark } from "../store/slices/toggleMode";

function Header() {
  const dispatch = useDispatch();
  const toggleDark = useSelector((state) => state.toggleMode.activeDark);

  const toggleMood = () => {
    dispatch(setActiveDark(!toggleDark));
  };
  return (
    <>
      <header className="w-full h-auto py-5">
        <nav className="container flex items-center justify-between">
          <MenuBtn className="md:hidden ham-menu flex items-center justify-center ">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3334 30.5L6.66671 30.5M28.3334 20.5L6.66671 20.5M23.3334 10.5L6.66671 10.5"
                stroke={toggleDark ? "white" : "black"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </MenuBtn>
          <div className="name-box w-[7.25rem] h-auto sm:w-auto ">
            <img
              src={toggleDark ? WhiteName : Name}
              alt={toggleDark ? "white name" : "name"}
              className="w-auto"
            />
          </div>
          <button
            // onClick={toggleMood}
            onClick={() => toggleMood()}
            className={`dark-button  sm:w-[3.5rem] w-[2.5rem] sm:h-[3.5rem] h-[2.5rem] rounded-full bg-[#EBF2FA] flex items-center justify-center 
                ${toggleDark ? "active-dark" : " "} `}
          >
            <img src={toggleDark ? Sun : Moon} alt={toggleDark ? "sun" : "half moon"} />
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
