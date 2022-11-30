import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Home.css";
import projectData from "../projectData";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";

function Home() {
  const [index, setIndex] = useState(0);
  const [readMore, setReadMore] = useState(false);

  const projects = projectData;

  // responsive
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  function goToPrevious() {
    const isFirstSlide = index === 0;
    const newIndex = isFirstSlide ? projects.length - 1 : index - 1;
    setIndex(newIndex);
  }

  function goToNext() {
    const isLastSlide = index === projects.length - 1;
    const newIndex = isLastSlide ? 0 : index + 1;
    setIndex(newIndex);
  }
  return (
    <div className='container'>
      <main className='projectsWrapper'>
        <header className='header'>
          <h1 className='heading'>
            Simple <span className='reactWord'>react</span> projects
          </h1>
          <img
            src='https://revelrylabs.wpenginepowered.com/wp-content/uploads/2019/05/react-native-UX-design.gif'
            alt='logo'
            className='logo'
          ></img>
        </header>
        {projects.map((project, projectIndex) => {
          const {
            id,
            projectName,
            projectInfo,
            projectLink,
            textLink,
            projectImg,
          } = project;

          let position = "project";
          if (projectIndex === index) {
            position = "project activeSlide";
          }

          return (
            <article className={position} key={id}>
              <section className='projectDetails'>
                <p className='sectionTitle'>Project name:</p>
                <p className='name'>{projectName}</p>
              </section>
              <section className='projectDetails'>
                <p className='sectionTitle'>Briefly about the project:</p>
                <p className='info'>
                  {!isTablet
                    ? projectInfo
                    : readMore
                    ? projectInfo
                    : `${projectInfo.substring(0, 100)}...`}
                  {isTablet && (
                    <button onClick={() => setReadMore(!readMore)}>
                      {readMore ? "^Show Less" : "Read More"}
                    </button>
                  )}
                </p>
              </section>
              <section className='projectDetails'>
                <p className='sectionTitle'>Link to the project:</p>
                <Link className='link' to={projectLink} target='_blank'>
                  {textLink}
                </Link>
              </section>
              <img className='projectImg' src={projectImg} alt={projectName} />
            </article>
          );
        })}
        <div className='buttonContainer'>
          <button className='prevBtn'>
            <SlArrowLeft onClick={goToPrevious} />
          </button>
          <button className='nextBtn'>
            <SlArrowRight onClick={goToNext} />
          </button>
        </div>
      </main>
      <footer className='footer'>Powered by Marko Petrovic</footer>
    </div>
  );
}

export default Home;
