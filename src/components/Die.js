import React from "react";

function Die({ value, isHeld, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className='die'
      style={{ background: isHeld ? "#59e391" : "#ffffff" }}
    >
      {[...Array(value)].map((el, index) => (
        <span key={index} className='dieDot'></span>
      ))}
      {/* {value} */}
    </div>
  );
}

export default Die;
