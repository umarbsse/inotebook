import React,{ useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "e6648fd1fd42342348c86d6c6fd7979",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.022Z",
          "__v": 0
        },
        {
          "_id": "g6648fd1fd48c8234234452356d6c6fd797b",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.171Z",
          "__v": 0
        },
        {
          "_id": "76648fd1fd48c824523456d6c6fd797d",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.310Z",
          "__v": 0
        },
        {
          "_id": "26648fd1fd4823452346235c86d6c6fd797f",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.467Z",
          "__v": 0
        },
        {
          "_id": "46648fd1fd48c86drty6c6fd7981",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.609Z",
          "__v": 0
        },
        {
          "_id": "26648fd1fd48c86d345356c6fd7983",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.738Z",
          "__v": 0
        },
        {
          "_id": "56648fdeeb91013e345436e89bea0e",
          "user": "66479d16eec9e3065b48e386",
          "title": "My youtube video",
          "descripition": "My youtube video is lived on YT pl see that",
          "tag": "personal",
          "date": "2024-05-18T19:13:50.445Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)


    //Add a note

    const addNote = (title, descripition, tag)=>{
      //console.log("add note called");
      //TODO API call
    const  note = 
      {
        "_id": "56648fdeeb91013e345436e89bea0e",
        "user": "66479d16eec9e3065b48e386",
        "title": title,
        "descripition": descripition,
        "tag": tag,
        "date": "2024-05-18T19:13:50.445Z",
        "__v": 0
      };
      setNotes(notes.concat(note))
    }

    //Delete a note

    const deleteNote = (id)=>{
      console.log("deleting the note with id "+id);
      const newNotes = notes.filter((note)=>{return note._id!==id})
      setNotes(newNotes);
    }

    // Edit a Note

    const editNote = ()=>{

    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 