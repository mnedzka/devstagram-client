import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import './PostContent.css'

const SinglePostContent = () => {
  const {postID} = useParams()
  const [username, setUserName] = useState('')
  const [subreddit, setSubreddit] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  



  useEffect(() => {
    const getPostContent = async() => {
      const postContent = await (await axios.get(`http://localhost:5000/posts/${postID}`)).data
      console.log(postContent.data)
      const { subreddit,username,title,content,createdat } = postContent.data.post
      setSubreddit(subreddit)
      setUserName(username)
      setTitle(title)
      setContent(content)
      setCreatedAt(createdat)
    }
    getPostContent()
  }, [])

  return (
    <section className="single-post-content">
      <div className="single-post-content__container">
        <div className="single-post-content__post-details">
          <h2 className="single-post-content__subreddit">
            TP/{subreddit}
          </h2>
          <h3 className="single-post-content__username">
            By u/{username} {moment(createdAt,'YYYYMMDD').fromNow()}
          </h3>
        </div>
        <div className="single-post-content__post-content">
          <h1 className="single-post-content__title">
            {title}
          </h1>
          <p className="single-post-content__para">
            {content}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SinglePostContent