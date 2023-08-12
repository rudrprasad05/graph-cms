import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { HiOutlineUser, HiOutlineCalendar, HiOutlineChevronDoubleRight } from 'react-icons/hi'

const PostCard = ({post}) => {

  return (

    <div className="relative rounded-md overflow-clip bg-black h-full drop-shadow-lg">

      <div className='h-full w-full'>
        <Link to={`/blog/${post.node.slug}`}>
          <img src={post.node.featuredImage.url} alt="" className=' h-full w-full relative z-10 opacity-50 object-cover'/>
        </Link>
        
      </div>

      <div className='z-20 absolute bottom-0 md:px-8 md:py-4 px-5 py-3 text-white md:flex block w-full'>

        <div className='grow'>

          <p className='md:text-3xl text-2xl text-bolder py-2'>
            <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
          </p>

          <div className='md:flex gap-5  hidden'>

            <div className='flex gap-2'>
              <span className='flex items-center justify-center'>
                <HiOutlineUser className='stroke-blue-300 '/>
              </span>
              <span className=''>
                {post.node.author.name}
              </span>
            </div>

            <div className='flex gap-2 '>
              <span className='flex items-center justify-center'>
                <HiOutlineCalendar className='stroke-blue-300'/>
              </span>
              <span>
                {moment(post.node.createdAt).format("DD MMM YYYY")} 
              </span>
            </div>
            
          </div>

        </div>

        <div className='flex items-end md:text-base text-sm'>
          <Link className='flex gap-2' to={`/blog/${post.node.slug}`}>
            <span className='md:p-0 md:bg-transparent py-1 px-2 bg-blue-500 rounded-lg'>Read More</span>
            <span className='flex md:block hidden'>
              <HiOutlineChevronDoubleRight className='h-min w-min mt-1 stroke-blue-300'/>
            </span>
          </Link>
        </div>
        


      </div>  


      
    </div>
  )
}

export default PostCard