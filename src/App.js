import React from 'react';
import Landing from "./pages/Landing.js";
import Form from "./pages/Form.js";
import Dashboard from "./pages/Dashboard.js"
import Statistics from "./pages/Statistics.js";
import Achievements from './pages/Achievements.js';
import About from "./pages/About.js";
import {BrowserRouter, Routes, Router, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>  );
}

export default App;
