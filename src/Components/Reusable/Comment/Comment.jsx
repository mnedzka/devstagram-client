import React, {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './Comment.css'

const Comment = ({userName, createdAt, content, commentID}) => {
  
  return (
    <article className="comment">
      <div className="comment__details">
        <Link to={`/user/${userName}`}>
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