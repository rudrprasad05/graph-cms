import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {
 console.log(post)
  return (
    <div className='px-8 py-6 flex gap-10 bg-blue-200 mb-20 rounded-md'>
      <div className='w-64'>
        <img src={post.node.featuredImage.url} alt="" className='w-full'/>
      </div>
      <div className=''>
        <p className='capitalize'>{post.node.title}</p>
        <p>{post.node.excert}</p>
      </div>
      
    </div>
  )
}

export default PostCard