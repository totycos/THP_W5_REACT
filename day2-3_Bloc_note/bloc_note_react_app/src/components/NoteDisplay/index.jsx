import React from 'react'
import Showdown from 'showdown';
import './index.scss'
import { useState, useEffect } from 'react';

const NoteDisplay = ({ note }) => {
  const converter = new Showdown.Converter();
  const [titleHtml, setTitleHtml] = useState('')
  const [textHtml, setTextHtml] = useState('')

  function createMarkup() {
    return {__html: 'Premier &middot; Second'};
  }

useEffect(() => {
  setTitleHtml(converter.makeHtml(note.title || ''))
  setTextHtml(converter.makeHtml(note.text || ''))
}, [note])

  return (
    <div className="viewerContainer">
      <div className="borderShadow"></div>
      <div className='viewer'>
        <h1 dangerouslySetInnerHTML={{ __html: titleHtml }} />
        <p dangerouslySetInnerHTML={{ __html: textHtml }} />
    </div>
    </div>
  )
}

export default NoteDisplay