import React from 'react'
import './index.scss'

const Note = ({ note }) => {
  return (
    <div className='note'>
      <h4 className='note__title'>{note.title}</h4>
      <p className='note__text'>{note.text}</p>
    </div>
  )
}

export default Note