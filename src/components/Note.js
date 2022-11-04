import React from "react";
import "../css/Note.css";
import { BsFillTrashFill } from "react-icons/bs";

function Note({ id, text, date }) {
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='noteFooter'>
        <small>{date}</small>
        <BsFillTrashFill className='deleteIcon' />
      </div>
    </div>
  );
}

export default Note;
