import React from "react";
import "../css/NavReactFacts.css";

function NavReactFacts(props) {
  console.log(props);
  return (
    <nav className={props.darkMode ? "nav light" : "nav dark"}>
      <div className='leftNav'>
        <img
          src='images/logo192.png'
          width={50}
          style={{ marginRight: "1rem" }}
        />
        <h3 className='navLogoText'>ReactFacts</h3>
      </div>
      <div className='rightNavToggler'>
        <p className='toggleLightText'>Light</p>
        <div className='toggle' onClick={props.toggleDarkMode}>
          <div className='toggleCricle'></div>
        </div>
        <p className='toggleDarkText'>Dark</p>
      </div>
    </nav>
  );
}

export default NavReactFacts;
