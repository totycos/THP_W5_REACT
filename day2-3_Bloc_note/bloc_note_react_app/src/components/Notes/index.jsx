import { React, useState, useEffect } from 'react'
import Note from '../Note'
import './index.scss'

const Notes = ({ noteList, onSelectNote, savedNote }) => {
  const [notes, setNotes] = useState(noteList)

    useEffect(() => {
        setNotes(noteList)
    }, [noteList])
  

  return (
    <div className='noteContainer'>
        { noteList.length > 0 ? noteList.map((note) => (
            <Note key={note.id} note={note} onSelectNote={onSelectNote} />
        )) : <p className='noNote'>No notes yet</p> }
    </div>
  )
}

export default Notes