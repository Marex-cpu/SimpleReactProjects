import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ReactFacts from "./pages/ReactFacts";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/react-facts' element={<ReactFacts />} />
    </Routes>
  );
}

export default App;
