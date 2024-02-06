import {React, useState, useEffect} from 'react'
import './index.scss'

const MarkdownInput = ({ onNote }) => {
  const [values, setValues] = useState({ title: '', text: '' });  
  
  const handleOnChange = (name) => {  
		return (event) => {  
			setValues({ ...values, [name]: event.target.value });  
		};  
	};  

  useEffect(() => {
    onNote(values)
  }, [values])

  const handleSave = () => {
    localStorage.noteContent += JSON.stringify(values)
    console.log('localStorage :', JSON.parse(localStorage.noteContent))
  }

  console.log('values :', values)

  return (
    <div className='form'>
      <input className='form__title' type='text' value={values.title} onChange={handleOnChange('title')} placeholder='Here your title'/>
      <textarea className='form__text' value={values.text} onChange={handleOnChange('text')} placeholder='Here your note'></textarea>
      <p className='form__btn' onClick={handleSave}>Sauvegarder</p>
    </div>
  )
}

export default MarkdownInput