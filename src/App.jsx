import "./App.css";
import MainApp from "./MainApp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
