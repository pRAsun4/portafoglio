import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SocialLinks({ toLink, imgSrc, imgAlt }) {
  return (
    <Link
      to={toLink}
      className="box flex items-center justify-center lg:w-[3.75rem] lg:h-[3.75rem] w-[2.75rem] h-[2.75rem] rounded-[0.5625rem] bg-[#F2F7FC]"
    >
      <img src={imgSrc} alt={imgAlt} className="" />
    </Link>
  );
}

export default SocialLinks;

SocialLinks.propTypes = {
  toLink: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};
