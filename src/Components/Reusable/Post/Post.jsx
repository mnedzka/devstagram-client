import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
import moment from 'moment'

import axios from 'axios'

const Post = ({postID,username,title,content,likeCount,commentCount,subreddit,createdAt}) => {

  const [post, setPost] = React.useState('')

  React.useEffect(() => {
    setPost(content.replace(/\n/g, '\n'))
    const getComments = async() => {
      const comments = await axios.get(`http://localhost:5000/comments/${postID}`)
    
    }
    getComments()
    // setPost(content.replace(new RegExp('\r?\n','g'), '<br/>'))
  }, [])
  return (
    <article className="post">
      <div className="post__container">
        <div className="post__row">
          <div className="post__subreddit">
            <Link to={`/subreddit/${subreddit}`}>
              <h1>TD/{subreddit}</h1>
            </Link>
          </div>
          <div className="post__user">
            <Link to={`/user/${username}`}>
              <h3>u/{username} posted this {moment(createdAt).fromNow()}</h3>
            </Link>
          </div>
        </div>

        <div className="post__row">
          <div className="post__title">
            <Link to={`/post/${postID}`}>
              <h1>{title}</h1>
            </Link>
          </div>
          <div className="post__content">
            <p>{post}</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post
