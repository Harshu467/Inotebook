import React, { useContext, useState } from 'react'
import noteContext from '../../context/notes/noteContext';
const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote } = context;
    const [note,setnote] = useState({title : "", Description : "", tag:""});
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title , note.Description , note.tag);
        setnote({title: "", Description: "", tag: ""})
    }
    const onChange = (e) => {
        setnote({...note, [e.target.name]:e.target.value});
    }
    return (
        <div className="container">
            <h1>Add Notes</h1>
            <form className='my-3'>
                <div className="mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" value={note.title} name='title' id="title" aria-describedby="emailHelp" placeholder="Enter Title" minLength={5} onChange={onChange} required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Description">Description</label>
                    <input type="text" className="form-control" value={note.Description} id="Description" name='Description' onChange={onChange} minLength={5} placeholder="Enter Description" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="tag">Tag</label>
                    <input type="text" className="form-control" value={note.tag} id="tag" name='tag' onChange={onChange} minLength={5} placeholder="Enter Tag" required/>
                </div>
                <button disabled={note.title.length<5 || note.Description.length<5} style={{ marginTop: '3rem' }} type="submit" className="btn btn-primary" onClick={handleSubmit} >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
