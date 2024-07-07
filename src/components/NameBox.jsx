import PropTypes from 'prop-types'

export default function NameBox({ className }) {
    return (
        <div className="name-box w-full flex flex-col  p-4">
            <h2 className={` text-[#0B0909] ${className} font-bold text-center  `}>
                Prasun Mondal
            </h2>
            <p className="text-[#0B090990] text-[1rem] text-center">
                Frontend Developer
            </p>
        </div>
    )
}

NameBox.propTypes = {
    className: PropTypes.string,
}