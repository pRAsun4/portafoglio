import { useCallback, useEffect, useState } from "react";
import Header from "./sections/Header";
import SideBar from "./sections/SideBar";
import ButtonBar from "./sections/ButtonBar";
import MobileBar from "./sections/MobileBar";
import { useDispatch, useSelector } from "react-redux";
import { setActiveSection } from "./store/slices/sectionSlice";
import SectionButtons from "./components/SectionButtons";

export default function MainApp() {
    const dispatch = useDispatch();
  

    const [showBar, setShowBar] = useState(true);
    const [mood, setMood] = useState(() => {
        const savedMode = localStorage.getItem("mode");
        return savedMode === "true";
    });
    const toggleDark = useSelector((state) => state.toggleMode.activeDark);

    const handleShow = () =>{
        setShowBar(!showBar);
    };
    const handleButtonClick = (index) => {
        dispatch(setActiveSection({ section: index + 1, buttonIndex: index }));
      };
    

    const toggleMood = useCallback(() => {
        setMood((prevMood) => {
            const newMode = !prevMood;
            localStorage.setItem("mode", newMode);
            return newMode;
        });
    }, []);
    useEffect(() => {
        const savedMode = localStorage.getItem("mode");
        if (savedMode !== null) {
            setMood(savedMode == "true");
        }
    }, []);

    return (
        <div
            className={` main-app w-full h-full relative ${toggleDark ? "dark-mode" : "light-mode"} `} >
            <Header  toggleMood={toggleMood} />
            <main className=" sm:mt-10 mt-5 w-full h-full items-start wrapper-main grid grid-cols-12 container relative  ">
                <SideBar />
                <ButtonBar  />
            </main>
            <MobileBar />
            {/* <button onClick={handleShow} className={` ${showBar? 'flex' : 'hidden'} z-20 w-8 h-8  items-center justify-center fixed right-6 bottom-6 border rounded-full`}>+</button> */}
            {/* <SectionButtons className={`${showBar ? " h-0 " : " h-auto"} !flex-col !right-4 bottom-4 !w-fit  !gap-y-6 !py-4 !px-6 `}  handleButtonClick={handleButtonClick} />  */}
        </div>
    );
}
