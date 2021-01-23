import React, {useContext} from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './Comment.css'
import { CommentContext } from '../../Context/CommentContext'

const Comment = ({userName, createdAt, content, commentID}) => {
  const { deleteComment } = useContext(CommentContext)
  return (
    <article className="comment">
      <div className="comment__details">
        <Link  onClick={() => deleteComment(commentID)}>
          <h1 className="comment__username">{userName} posted this {moment(createdAt).fromNow()}</h1>
        </Link>
      </div>
      <div className="comment__content">
        <p className="comment__para">
          {content}
        </p>
      </div>
    </article>
  )
}

export default Comment