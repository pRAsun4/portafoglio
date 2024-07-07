import Resume from "/updated-resume.pdf";
import Download from '../assets/download-icon.png'
import PropTypes from 'prop-types'

export default function DownloadBtn({ className}) {
    return (
        <div className="w-full flex items-center justify-center">
            <a href={Resume} download="updated-resume.pdf" className={` ${className} `}>
                <img src={Download} alt="download icon" />
                <p className="text-[#fff] max-w-full lg:text-[0.875rem] text-[0.8125rem]  "> Download resume</p>
            </a>
        </div>
    )
}

DownloadBtn.propTypes = {
    className: PropTypes.string.isRequired,
}