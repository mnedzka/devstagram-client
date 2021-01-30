import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'
import moment from 'moment'

import './PostContent.css'
import LikeButton from '../../Reusable/LikeButton/LikeButton'
import { AuthContext } from '../../Context/AuthContext'

const SinglePostContent = () => {
  const { BASE_URL } = useContext(AuthContext)

  const {postID} = useParams()
  const [username, setUserName] = useState('')
  const [subreddit, setSubreddit] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  



  useEffect(() => {
    const getPostContent = async() => {
      const postContent = await (await axios.get(`${BASE_URL}/posts/${postID}`))

      const { subreddit,username,title,content,createdat } = postContent.data.data.post
      setSubreddit(subreddit)
      setUserName(username)
      setTitle(title)

      setContent(content.replace(/\n/g, '\n'))
      setCreatedAt(createdat)
    }
    getPostContent()
  }, [])

  return (
    <section className="single-post-content">
      <div className="single-post-content__container">
        <div className="single-post-content__post-details">
          <Link to={`/subreddit/${subreddit}`}>
            <h2 className="single-post-content__subreddit">
              TP/{subreddit}
            </h2>
          </Link>
          <Link to={`/user/${username}`}>
            <h3 className="single-post-content__username">
              By u/{username} {moment(createdAt,'YYYYMMDD').fromNow()}
            </h3>
          </Link>
        </div>
        <div className="single-post-content__post-content">
          <h1 className="single-post-content__title">
            {title}
          </h1>
          <p className="single-post-content__para">
            {content}
          </p>
          <LikeButton postID={postID}/>
        </div>
      </div>
    </section>
  )
}

export default SinglePostContent