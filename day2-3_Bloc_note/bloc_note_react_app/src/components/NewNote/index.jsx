import React from 'react'
import './index.scss'

const NewNote = ({ onNewNote }) => {

  return (
    <p className='newNoteBtn' onClick={onNewNote}>New note</p>
  )
}

export default NewNote