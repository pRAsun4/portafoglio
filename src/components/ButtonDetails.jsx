import React from "react";
import PropTypes from "prop-types";

function ButtonDetails({ buttonLogo, buttonText, onClick, isActive }) {
  return (
    <button onClick={onClick}  className={`p-2 rounded ${isActive ? 'bg-blue-500 text-white' : ' text-black  '} max-w-[5rem] w-full h-[5rem] flex flex-col items-center justify-center rounded-[1.25rem] bg-slate-600 border`} >
      <img src={buttonLogo} alt={buttonText} />
      <p className="text-[0.75rem] font-semibold  ">{buttonText}</p>
    </button>
  );
}

ButtonDetails.propTypes = {
  buttonLogo: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default ButtonDetails;
