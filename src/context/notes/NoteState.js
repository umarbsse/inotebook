import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "6648fd1fd48c86d6c6fd7979",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.022Z",
          "__v": 0
        },
        {
          "_id": "6648fd1fd48c86d6c6fd797b",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.171Z",
          "__v": 0
        },
        {
          "_id": "6648fd1fd48c86d6c6fd797d",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.310Z",
          "__v": 0
        },
        {
          "_id": "6648fd1fd48c86d6c6fd797f",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.467Z",
          "__v": 0
        },
        {
          "_id": "6648fd1fd48c86d6c6fd7981",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.609Z",
          "__v": 0
        },
        {
          "_id": "6648fd1fd48c86d6c6fd7983",
          "user": "66479d16eec9e3065b48e386",
          "title": "My Title 1",
          "descripition": "This is the new article for one of my bbok which is publied 1",
          "tag": "personal 1",
          "date": "2024-05-18T19:10:23.738Z",
          "__v": 0
        },
        {
          "_id": "6648fdeeb91013e6e89bea0e",
          "user": "66479d16eec9e3065b48e386",
          "title": "My youtube video",
          "descripition": "My youtube video is lived on YT pl see that",
          "tag": "personal",
          "date": "2024-05-18T19:13:50.445Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState; 