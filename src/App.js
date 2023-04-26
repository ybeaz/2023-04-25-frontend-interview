import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainScreen } from "./ViewLayer/MainScreen";
import { FilmsDetails } from "./ViewLayer/FilmsDetails";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainScreen />} />
          <Route path="/:episode_id" element={<FilmsDetails />} />
          <Route path="*" element={<div>No Match</div>} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
