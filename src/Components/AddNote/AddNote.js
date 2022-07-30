import React, { useContext, useState } from 'react'
import noteContext from '../../context/notes/noteContext';
const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote } = context;
    const [note,setnote] = useState({title : "", Description : "", tag:"Default"});
    const handleSubmit = (e) => {
        e.preventDefault();
        addNote(note.title , note.Description , note.tag);
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
                    <input type="text" className="form-control" name='title' id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="Description">Description</label>
                    <input type="text" className="form-control" id="Description" name='Description' onChange={onChange} placeholder="Enter Description" />
                </div>
                <button style={{ marginTop: '3rem' }} type="submit" className="btn btn-primary" onClick={handleSubmit} >Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
