import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { HiOutlineUser, HiOutlineCalendar, HiOutlineChevronDoubleRight } from 'react-icons/hi'

const CategoryCards = ({post, postKey}) => {

  return (

    <div className="relative rounded-md overflow-clip bg-black h-full drop-shadow-lg" key={postKey}>

      <div className='h-full w-full'>
        <img src={post.featuredImage.url} alt="" className=' h-full w-full relative z-10 opacity-50 object-cover'/>
      </div>

      <div className='z-20 absolute bottom-0 px-8 py-4 text-white flex w-full'>

        <div className='grow'>

          <p className='text-3xl text-bolder py-2'>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
          </p>

          <div className='flex gap-5'>

            <div className='flex gap-2'>
              <span className='flex items-center justify-center'>
                <HiOutlineUser className='stroke-blue-300 '/>
              </span>
              <span>
                {post.author.name}
              </span>
            </div>

            <div className='flex gap-2 '>
              <span className='flex items-center justify-center'>
                <HiOutlineCalendar className='stroke-blue-300'/>
              </span>
              <span>
                {moment(post.createdAt).format("DD MMM YYYY")} 
              </span>
            </div>
            
          </div>

        </div>

        <div className='flex items-end'>
          <Link className='flex gap-2' to={`/blog/${post.slug}`}>
            <span>Read More</span>
            <span className='flex'>
              <HiOutlineChevronDoubleRight className='h-min w-min mt-1 stroke-blue-300'/>
            </span>
          </Link>
        </div>
        


      </div>  


      
    </div>
  )
}

export default CategoryCards