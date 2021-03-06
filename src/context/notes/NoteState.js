import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const noteInitial = [];
  const [notes, setNotes] = useState(noteInitial)

  // Get a note
  const getNote = async() => {
    // API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NjhjZDUyMjVhOTMyZDllNTcwYWFiIn0sImlhdCI6MTYzNzI1NjcyMH0.Ce5aIzdMAdZU7YfCcgtDIQBQyCzcE-H7bXPlEJ1lsNw"
      }
    });
    const json = await response.json()
    setNotes(json)


  }

  // Add a note
  const addNote = async (title, description, tag) => {
    // API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NjhjZDUyMjVhOTMyZDllNTcwYWFiIn0sImlhdCI6MTYzNzI1NjcyMH0.Ce5aIzdMAdZU7YfCcgtDIQBQyCzcE-H7bXPlEJ1lsNw"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();
    const note = {
      "_id": "61975ca45c376041c77984df8",
      "user": "61968cd5225a932d9e570aab",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-11-19T08:13:24.107Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }
  // Delete a note
  const deleteNote = async (id) => {
     // API CALL
     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NjhjZDUyMjVhOTMyZDllNTcwYWFiIn0sImlhdCI6MTYzNzI1NjcyMH0.Ce5aIzdMAdZU7YfCcgtDIQBQyCzcE-H7bXPlEJ1lsNw"
      }
    });

    const json = await response.json();

    const newNote = notes.filter((note) => { return note._id !== id })
    setNotes(newNote);
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {

    // API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE5NjhjZDUyMjVhOTMyZDllNTcwYWFiIn0sImlhdCI6MTYzNzI1NjcyMH0.Ce5aIzdMAdZU7YfCcgtDIQBQyCzcE-H7bXPlEJ1lsNw"
      },
      body: JSON.stringify({title, description, tag})
    });

    const json = await response.json();
    // logic to edit in client
    let newNotes= JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes)

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , getNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;