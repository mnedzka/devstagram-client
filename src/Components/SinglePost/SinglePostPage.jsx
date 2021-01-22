import React from 'react'
import SinglePostContent from './PostContent/PostContent'
import PostForm from './PostForm/PostForm'
// import SinglePostContent from './PostContent/PostContent'
// 
import './SinglePostPage.css'

const SinglePostPage = () => {

  return (
    <section className="single-post">
      <div className="single-post__container">
        <SinglePostContent />
        <PostForm />  
      </div>
    </section>
  )
}

export default SinglePostPage