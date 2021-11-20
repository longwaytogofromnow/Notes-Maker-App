import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props)=>{
    const s1 = {
        "name":"Krishna Kumar",
        "class":"10 A1"
    }
    const [state, setState] = useState(s1)
    const update=()=>{
        setTimeout(() => {
            setState({
                "name":"Aman Kumar",
                "class":"10 b"
            })
            
        }, 1500);

    }

return(
    <NoteContext.Provider value={{state,update}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;