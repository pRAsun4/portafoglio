import React from "react";
import PropTypes from "prop-types";

function SmallCard({ mood, cardLogo, cardHeader, cardPara }) {
  return (
    <div className="small-cards lg:col-span-6 col-span-1 flex flex-col py-[0.625rem] px-[0.75rem] rounded-[0.625rem] gap-y-[0.625rem] ">
      <h3 className={`lg:text-[1.25rem] text-[1.125rem]   flex items-center relative`}>
        <span className="mr-3">{cardLogo}</span>
        {cardHeader}
      </h3>
      <p className={` sm:text-[0.875rem] text-[0.75rem] text-justify`}>{cardPara}</p>
    </div>
  );
}

SmallCard.propTypes = {
  cardLogo: PropTypes.element.isRequired,
  cardHeader: PropTypes.string.isRequired,
  cardPara: PropTypes.string.isRequired,
  mood: PropTypes.bool.isRequired,
};

export default SmallCard;
