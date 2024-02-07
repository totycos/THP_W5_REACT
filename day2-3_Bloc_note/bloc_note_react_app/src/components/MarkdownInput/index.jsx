import {React, useState, useEffect} from 'react'
import './index.scss'

const MarkdownInput = ({ onNote, selectNote }) => {
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

  const handleSave = () => {
    // get notes saved in localStorage and convert them straight in JSON
    const notesToUpdate = JSON.parse(localStorage.notesStorage)
    // add new note
    notesToUpdate.push(values)
    // convert the notes back to string and save it in localStorage
    localStorage.notesStorage = JSON.stringify(notesToUpdate);
    // on incremente l'id de 1 pour la prochaine note
    setValues({ ...values, id: values.id + 1 })
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