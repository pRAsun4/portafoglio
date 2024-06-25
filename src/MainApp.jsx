import { useCallback, useEffect, useState } from "react";
import Header from "./sections/Header";
import SideBar from "./sections/SideBar";
import ButtonBar from "./sections/ButtonBar";
import TempSection from "./sections/TempSection";

export default function MainApp() {
    const [mood, setMood] = useState(() => {
        const savedMode = localStorage.getItem("mode");
        return savedMode === "true";
    });

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
            className={` main-app w-full h-full relative ${mood ? "dark-mode" : "light-mode"
                } `}
        >
            <Header mood={mood} toggleMood={toggleMood} />
            <main className=" sm:mt-10 mt-5 w-full h-full wrapper-main grid grid-cols-12 container border ">
                <SideBar/>
                <ButtonBar/>
            </main>
        </div>
    );
}
