import React from 'react'
import { useState } from 'react'
import './index.scss'

const Projects = () => {

  const [exercices, setExercices] = useState(["Video Game informations", "The notepad", "React Router"])
  const [caseStudy, setCaseStudy] = useState(["Nike, the new website", "Paypal, how their data are stored"])
  const [concretCase, setConcretCase] = useState(["My grandparent bridge club website", "My friend bakery"])
  const [dataToDisplay, setDataToDisplay] = useState([])

  const handleExercices = () => {
    setDataToDisplay(exercices)
  }

  const handleCaseStudy = () => {
    setDataToDisplay(caseStudy)
  }

  const handleConcretCase = () => {
    setDataToDisplay(concretCase)
  }

  return (
    <>
      <div className='projects'>
        <p onClick={handleExercices}>Exercies</p>
        <p onClick={handleCaseStudy}>Case study</p>
        <p onClick={handleConcretCase}>Concret case</p>
      </div>
      <div className='cardContainer'>
        {dataToDisplay ? dataToDisplay.map(element => (
          <div className="card" key={element}>
            <p className='card__title'>{element}</p>
            <div className="card__content"></div>
          </div>
        )) : <p></p>  }
      </div>
    </>

  )
}

export default Projects