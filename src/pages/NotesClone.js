import React, { useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "../components/NotesList";
import "../css/NotesClone.css";

function NotesClone() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Hello! This is our first note!",
      date: "03/04/2022",
    },
    {
      id: nanoid(),
      text: "Hello! This is our second note!",
      date: "06/22/2022",
    },
  ]);

  function deleteNote(id) {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  }

  const addNote = (text) => {
    const date = new Date();
    //on click save button we regenerate new Note
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <div className='notesContainer'>
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default NotesClone;
