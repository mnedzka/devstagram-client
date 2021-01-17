import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const SinglePostContent = () => {
  const {postID} = useParams()

  useEffect(() => {
    const getPostContent = async() => {
      const postContent = await (await axios.get(`http://localhost:5000/posts/${postID}`)).data
      console.log(postContent)
    }
    getPostContent()
  }, [])

  return (
    <section className="single-post-content">
      {postID}
    </section>
  )
}

export default SinglePostContent