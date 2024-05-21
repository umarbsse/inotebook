import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext";

export default function AddNote() {
    const context = useContext(noteContext);
    const {  addNote } = context;
    //console.log(addNote)
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.descripition, note.tag)
    }

    const [note, setNote] = useState({title:"",descripition:"",tag:""})

    const onChange = (e) =>{
        setNote({...note,[e.target.name]:e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name='title' onChange={onChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="descripition" className="form-label">Descripition</label>
            <input type="text" className="form-control" id="descripition" name='descripition' onChange={onChange} />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}
