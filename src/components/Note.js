import React from "react";
import "../css/Note.css";
import { BsFillTrashFill } from "react-icons/bs";
import DeleteModal from "./DeleteModal";
import { useState } from "react";

function Note({ id, text, date, handleDeleteNote }) {
  const [showModal, setShowModal] = useState(false);

  function toggleModal() {
    setShowModal(!showModal);
  }

  return (
    <div className='note'>
      <span>{text}</span>
      <div className='noteFooter'>
        <small>{date}</small>
        <BsFillTrashFill onClick={toggleModal} className='deleteIcon' />
      </div>
      {showModal && (
        <DeleteModal
          onClick={() => handleDeleteNote(id)}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
}

export default Note;
