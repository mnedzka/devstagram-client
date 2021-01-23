import React, {useState, useContext} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {AuthContext} from '../../Context/AuthContext'
import { ActionButton } from '../../Reusable/Buttons/Buttons'
import {useToast} from '@chakra-ui/react'

import './PostForm.css'

const PostForm = () => {

  const toast = useToast()
  const { postID } = useParams()
  const { currentUser } = useContext(AuthContext)
  const [comment, setComment] = useState('')

  const handleCommentSubmit = e => {
    e.preventDefault()
    if(currentUser){

      const formattedDetails = {
        userName: currentUser.displayName,
        content: comment,
        postID
      }
      axios.post('http://localhost:5000/comments/add', formattedDetails)
    } else {
      toast({
        title: "Failed to add comment",
        description: "You need to create an account to comment",
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }

  }

  return (
    <form className="post-form" onSubmit={handleCommentSubmit}>
      <div className="post-form__container">
        <textarea name="comment" className="post-form__textarea" value={comment} onChange={e => setComment(e.target.value)} required/>
        <label className="post-form__label">Comment</label>   
        <ActionButton buttonColor="blue" buttonSize="lg" buttonText="Submit" buttonVariant="filled" onClick={handleCommentSubmit} />     
      </div>
    </form>
  )
}

export default PostForm