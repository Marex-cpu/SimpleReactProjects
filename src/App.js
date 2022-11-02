import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotesClone from "./pages/NotesClone";
import ReactFacts from "./pages/ReactFacts";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/react-facts' element={<ReactFacts />} />
      <Route path='/notes-clone' element={<NotesClone />} />
    </Routes>
  );
}

export default App;
