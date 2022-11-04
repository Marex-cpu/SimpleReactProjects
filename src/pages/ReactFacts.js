import React, { useEffect } from "react";
import MainReactFacts from "../components/MainReactFacts";
import NavReactFacts from "../components/NavReactFacts";
import "../css/ReactFacts.css";

function ReactFacts() {
  const currentThemeColor = localStorage.getItem("nav");
  const [darkMode, setDarkMode] = React.useState(
    currentThemeColor === "dark" ? true : false
  );

  // useEffect(() => {
  //   //localStorage check
  //   const currentThemeColor = localStorage.getItem("nav");
  //   if (currentThemeColor === "dark") {
  //     setDarkMode(true);
  //   } else {
  //     setDarkMode(false);
  //   }
  // }, []);

  function toggleDarkMode() {
    if (darkMode) {
      localStorage.setItem("nav", "light");
      setDarkMode(false);
    } else {
      localStorage.setItem("nav", "dark");
      setDarkMode(true);
    }
    // setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className='container'>
      <NavReactFacts darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MainReactFacts darkMode={darkMode} />
    </div>
  );
}

export default ReactFacts;
