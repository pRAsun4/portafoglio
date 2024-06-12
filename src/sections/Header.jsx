// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import Name from "../assets/name.png";
import WhiteName from "../assets/name-white.png";
import Moon from "../assets/half-moon.svg";
import Sun from "../assets/sun-icon.svg";

function Header({ mood, toggleMood }) {
  return (
    <>
      <header className="w-full h-auto py-5">
        <nav className="container flex items-center justify-between">
          <div className="name-box">
            <img src={ mood? WhiteName : Name } alt={ mood? 'white name' : 'name' } className="w-auto" />
          </div>
          <button
            onClick={toggleMood}
            className={`dark-button  w-[3.5rem] h-[3.5rem] rounded-full bg-[#EBF2FA] flex items-center justify-center 
                ${mood ? "active-dark" : " "} `}
          >
            <img src={ mood ? Sun : Moon} alt={ mood? 'sun' : 'half moon' } />
          </button>
        </nav>
      </header>  
    </>
  );
}
Header.propTypes = {
  mood: PropTypes.bool.isRequired,
  toggleMood: PropTypes.func.isRequired,
};

export default React.memo(Header);
