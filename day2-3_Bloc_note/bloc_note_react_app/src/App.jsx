import { React, useState, useEffect } from 'react'
import NewNote from './components/NewNote'
import Notes from './components/Notes'
import NoteDisplay from "./components/NoteDisplay"
import MarkdownInput from "./components/MarkdownInput"
import Footer from './components/Footer'
import './App.scss'

const App = () => {
    const [note, setNote] = useState([]);
    const [noteList, setNoteList] = useState([])
    const [selectNote, setSelectNote] = useState('')
    const [newNote, setNewNote] = useState(false)
    const [savedNote, setSavedNote] = useState(false)


    const handleNote = (value) => { // function to set SearchTerm
        setNote(value);
    };

    useEffect(() => {
        setNoteList(JSON.parse(localStorage.notesStorage))
    }, [savedNote])


    const handleSelectNote = (id) => {
        setSelectNote(id)
    }

    useEffect(() => {
    }, [selectNote])

    const handleNewNote = () => {
        setNewNote(!newNote)
    }

    const handleSavedNote = () => {
        setSavedNote(!savedNote)
    }


    return (
        <>
            <div className='leftSideContainer'>
                <NewNote onNewNote={handleNewNote} />
                <Notes noteList={noteList} onSelectNote={handleSelectNote} />
            </div>
            
            <div className='rightSideContainer'>
                <NoteDisplay note={note} selecttNote={selectNote} />
                <MarkdownInput onNote={handleNote} selectNote={selectNote} newNote={newNote} onSavedNote={handleSavedNote} />
                <Footer />
            </div>
        </>
    )
}

export default App