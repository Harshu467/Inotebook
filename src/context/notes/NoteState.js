import React, { useState } from "react";
import noteContext from "./noteContext";
const NoteState = (props) => {
  const host = 'http://localhost:5000'
  const notesinitail = []
  const [notes, setnotes] = useState(notesinitail)
  //Get All Notes ${host}/api/notes/fetchallnotes
  const getNotes = async() => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOTdjOGIzNDZkZWM2OWIzM2QwZGRjIn0sImlhdCI6MTY1ODY2MTExNH0.OcJzAyEWFna8MnxHit6NnZ6O-puXFnoH1iZxZlbSSqc'
      }
    });
    const json = await response.json();
    setnotes(json)
  }
  //Add A Note 
  const addNote = async(title, Description, tag ) => {
    const response = await fetch(`${host}/api/notes/addnotes`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOTdjOGIzNDZkZWM2OWIzM2QwZGRjIn0sImlhdCI6MTY1ODY2MTExNH0.OcJzAyEWFna8MnxHit6NnZ6O-puXFnoH1iZxZlbSSqc'
      },
      body: JSON.stringify({title, Description, tag})
    });
    const note = await response.json();
    setnotes(notes.concat(note))
    // const json= response.json();
}
  //Delete A Note 
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOTdjOGIzNDZkZWM2OWIzM2QwZGRjIn0sImlhdCI6MTY1ODY2MTExNH0.OcJzAyEWFna8MnxHit6NnZ6O-puXFnoH1iZxZlbSSqc'
      }
    });
    const json = await response.json();
    const Newnote = notes.filter((note)=>{return note._id!==id});
    setnotes(Newnote)
  }
  //Edit A Note 
  const editNote = async (id,title, Description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
        'auth-token' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJkOTdjOGIzNDZkZWM2OWIzM2QwZGRjIn0sImlhdCI6MTY1ODY2MTExNH0.OcJzAyEWFna8MnxHit6NnZ6O-puXFnoH1iZxZlbSSqc'
      },
      body:JSON.stringify({title,Description,tag})
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes))
    for(let index=0;index<newNotes.length;index++)
    {
      const element = newNotes[index];
      if(element._id===id)
      {
        newNotes[index].title=title;
        newNotes[index].tag=tag;
        newNotes[index].Description=Description;
        break;
      }
    }
    setnotes(newNotes);
  }
  return (
    <noteContext.Provider value={{ notes, addNote,deleteNote,editNote, getNotes,editNote }}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState;