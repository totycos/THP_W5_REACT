import { React, useState, useEffect } from 'react'
import './index.scss'

const Note = ({ note, onSelectNote }) => {

  const handleSelectNote = () => {
    onSelectNote({id: note.id, title: note.title, text: note.text})
  }

  return (
    <div className='note' onClick={handleSelectNote}>
      <h4 className='note__title'>{note.title}</h4>
      <p className='note__text'>{note.text}</p>
    </div>
  )
}

export default Note