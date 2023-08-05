import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { HiOutlineUser, HiOutlineCalendar, HiOutlineChevronDoubleRight } from 'react-icons/hi'

const PostCard = ({post}) => {

  return (

    <div className="relative rounded-md overflow-clip bg-black h-full ">

      <div className='h-full w-full'>
        <img src={post.node.featuredImage.url} alt="" className='h-full w-full relative z-10 opacity-50 object-cover'/>
      </div>

      <div className='z-20 absolute bottom-0 px-8 py-4 text-white flex w-full'>

        <div className='grow'>

          <p className='text-3xl text-bolder py-2'>{post.node.title}</p>

          <div className='flex gap-5'>

            <div className='flex gap-2'>
              <span className='flex items-center justify-center'>
                <HiOutlineUser className=''/>
              </span>
              <span>
                {post.node.author.name}
              </span>
            </div>

            <div className='flex gap-2 '>
              <span className='flex items-center justify-center'>
                <HiOutlineCalendar className=''/>
              </span>
              <span>
                {moment(post.node.createdAt).format("DD MMM YYYY")} 
              </span>
            </div>
            
          </div>

        </div>

        <div className='flex items-end'>
          <Link className='flex gap-2' to={`/blog/${post.node.slug}`}>
            <span>Read More</span>
            <span className='flex'>
              <HiOutlineChevronDoubleRight className='h-min w-min mt-1'/>
            </span>
          </Link>
        </div>
        


      </div>  


      
    </div>
  )
}

export default PostCard