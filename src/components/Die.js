import React from "react";

function Die({ value, isHeld, handleClick }) {
  return (
    <div
      onClick={handleClick}
      className='die'
      style={{ background: isHeld ? "#59e391" : "#ffffff" }}
    >
      {value}
    </div>
  );
}

export default Die;
