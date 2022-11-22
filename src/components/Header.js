import React from "react";
import "../css/Header.css";

function Header() {
  return (
    <div className='header'>
      <h1 className='heading'>
        Simple <span className='reactWord'>react</span> projects
      </h1>
      <img
        src='https://revelrylabs.wpenginepowered.com/wp-content/uploads/2019/05/react-native-UX-design.gif'
        className='logo'
      ></img>
    </div>
  );
}

export default Header;
