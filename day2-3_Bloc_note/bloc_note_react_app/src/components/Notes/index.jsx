import { React, useState, useEffect } from 'react'
import Note from '../Note'
import './index.scss'

const Notes = ({ noteList }) => {
  const [notes, setNotes] = useState(noteList)
  

    console.log('noteList in NoteList : ', noteList)
    if (noteList.length > 0) {
      console.log(noteList[0].title);
    }

    useEffect(() => {
        console.log('noteList in NoteList : ', noteList)
        setNotes(noteList)
    }, [noteList])

    useEffect(() => {

    }, [notes])

  return (
    <div className='noteContainer'>
        { noteList.length > 0 ? noteList.map((note) => (
            <Note key={note.id} note={note}/>
        )) : <p>No notes yet</p> }
    </div>
  )
}

export default Notes