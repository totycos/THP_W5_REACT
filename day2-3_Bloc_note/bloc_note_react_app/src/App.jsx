import { React, useState, useEffect } from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import NoteDisplay from "./components/NoteDisplay"
import MarkdownInput from "./components/MarkdownInput"
import './App.scss'

const App = () => {
    const [note, setNote] = useState([]);
    const [noteList, setNoteList] = useState([])
    const [selectNote, setSelectNote] = useState('')


    const handleNote = (value) => { // function to set SearchTerm
        setNote(value);
    };

    useEffect(() => {
        setNoteList(JSON.parse(localStorage.notesStorage))
    }, [note.id])


    const handleSelectNote = (id) => {
        setSelectNote(id)
    }

    useEffect(() => {
    }, [selectNote])


    return (
        <>
            <div className='leftSideContainer'>
                <NewNote />
                <Notes noteList={noteList} onSelectNote={handleSelectNote} />
            </div>
            
            <div className='rightSideContainer'>
                <NoteDisplay note={note} selecttNote={selectNote} />
                <MarkdownInput onNote={handleNote} selectNote={selectNote} />
            </div>
        </>
    )
}

export default App