import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'
import moment from 'moment'
const Post = ({postID,username,title,content,likeCount,commentCount,subreddit,createdAt}) => {

  const [post, setPost] = React.useState('')

  React.useEffect(() => {
    setPost(content.replace(new RegExp('\r?\n','g'), '<br/>'))
  }, [])
  return (
    <article className="post">
      <div className="post__container">
        <div className="post__row">
          <div className="post__subreddit">
            <Link to={`/${subreddit}`}>
              <h1>TD/{subreddit}</h1>
            </Link>
          </div>
          <div className="post__user">
            <Link to={`/user/${username}`}>
              <h3>u/{username} posted this {moment(createdAt,'YYYYMMDD').fromNow()}</h3>
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
