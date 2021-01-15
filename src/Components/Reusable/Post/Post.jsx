import React from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

const Post = ({postID,userID,username,title,content,likeCount,commentCount,subreddit,createedAt}) => {
  return (
    <article className="post">
      <div className="post__container">
        <div className="post__row">
          <div className="post__subreddit">
            <Link to="subredit">
              <h1>TD/All</h1>
            </Link>
          </div>
          <div className="post__user">
            <Link to="userid">
              <h3>By JoshuaT45 on 19th December 2020</h3>
            </Link>
          </div>
        </div>

        <div className="post__row">
          <div className="post__title">
            <Link to="1">
              <h1>Welcome to Devstagram</h1>
            </Link>
          </div>
          <div className="post__content">
            <p>ellat. est accusantis amet illo quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos voluptas placeat, quisquam, nam laboriosam, eum corrupti harum veniam esse officiis sunt fugit! Recusandae molestias soluta cum velit quos, fugiat aliquam?</p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Post
