import PropTypes from "prop-types";

function ContactLinks({ logoSrc, logoAlt, logoLable, logoText, type, className }) {
  let href;

  switch (type) {
    case "phone":
      href = `tel:${logoText}`;
      break;
    case "mail":
    href = `mailto:${logoText}`;
      break;
    case "location":
      href = "#";
      break;
    default:
      href = "#";
  }

  return (
    <a
      href={href}
      className={` contact-links ${className} `}
    >
      <img src={logoSrc} alt={logoAlt} />
      <div className="flex flex-col overflow-hidden text-ellipsis whitespace-nowrap">
        <p className="font-semibold text-[0.875rem] text-[#86837E]">
          {logoLable}
        </p>
        <span className="text-[#2e2e2e] leading-[120%] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
          {logoText}
        </span>
      </div>
    </a>
  );
}

export default ContactLinks;
ContactLinks.propTypes = {
  logoSrc: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  logoLable: PropTypes.string.isRequired,
  logoText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};
