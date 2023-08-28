import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import { HiOutlineUser, HiOutlineCalendar, HiOutlineChevronDoubleRight } from 'react-icons/hi'

const CategoryCards = ({post, postKey, search, array}) => {

  // const [array, setarray] = useState(second)
  return (

    <>

      <div className='mb-2 absolute top-0'>
        {search && <p className='text-blue-600'>
          <span className='italic text-black'>
            Showing results for: 
          </span> {`${search}`} 
          <span className='italic text-black ml-2'>Found: </span> {array.length} results</p>}
      </div>

      <div className={`relative rounded-md overflow-clip bg-black h-full drop-shadow-lg ${search ? "mt-10" : "mt-0"}`} key={postKey}>

    
        <div className='h-full w-full'>

          <Link to={`/blog/${post.slug}`}>
            <img src={post.featuredImage.url} alt="" className=' h-full w-full relative z-10 opacity-50 object-cover'/>
          </Link>
          
        </div>

        <div className='z-20 absolute bottom-0 md:px-8 md:py-4 px-5 py-3 text-white md:flex block w-full'>

          <div className='grow'>

            <p className='text-2xl text-bolder py-2 w-full'>
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </p>

            <div className='md:flex gap-5 hidden'>

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

          <div className='flex items-end items-center justify-between'>
            <Link className='flex gap-2' to={`/blog/${post.slug}`}>
              <span class="md:p-0 md:bg-transparent py-1 px-2 bg-blue-500 rounded-lg text-sm">Read More</span>
              <span className=' md:flex  hidden'>
                <HiOutlineChevronDoubleRight className='h-min w-min mt-1 stroke-blue-300'/>
              </span>
            </Link>
            <span class="md:hidden block text-sm px-2">
           
              {moment(post.createdAt).format("DD MMM YYYY")} 
                
            </span>
          </div>

          
          


        </div>  


      
    </div>
    
    </>

    
  )
}

export default CategoryCards