import React from "react";
import "../css/Main.css";
import Project from "./Project";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import projectData from "../projectData";
import { useState } from "react";

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = projectData;

  function goToPrevious() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = currentIndex === projects.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  return (
    <main className='wrapper'>
      <div className='contentBorder'>
        <Project projectData={projects} currentIndex={currentIndex} />
        <div className='line'></div>
        <div className='containerButtons'>
          <button className='prevBtn' onClick={goToPrevious}>
            <SlArrowLeft />
          </button>
          <button className='nextBtn' onClick={goToNext}>
            <SlArrowRight />
          </button>
        </div>
      </div>
    </main>
  );
}

export default Main;
