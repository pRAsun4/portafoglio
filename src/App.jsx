import { useCallback, useState } from "react";
import "./App.css";
import Header from "./sections/Header";

function App() {
  const [mood, setMood] = useState('');

  const toggleMood = useCallback(() =>{
    setMood(prevMood => !prevMood)
  }, [])
  return (
    <>
      <div className={` main-app w-full h-full relative ${mood ? 'dark-mode' : 'light-mode'} `}>
        <Header mood={mood} toggleMood={toggleMood} />
      </div>
    </>
  );
}

export default App;
