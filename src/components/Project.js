import React from "react";
import { Link } from "react-router-dom";
import "../css/Project.css";
// import projectImage from "../images/project1.png";

function Project({ projectData, currentIndex }) {
  return (
    <div className='projectWrapper'>
      <h2 className='aboutProject'>About project</h2>
      <p className='projectName'>
        Project name: <br />{" "}
        <span>{projectData[currentIndex].projectName}</span>{" "}
      </p>
      <p className='infoProject'>
        Briefly about the project: <br />{" "}
        <span>{projectData[currentIndex].projectInfo}</span>
      </p>
      <p className='linkToProject'>
        Link to the project: <br />
        <Link
          className='linkBtn'
          to={projectData[currentIndex].projectLink}
          target='_blank'
        >
          {projectData[currentIndex].textLink}
        </Link>
      </p>
      {/* <img className='imgProject' src={projectImage} alt='' /> */}
      <img
        className='imgProject'
        src={projectData[currentIndex].projectImg}
        alt='nesto'
      />
    </div>
  );
}

export default Project;
