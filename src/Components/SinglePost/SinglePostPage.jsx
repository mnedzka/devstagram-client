import React from 'react'
import PostComments from './PostComments/PostComments'
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
        <PostComments />
      </div>
    </section>
  )
}

export default SinglePostPage