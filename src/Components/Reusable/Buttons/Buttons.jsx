import React from 'react'
import {useHistory} from 'react-router-dom'
import './Buttons.css'

export const LinkButton = ({buttonColor, buttonText, buttonSize, buttonVariant, link}) => {
  const history = useHistory()
  
  const handleRoute = link => {
    history.push(`/${link}`)
  }
  return (
    <button onClick={() => handleRoute(link)} className={`button ${buttonColor} ${buttonSize} ${buttonVariant} `}>
      {buttonText}
    </button>
  )
}


export const ActionButton = ({buttonColor, buttonText, buttonSize, buttonVariant}) => {
  return(
    <button className={`button ${buttonColor} ${buttonSize} ${buttonVariant}`}>
      {buttonText}
    </button>
  )
}

