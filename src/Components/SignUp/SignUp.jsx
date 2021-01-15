import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { ActionButton } from '../Reusable/Buttons/Buttons'

import './SignUp.css'

const SignUp = () => {
  const { signUp } = useContext(AuthContext)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async(e) => {
    e.preventDefault()

    const isSuccess = await signUp(email,password)
    console.log(isSuccess.uid)

    //code for adding to postgresql db
  }

  return (
    <section className="signup">
      <div className="signup__container">
        <form onSubmit={handleSubmit} className="signup__form">
          <div className="signup__form__input">
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} required/>
            <label className="signup__form__label">Username</label>
          </div>
          <div className="signup__form__input">
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} required/>
            <label className="signup__form__label">Email</label>
          </div>
          <div className="signup__form__input">
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
            <label className="signup__form__label">Password</label>
          </div>
          <ActionButton buttonText="Submit" buttonSize="lg" buttonVariant="filled" buttonColor="blue" onSubmit={handleSubmit}/>
        </form>
      </div>
    </section>
  )
}

export default SignUp
