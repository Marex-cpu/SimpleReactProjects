import React from "react";
import "../css/Main.css";
import Project from "./Project";

function Main() {
  return (
    <div className='wrapper'>
      <div className='contentBorder'>
        <Project />
        <div className='line'></div>
      </div>
    </div>
  );
}

export default Main;
