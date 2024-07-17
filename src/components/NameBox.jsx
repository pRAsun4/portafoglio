import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';

export default function NameBox({ className }) {
    const toggleDark = useSelector((state) => state.toggleMode.activeDark);

    return (
        <div className="name-box w-full flex flex-col  p-4">
            <h2 className={` ${toggleDark ? 'text-[#fff]' : 'text-[#0B0909]'} ${className} font-bold text-center  `}>
                Prasun Mondal
            </h2>
            <p className={`${toggleDark ? 'text-[#fff]' : 'text-[#0B0909]'} text-[1rem] text-center `}>
                Frontend Developer
            </p>
        </div>
    )
}

NameBox.propTypes = {
    className: PropTypes.string,
}