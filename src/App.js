import React from 'react';
import Landing from "./pages/Landing";
import Form from "./pages/Form.js";
import Dashboard from "./pages/Dashboard"
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>  );
}

export default App;
