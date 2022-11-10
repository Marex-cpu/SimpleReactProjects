import React from "react";
import "../css/NotesList.css";
import AddNote from "./AddNote";
import Note from "./Note";

function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className='notesList'>
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
}

export default NotesList;
