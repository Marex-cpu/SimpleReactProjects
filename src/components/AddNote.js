import React, { useState } from "react";
import "../css/AddNote.css";

function AddNote({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const maxNumOfChars = 200;

  function handleChange(e) {
    if (maxNumOfChars - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  }

  function handleSaveClick() {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
  }

  // function countCharacters() {

  // }

  return (
    <div className='note new'>
      <textarea
        cols='10'
        rows='8'
        placeholder='Type to add a note...'
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className='noteFooter'>
        <small
          style={{
            color: maxNumOfChars - noteText.length <= 10 ? "red" : "black",
          }}
        >
          {maxNumOfChars - noteText.length} Remaining
        </small>
        <button className='saveBtn' onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNote;
