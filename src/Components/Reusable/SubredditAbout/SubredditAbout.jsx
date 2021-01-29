import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {ActionButton} from '../Buttons/Buttons'
import { AuthContext } from '../../Context/AuthContext'

import './SubredditAbout.css'

const SubredditAbout = ({numOfPosts}) => {
  const {currentUser} =  useContext(AuthContext)
  const { subreddit } = useParams()

  const [isFollowing, setIsFollowing] = useState(false)

  const [about, setAbout] = useState('')

  const followSubreddit = async() => {
    const formattedDetails = {
      username: await currentUser.displayName,
      subreddit
    }
    const follow = await axios.post('http://localhost:5000/user/follow/subreddit', formattedDetails)
    setIsFollowing(true)
  }

  const unfollowSubreddit = async() => {
    const formattedDetails = {
      username: await currentUser.displayName,
      subreddit
    }
    const unfollow = await axios.post('http://localhost:5000/user/unfollow/subreddit', formattedDetails)
    setIsFollowing(false)

  }
  

  useEffect(() => {
    const fetchSubredditDetails = async() => {
      const fetchDetails = await axios.get(`http://localhost:5000/subreddits/${subreddit}`)
      setAbout(fetchDetails.data.data.about)
      // setFollowedBy(fetchDetails.data.data.followed_by)
      setIsFollowing(false)
    }

    fetchSubredditDetails()
  },  [])
  return (
    <section className="subreddit_about">
      <div className="subreddit_about__container">
        <h1 className="subreddit_about__title">TP/{subreddit}</h1>
        <p className="subreddit_about__para">{about}</p>
        <h3 className="subreddit_about__posts"><span className="posts__num">{numOfPosts}</span> Posts</h3>
        
        { isFollowing ? (
          <div className="" onClick={unfollowSubreddit}>
            <ActionButton buttonColor="blue" buttonSize="lg" buttonText="Leave" buttonVariant="outlined" />
          </div>
        ) : (
          <div className="" onClick={followSubreddit}>
            <ActionButton buttonColor="blue" buttonSize="lg" buttonText="Join" buttonVariant="filled" />
          </div>
        )}
      </div>
    </section>
  )
}

export default SubredditAbout
