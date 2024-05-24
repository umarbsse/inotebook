import React, { useState, useContext } from 'react'
import noteContext from "../context/notes/noteContext";

export default function AddNote(props) {
    const context = useContext(noteContext);
    const {  addNote } = context;
    
    const [note, setNote] = useState({title:"",descripition:"",tag:""})

    
    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.descripition, note.tag)
        props.showAlert("Added successfully","success")
    }


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
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onChange} />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}
