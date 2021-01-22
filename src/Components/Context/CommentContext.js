import React,{ createContext, useReducer, useState } from 'react'

export const CommentContext = createContext()

export const CommentContextProvider = ({children}) => {

  const [comments, setComments] = useState([])

  

  return(
    <CommentContext.Provider>
      {children}
    </CommentContext.Provider>
  )
}