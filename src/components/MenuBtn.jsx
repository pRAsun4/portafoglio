import { useDispatch } from "react-redux"
import { toggleActiveSidebar } from "../store/slices/sidebarSlice";
import PropTypes from 'prop-types';



export default function MenuBtn({ onClick, children, className }) {
    const dispatch = useDispatch();
    const handleToggleSideBar = (sidebarName) => {
        dispatch(toggleActiveSidebar(sidebarName));
        if (onClick) {
            onClick();
        }
    };
    return (
        <>
            <button className={`Menu-btn ${className}`} onClick={() => handleToggleSideBar('hellow')}>
                {children}
            </button>
        </>
    )
}

MenuBtn.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
