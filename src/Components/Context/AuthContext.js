import React, { createContext, useState, useEffect } from 'react'
import { auth } from '../Firebase/firebase'

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {


  const [currentUser, setCurrentUser] = useState('')

  const signUp = async(email,password, displayName) => {
    try{
      const userSignedUp = await auth.createUserWithEmailAndPassword(email,password)
      userSignedUp.user.updateProfile(
        {
          displayName
        }
      )
      return userSignedUp
    }
    catch(err){
      alert(err.message)
    }
  }

  const logIn = async(email,password) => {
    try{

      const login = await auth.signInWithEmailAndPassword(email,password)
      return login
    } catch(err) {

      alert(err.message)
    }
  }

  const logout = async() => {
    auth.signOut()
  }

  const BASE_URL = 'http://localhost:5000'

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
    return unsubscribe
  }, [])



  return(
    <AuthContext.Provider value={
      {
        currentUser,
        signUp,
        logout,
        logIn,
        BASE_URL
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}