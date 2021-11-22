import React , { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'
import Addnote from './Addnote';
import Noteitem from './Noteitem';

export const Notes = () => {
    const context= useContext(noteContext);
    const {notes, getNote}= context;
    useEffect(() => {
        getNote();

    }, [])
    return (
        <>
        <Addnote />
        <div className="row my-3">
                <h1>Your Notes</h1>
                {notes.map((note)=>{
                   return <Noteitem key={note._id} note={note} />
                })}
            </div>
            </>
    )
}

export default Notes;