import React,{ createContext, useReducer, useState } from 'react'
import axios from 'axios'

export const CommentContext = createContext()

export const CommentContextProvider = ({children}) => {

  const [comments, setComments] = useState([])

  const deleteComment = async(commentID) => {
    const deleteComment = await axios.delete(`http://localhost:5000/comments/${commentID}`) 
    setComments(comments.filter(comment => commentID !== comment.comment_id))
  }

  const updateComment = async(commentID, content) => {
    const formatted = {
      commentID,
      content
    }
    const updatedComment = await axios.put(`http://localhost:5000/comments/${commentID}`, formatted)
    setComments([...comments, comments.map(comment => comment.comment_id === commentID ? comment.content = content : comment)])
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
        addComment,
        updateComment
      }
    }>
      {children}
    </CommentContext.Provider>
  )
}