import {React, useState, useEffect} from 'react'
import NoteDisplay from "./components/NoteDisplay";
import MarkdownInput from "./components/MarkdownInput";
import './App.scss'

const App = () => {
    const [note, setNote] = useState([]);

    const handleNote = (value) => { // function to set SearchTerm
        setNote(value);
        };

    useEffect(() => {
        console.log('on est dans App - note.id :', note.id)
    }, [note.id])

    return (
        <>
            <NoteDisplay note={note} />
            <MarkdownInput onNote={handleNote}/>
        </>
    )
}

export default App