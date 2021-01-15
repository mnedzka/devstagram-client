import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './Home.css'
import Post from '../Reusable/Post/Post'

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    //use axios to fetch data from backend
  }, [])
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__posts">
          <Post />
          <Post />
        </div>
      </div>
    </section>
  )
}

export default Home