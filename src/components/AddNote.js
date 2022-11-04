import React, { useState } from "react";
import "../css/AddNote.css";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");

  function handleChange(e) {
    setNoteText(e.target.value);
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  }

  return (
    <div className='note new'>
      <textarea
        cols='10'
        rows='8'
        placeholder='Type to add a note...'
        onChange={handleChange}
      ></textarea>
      <div className='noteFooter'>
        <small>200 Remaining</small>
        <button className='saveBtn' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
