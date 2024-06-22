import React from 'react'
import PropTypes from 'prop-types';

function ContactLinks({ logoSrc, logoAlt, logoLable, logoText  }) {
    return (
        <a href={`tel:${logoText}`} className="contact-link w-full flex items-center justify-start gap-[0.625rem] font-semibold text-[14px] py-[1.4375rem]">
            <img src={logoSrc} alt={logoAlt} />
            <div className="flex flex-col">
                <p className="font-semibold text-[0.875rem] text-[#86837E]">{logoLable}</p>
                <span className="text-[#2e2e2e] leading-[120%] font-semibold">{logoText}</span>
            </div>
        </a>
    )
}

export default ContactLinks;
ContactLinks.propTypes = {
    logoSrc: PropTypes.string.isRequired,
    logoAlt: PropTypes.string.isRequired,
    logoLable: PropTypes.string.isRequired,
    logoText: PropTypes.string.isRequired
  };