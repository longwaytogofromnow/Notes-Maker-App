import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const noteInitial=[{
        "_id": "6196be419589b6c5ae53ee0f",
        "user": "61968cd5225a932d9e570aab",
        "title": "mytitle",
        "description": "Wake up early",
        "tag": "personal",
        "date": "2021-11-18T20:57:37.563Z",
        "__v": 0
      },
      {
        "_id": "61975ca45c37041c77984df8",
        "user": "61968cd5225a932d9e570aab",
        "title": "Title 2",
        "description": "do untill you die",
        "tag": "motivation",
        "date": "2021-11-19T08:13:24.107Z",
        "__v": 0
      },
      {
        "_id": "61975ca435c37041c77984df8",
        "user": "61968cd5225a932d9e570aab",
        "title": "Title 2",
        "description": "do untill you die",
        "tag": "motivation",
        "date": "2021-11-19T08:13:24.107Z",
        "__v": 0
      },{
        "_id": "61975ca45c370441c77984df8",
        "user": "61968cd5225a932d9e570aab",
        "title": "Title 2",
        "description": "do untill you die",
        "tag": "motivation",
        "date": "2021-11-19T08:13:24.107Z",
        "__v": 0
      },{
        "_id": "619755ca45c37041c77984df8",
        "user": "61968cd5225a932d9e570aab",
        "title": "Title 2",
        "description": "do untill you die",
        "tag": "motivation",
        "date": "2021-11-19T08:13:24.107Z",
        "__v": 0
      },{
        "_id": "61975ca45c376041c77984df8",
        "user": "61968cd5225a932d9e570aab",
        "title": "Title 2",
        "description": "do untill you die",
        "tag": "motivation",
        "date": "2021-11-19T08:13:24.107Z",
        "__v": 0
      }
    ]
      const [notes,setNotes]= useState(noteInitial)

      // Add a note
          const addNote=(title,description,tag)=>{
            const note={
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
      const deleteNote=(id)=>{
        const newNote= notes.filter ((note)=>{return note._id!==id})
           setNotes(newNote); 
      }

      // Edit a note
      const editNote=()=>{
            
      }

return(
    <NoteContext.Provider value={{notes,addNote,deleteNote,editNote}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;