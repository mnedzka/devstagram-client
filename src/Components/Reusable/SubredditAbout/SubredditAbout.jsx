import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {ActionButton} from '../Buttons/Buttons'
import { AuthContext } from '../../Context/AuthContext'

import './SubredditAbout.css'

const SubredditAbout = ({numOfPosts}) => {
  const {currentUser} =  useContext(AuthContext)
  const { subreddit } = useParams()

  const [about, setAbout] = useState('')

  const followSubreddit = async() => {
    console.log('object')
    const formattedDetails = {
      username: await currentUser.displayName,
      subreddit
    }
    const follow = await axios.post('http://localhost:5000/user/follow/subreddit', formattedDetails)
    console.log(follow)
  }
  

  useEffect(() => {
    const fetchSubredditDetails = async() => {
      const fetchDetails = await axios.get(`http://localhost:5000/subreddits/${subreddit}`)
      setAbout(fetchDetails.data.data.about)
    }

    fetchSubredditDetails()
  },  [])
  return (
    <section className="subreddit_about">
      <div className="subreddit_about__container">
        <h1 className="subreddit_about__title">TP/{subreddit}</h1>
        <p className="subreddit_about__para">{about}</p>
        <h3 className="subreddit_about__posts"><span className="posts__num">{numOfPosts}</span> Posts</h3>
        <div className="" onClick={followSubreddit}>
          <ActionButton buttonColor="blue" buttonSize="lg" buttonText="Join" buttonVariant="filled" />
        </div>
      </div>
    </section>
  )
}

export default SubredditAbout
