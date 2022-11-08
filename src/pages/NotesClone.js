import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import NotesList from "../components/NotesList";
import "../css/NotesClone.css";
import Search from "../components/Search";
import HeaderNotesClone from "../components/HeaderNotesClone";

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

  const [searchText, setSearchText] = useState("");

  //save changes - addNewNote - deleteNote

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

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

  function deleteNote(id) {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  }

  return (
    <div className='notesContainer'>
      <HeaderNotesClone />
      <Search handleSearchNote={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default NotesClone;
