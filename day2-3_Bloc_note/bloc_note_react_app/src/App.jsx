import {React, useState, useEffect} from 'react'
import Notes from './components/Notes'
import NoteDisplay from "./components/NoteDisplay"
import MarkdownInput from "./components/MarkdownInput"
import './App.scss'

const App = () => {
    const [note, setNote] = useState([]);
    const [noteList, setNoteList] = useState([])

    const handleNote = (value) => { // function to set SearchTerm
        setNote(value);
        };

    useEffect(() => {
        setNoteList(JSON.parse(localStorage.notesStorage))
        //console.log('on est dans App - note.id :', note.id)
    }, [note.id])

    return (
        <>
            <Notes noteList={noteList}/>
            <div className='rightSideContainer'>
            <NoteDisplay note={note} />
            <MarkdownInput onNote={handleNote}/>
            </div>
        </>
    )
}

export default App