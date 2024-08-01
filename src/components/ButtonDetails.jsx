import React from "react";
import PropTypes from "prop-types";

function ButtonDetails({ buttonLogo, buttonText, onClick, isActive }) {
  return (
    <button onClick={onClick}  className={`p-3  ${isActive ? 'btn-gradient' : ' text-black  '} md:max-w-[5rem]  max-w-[4rem] w-full     h-auto md:py-[1rem] lg:px-[1.3rem] md:px-[1rem] flex flex-col items-center justify-center md:rounded-[1.25rem] rounded-lg btn-normal `} >
      <span>
        {buttonLogo}
      </span>
      <p className="text-[0.75rem] font-semibold md:block hidden ">{buttonText}</p>
    </button>
  );
}

ButtonDetails.propTypes = {
  buttonLogo: PropTypes.element.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};
export default ButtonDetails;
