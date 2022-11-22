import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Project.css";
import { useMediaQuery } from "react-responsive";

function Project({ projectData, currentIndex }) {
  const [readMore, setReadMore] = useState(true);
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className='projectWrapper'>
      <p className='projectName'>
        Project name: <br />{" "}
        <span>{projectData[currentIndex].projectName}</span>{" "}
      </p>
      <p className='infoProject'>
        Briefly about the project: <br />{" "}
        <span>
          {!isTablet && projectData[currentIndex].projectInfo}
          {isTablet &&
            (readMore
              ? projectData[currentIndex].projectInfo
              : `${projectData[currentIndex].projectInfo.substring(
                  0,
                  100
                )}...`)}
          {isTablet && (
            <button onClick={() => setReadMore(!readMore)} className='btn'>
              {readMore ? "^Show Less" : "Read More"}
            </button>
          )}
        </span>
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
      <img
        className='imgProject'
        src={projectData[currentIndex].projectImg}
        alt='nesto'
      />
    </div>
  );
}

export default Project;
