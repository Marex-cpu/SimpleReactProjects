import React from "react";
import { Link } from "react-router-dom";
import "../css/MainReactFacts.css";

function MainReactFacts(props) {
  return (
    <main className={props.darkMode ? "main" : "main dark"}>
      <h1 className='mainTitle'>Fun facts about React</h1>
      <ul className='mainFacts'>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <Link className='linkToHome' to='/'>
        Back to home page
      </Link>
      <img
        className='reactIcon'
        src='images/reactjs-icon 2.png'
        alt='react-logo'
      />
    </main>
  );
}

export default MainReactFacts;
