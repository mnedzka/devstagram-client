import React from 'react'
import SinglePostContent from './PostContent'

import './SinglePostPage.css'

const SinglePostPage = () => {

  return (
    <section className="single-post">
      <div className="single-post__container">
        <SinglePostContent />
      </div>
    </section>
  )
}

export default SinglePostPage