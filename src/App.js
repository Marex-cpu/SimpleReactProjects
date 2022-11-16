import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotesClone from "./pages/NotesClone";
import QuizzApp from "./pages/QuizzApp";
import ReactFacts from "./pages/ReactFacts";
import TenziesApp from "./pages/TenziesApp";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/react-facts' element={<ReactFacts />} />
      <Route path='/notes-clone' element={<NotesClone />} />
      <Route path='/tenzies-game' element={<TenziesApp />} />
      <Route path='/quizzical-app' element={<QuizzApp />}></Route>
    </Routes>
  );
}

export default App;
