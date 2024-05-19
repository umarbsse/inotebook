import react from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const s1 = {
        "name":"harry",
        "class":"5b"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(() => {
            setState({
                
                "name":"Gurru",
                "class":"10-A"
            })
        }, 2000);
    }
    return (
        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;