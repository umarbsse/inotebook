import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);



  //Get all notes

  const getNote = async (title, descripition, tag) => {
    //TODO API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0NzlkMTZlZWM5ZTMwNjViNDhlMzg2In0sImlhdCI6MTcxNTk3MjE2Nn0.NEDKQnzbmBLmFwRtPw6ARIKJxMerrdFUEBgpuNWet3s",
      },
    });
    const json = await response.json()
    console.log(json);
    setNotes(json)
  };



  //Add a note

  const addNote = async (title, descripition, tag) => {
    //console.log("add note called");
    //TODO API call
    
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0NzlkMTZlZWM5ZTMwNjViNDhlMzg2In0sImlhdCI6MTcxNTk3MjE2Nn0.NEDKQnzbmBLmFwRtPw6ARIKJxMerrdFUEBgpuNWet3s",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title, descripition, tag}), // body data type must match "Content-Type" header
    });

    const json = response.json();




    const note = {
      _id: "56648fdeeb91013e345436e89bea0e",
      user: "66479d16eec9e3065b48e386",
      title: title,
      descripition: descripition,
      tag: tag,
      date: "2024-05-18T19:13:50.445Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a note

  const deleteNote = (id) => {
    console.log("deleting the note with id " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note

  const editNote = async (id, title, descripition, tag) => {
    //API CALL

    const response = await fetch(`${host}/api/notes/updatenote/6648fd1fd48c86d6c6fd7985/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY0NzlkMTZlZWM5ZTMwNjViNDhlMzg2In0sImlhdCI6MTcxNTk3MjE2Nn0.NEDKQnzbmBLmFwRtPw6ARIKJxMerrdFUEBgpuNWet3s",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({title,descripition,tag}), // body data type must match "Content-Type" header


    });
    const json = response.json();

    //LOGIN TO EDIT IN CLIENT
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.descripition = descripition;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
