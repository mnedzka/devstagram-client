import React,{ createContext, useReducer, useState } from 'react'
import axios from 'axios'

export const CommentContext = createContext()

export const CommentContextProvider = ({children}) => {

  const [comments, setComments] = useState([])

  const deleteComment = (commentID) => {

  }

  const addComment = comment => {
    setComments([comment,...comments])
  }

  const storeComments = commentsArray => {
    setComments(commentsArray)
  } 

  

  return(
    <CommentContext.Provider value={
      {
        comments,
        storeComments,
        deleteComment,
        addComment
      }
    }>
      {children}
    </CommentContext.Provider>
  )
}