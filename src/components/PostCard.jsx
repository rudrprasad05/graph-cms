import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const PostCard = ({post}) => {

  return (
    <div className='px-8 py-6 flex gap-10 bg-blue-200 mb-20 rounded-md'>
      <div className='w-48'>
        <img 
          src={post.node.featuredImage.url}
          alt={post.node.author.name} 
          className='w-full object-cover'/>
      </div>

      <div className=''>
        <Link to={`/post/${post.node.slug}`}>
          <p className='capitalize'>{post.node.title}</p>
        </Link>

        <p>{post.node.excert}</p>

        <p>Author: {post.node.author.name}</p>
        <p>Date: {moment(post.node.createdAt).format("DD MMM YYYY")}</p>

        <Link to={`/post/${post.node.slug}`}>Continue Reading</Link>
      </div>
      
    </div>
  )
}

export default PostCard