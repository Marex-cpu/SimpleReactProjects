import React from "react";
import "../css/DeleteModal.css";

function DeleteModal({ toggleModal, onClick }) {
  return (
    <div className='modalContainer'>
      <h2 className='question'>Are you sure you want to delete the note?</h2>
      <div className='buttons'>
        <button onClick={onClick} className='deleteNote'>
          Yes
        </button>
        <button onClick={toggleModal} className='closeModal'>
          No
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
