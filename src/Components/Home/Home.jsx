import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Home.css'
import { Skeleton, Stack } from '@chakra-ui/react'
import Post from '../Reusable/Post/Post'

const Home = () => {

  const [posts, setPosts] = useState([])
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    //use axios to fetch data from backend
    const fetchData = async() => {
      const posts = await axios.get('http://localhost:5000/posts')
      console.log(posts)
      const postArr = posts.data.data.posts
      setPosts(postArr) 
      isLoading(false)

    }

    fetchData()
  }, [])
  return (
    <section className="home">
      <div className="home__container">
        <div className="home__posts">
          {loading ? (
            <>
              <Stack>
                <Skeleton height="20px" />
                <Skeleton height="20px" />
                <Skeleton height="20px" />

              </Stack>
            </>
          ) : (
            <>
              {posts.map(post => {
                return(
                  
                  <Post postID={post.postid} username={post.username} title={post.title} content={post.content} subreddit={post.subreddit} createdAt={post.createdat}/>
                )
              })}
            </>
          )}
          
        </div>
      </div>
    </section>
  )
}

export default Home