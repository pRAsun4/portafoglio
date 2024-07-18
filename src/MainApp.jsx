import { useCallback, useEffect, useState } from "react";
import Header from "./sections/Header";
import SideBar from "./sections/SideBar";
import ButtonBar from "./sections/ButtonBar";
import MobileBar from "./sections/MobileBar";
import { useSelector } from "react-redux";

export default function MainApp() {
    const [mood, setMood] = useState(() => {
        const savedMode = localStorage.getItem("mode");
        return savedMode === "true";
    });
    const toggleDark = useSelector((state) => state.toggleMode.activeDark);

    

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
            <main className=" sm:mt-10 mt-5 w-full h-full items-start wrapper-main grid grid-cols-12 container relative border ">
                <SideBar />
                <ButtonBar  />
            </main>
            <MobileBar />
        </div>
    );
}
