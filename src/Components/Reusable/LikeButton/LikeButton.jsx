import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from '../../Context/AuthContext'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

import './LikeButton.css'

const LikeButton = ({postID}) => {
  const {currentUser} = useContext(AuthContext)
  const [didUSerLike, setDidUserLike] = useState(false)
  const [numOfLikes, setNumOfLikes] = useState(0)


  const likePost = async() => {
    const formattedDetails = {
      userName: await currentUser.displayName,
      postID
    }
    console.log(formattedDetails)

    axios.post('http://localhost:5000/likes/add',formattedDetails)
    setNumOfLikes(numOfLikes+1)
    setDidUserLike(true)

  }

  const dislikePost = async() => {
    const formattedDetails = {
      userName: await currentUser.displayName,
      postID
    }
    const userName = await currentUser.displayName
    console.log(formattedDetails)
    axios.post('http://localhost:5000/likes/dislike',formattedDetails)
    setNumOfLikes(numOfLikes-1)
    setDidUserLike(false)

  }

  useEffect(() => {
    const fetchLikes = async() => {
      const fetch = await axios.get(`http://localhost:5000/likes/${postID}`)
      console.log(fetch)
      setDidUserLike(fetch.data.data.likedBy.map(like => like.username === currentUser.displayName ? true : undefined  ))
      setNumOfLikes(fetch.data.data.numOfLikes)
    }
    fetchLikes()
  }, [])


  return (
    <>
      {didUSerLike ? (
        <button className="like__btn" onClick={dislikePost}>
          <BsHeartFill className="heart" />
          <span className="counter">
            {numOfLikes}, dislike the post
          </span>
        </button>
      ) : (
        <button className="like__btn " onClick={likePost}>
          <BsHeart />
          <span className="counter">
            {numOfLikes}, like the post now
          </span>
        </button>
      )}
    </>
  )
}

export default LikeButton
