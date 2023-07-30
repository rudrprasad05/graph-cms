import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Catergories from '../components/Catergories.jsx'
import PostDetails from '../components/PostDetails.jsx'
import PostWidget from '../components/PostWidget.jsx'
import Author from '../components/Author.jsx'
import CommentsForm from '../components/CommentsForm.jsx'
import Comments from '../components/Comments.jsx'

const Blogs = () => {
    
    
  return (
    <div>
      <div>
        <div>
          <PostDetails/>
          <Author/>
          <CommentsForm/>
          <Comments/>
        </div>
        <div>
          <PostWidget/>
          <Catergories/>
        </div>
      </div>
    </div>
  )
}

export default Blogs