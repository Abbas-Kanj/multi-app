import "./styles/utilities.css";
import "./styles/colors.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Calculator from "./pages/Calculator";
import StickyNotes from "./pages/StickyNotes";


const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Weather" element={<Weather />} />
          <Route path="/Calculator" element={<Calculator initial={0}/>} />
          <Route path="/StickyNotes" element={<StickyNotes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
