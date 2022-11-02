import React from "react";
import "../css/Main.css";
import Project from "./Project";

function Main() {
  return (
    <main className='wrapper'>
      <div className='contentBorder'>
        <Project />
        <div className='line'></div>
      </div>
    </main>
  );
}

export default Main;
