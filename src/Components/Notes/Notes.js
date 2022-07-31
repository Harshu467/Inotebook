import React, { useContext, useState, useEffect, useRef } from 'react'
import noteContext from '../../context/notes/noteContext'
import AddNote from '../AddNote/AddNote';
import NoteItem from '../NoteItem/NoteItem';
const Notes = () => {
    const context = useContext(noteContext);
    const { notes, getNotes, editNote } = context;
    useEffect(() => {
        getNotes()
    }, [])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setnote] = useState({id: "", etitle: "", eDescription: "", etag: ""})
    const updatenote = (currentnote) => {
        ref.current.click();
        setnote({ id: currentnote._id, etitle: currentnote.title, eDescription: currentnote.Description, etag: currentnote.tag })
    }
    const handleSubmit = (e) => {
        editNote(note.id, note.etitle, note.eDescription, note.etag)
        refClose.current.click();
        // AddNote(note.title , note.Description , note.tag);
    }
    const onChange = (e) => {
        setnote({ ...note, [e.target.name]: e.target.value });
    }
    return (
        <>
            <AddNote />
            <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" value={note.etitle} name='etitle' id="etitle" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Description">Description</label>
                                    <input type="text" className="form-control" value={note.eDescription} id="eDescription" name='eDescription' onChange={onChange} placeholder="Enter Description" minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag">Tag</label>
                                    <input type="text" className="form-control" value={note.etag} id="etag" name='etag' onChange={onChange} placeholder="Enter Tag" minLength={5} required />
                                </div>
                                <button style={{ marginTop: '3rem' }} type="submit" className="btn btn-primary" onClick={handleSubmit} >Add Note</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.eDescription.length < 5} onClick={handleSubmit} type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-3">
                <h1>Your Notes</h1>
                <div className="container mx-2">
                    {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((note) => {
                    return <NoteItem updatenote={updatenote} key={note._id} note={note} />
                })
                }
            </div>
        </>
    )
}

export default Notes

