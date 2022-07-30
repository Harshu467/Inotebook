import React, { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props) => {
  const notesinitail = [
    {
      "_id": "62dd5ca28eaa16286ec5e573",
      "user": "62d97c8b346dec69b33d0ddc",
      "title": "Path",
      "Description":"This is Descop",
      "tag": "EXCELLENCE",
      "date": "2022-07-24T14:52:18.647Z",
      "__v": 0
    }
  ]
  const [notes, setnotes] = useState(notesinitail)

  //Add A Note 
  const addNote = (title, Description, tag ) => {
    const note = {
      "_id": "62e00361b01fbdc214bc9c79",
      "user": "62d97c8b346dec69b33d0ddc",
      "title": title,
      "Description":Description,
      "tag": tag,
      "date": "2022-07-26T15:08:17.590Z",
      "__v": 0
    };
    setnotes(notes.concat(note));
  }
  //Delete A Note 
  const deleteNote = (id) => {
    console.log("Note is Deleted ",id);
    const Newnote = notes.filter((note)=>{return note._id!==id});
    setnotes(Newnote)
  }
  //Edit A Note 
  const editNote = (id,title, Description, tag) => {

  }
  return (
    <noteContext.Provider value={{ notes, addNote,deleteNote,editNote }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;