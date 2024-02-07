import {React, useState, useEffect} from 'react'
import './index.scss'

const MarkdownInput = ({ onNote, selectNote, newNote, onSavedNote }) => {
  const [values, setValues] = useState({ id: 0, title: '', text: '' }); 
  
  const handleOnChange = (name) => {  
		return (event) => {  
			setValues({ ...values, [name]: event.target.value });  
		};  
	};  

  useEffect(() => {
    // create a localStorage to store an Array
    localStorage.notesStorage = JSON.stringify([]);
  }, [])

  useEffect(() => {
    onNote(values)
  }, [values])

  useEffect(() => {
    console.log('######### UseEffect activate ########, selectNote :', selectNote)
    if (selectNote.id !== undefined) {
      console.log('selectNote in Markdown :', selectNote)
      setValues({id: selectNote.id, title: selectNote.title, text: selectNote.text})
    }
  }, [selectNote])

  useEffect(() => {

  }, [values.id])

  useEffect(() => {
    let notesToUpdate = JSON.parse(localStorage.notesStorage)
    const maxId = notesToUpdate.reduce((max, note) => (note.id > max ? note.id : max), -1);
    setValues({ id: maxId + 1, title: '', text: '' })
  }, [newNote])
  
  const handleSave = () => {
    // get notes saved in localStorage and convert them straight in JSON
    let notesToUpdate = JSON.parse(localStorage.notesStorage)
    // ADD NEW NOTE
    // If a note with the same id than values DOESN'T EXIST in notesToUpdate
    if (!notesToUpdate.some(note => note.id === values.id)) {
      notesToUpdate.push(values)
      // convert the notes back to string and save it in localStorage
      localStorage.notesStorage = JSON.stringify(notesToUpdate);
      // on incremente l'id de 1 pour la prochaine note
      /////setValues({ ...values, id: values.id + 1 })
    }
    // If a note with the same id than values EXIST in notesToUpdate
    else {
      // Remove the note with the same id than value.id from notesToUpdate
      notesToUpdate = notesToUpdate.filter(note => note.id !== values.id);
      // Search the last saved id
      const maxId = notesToUpdate.reduce((max, note) => (note.id > max ? note.id : max), -1);
      // Change current value.id to save the note with a new id
      const exportValuesWithNewId = { ...values, id: maxId + 1 };
      notesToUpdate.push(exportValuesWithNewId)
      // convert the notes back to string and save it in localStorage
      localStorage.notesStorage = JSON.stringify(notesToUpdate);
      /////setValues({ ...values, id: maxId + 2 })
    }
    
    onSavedNote()
    console.log('localStorage :', JSON.parse(localStorage.notesStorage))
  }

  console.log('values :', values)

  return (
    <div className='form'>
      <input className='form__title' type='text' value={values.title} onChange={handleOnChange('title')} placeholder='Here your title' />
      <textarea className='form__text' value={values.text} onChange={handleOnChange('text')} placeholder='Here your note' defaultValue={selectNote ? selectNote.text : ''}></textarea>
      <p className='form__btn' onClick={handleSave}>Sauvegarder</p>
    </div>
  )
}

export default MarkdownInput