import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Comment from '../../Reusable/Comment/Comment'


const PostComments = () => {
  const { postID } = useParams()

  const [comments, setComments] = useState(['hello'])

  useEffect(() => {
    const getComments = async() => {
      const comments = await axios.get(`http://localhost:5000/comments/${postID}`)
      setComments([...comments.data.data.comments])
    }
    getComments()
  }, [])
  return (
    <section className="post-comments">
      <div className="post-comments__container">
        {
          comments.map(comment => {
            return(
              <Comment userName={comment.username} createdAt={comment.createdAt} content={comment.content} commentID={comment.comment_id} />
            )
          })
        }
      </div>
    </section>
  )
}

export default PostComments
