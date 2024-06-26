import React, { useContext, useEffect, useRef, useState } from "react";

import { useNavigate } from 'react-router-dom';


import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

export default function Notes(props) {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNote, editNote } = context;
  useEffect (()=>{
    if (localStorage.getItem('token')) {
      getNote() 
    }else{
      navigate("/login")
    }
    // eslint-disable-next-line
  },[])
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({id: "",etitle:"",edescripition:"",etag:""})

  const updateNote = (currentNote)=>{
    ref.current.click();
    //console.log(currentNote);
    setNote({id:currentNote._id, etitle:currentNote.title, edescripition:currentNote.descripition, etag:currentNote.tag});
  }

  
  const handleClick = (e)=>{
    //console.log("updating the note ", note)
    editNote(note.id, note.etitle, note.edescripition, note.etag)
    refClose.current.click();
    props.showAlert("Updated successfully","success")
}


const onChange = (e) =>{
    setNote({...note,[e.target.name]:e.target.value})
}
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            <form className='my-3'>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" value={note.etitle} name='etitle' onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="descripition" className="form-label">Descripition</label>
                <input type="text" className="form-control" id="edescripition" value={note.edescripition} name='edescripition' onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="tag" className="form-label">Tag</label>
                <input type="text" className="form-control" id="etag" name='etag' value={note.etag} onChange={onChange} />
              </div>
            </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((note) => {
          return <Noteitem key={note._id}  showAlert={props.showAlert}  updateNote={updateNote} note={note} />;
        })}
      </div>
    </>
  );
}
