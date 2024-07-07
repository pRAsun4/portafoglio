import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SocialLinks({ toLink, imgSrc, imgAlt , className }) {
  return (
    <Link
      to={toLink}
      className={ ` link-icons ${className} ` }
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
  className: PropTypes.string.isRequired,
};
