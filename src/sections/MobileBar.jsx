import { useState } from "react";
import { useSelector } from "react-redux";


function MobileBar() {
    const [hide, setHide] = useState(false);
    const activeSideBar = useSelector(state => state.sidebar?.activeSideBar);
    console.log(activeSideBar, 'mobilebar component');

    const handleHide = () => {
        setHide(true);
    }


    return (
        <div className={` ${activeSideBar ? 'show-mobile' : 'hide-mobile'} mobile-bar w-[5rem] h-[15rem] absolute    bg-slate-300 border `}>
            <button className="button" onClick={handleHide}>
                close
            </button>
        </div>
    )
}
export default MobileBar;