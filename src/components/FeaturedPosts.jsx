import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineCalendar } from 'react-icons/hi'
import moment from 'moment'
import { selectIcon } from './SelectIcon'



const FeaturedPosts = ({post}) => {
    
    return (
        <>
        
            <div className='md:flex block w-4/5 mx-auto overflow-clip shadow-md rounded-md mb-10 '>
                <div className='md:w-1/3 md:max-h-64 w-full'>
                    <img src={post.node.featuredImage.url} alt="" className='w-full h-full object-cover'/>
                </div>
                
                <div className='grow md:px-16 md:py-10 px-5 py-2 md:flex md:flex-col '>
                    <p className='md:text-3xl text-xl text-blue-500 mb-3'>
                        <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
                    </p>
                    <p className='md:text-base text-sm'>{post.node.excert}</p>
                    <div className=' mt-auto md:flex gap-5 grid grid-cols-2 py-2'>
                        <div className='md:flex block gap-2 items-center w-min md:mx-0 mx-auto md:text-base text-sm sm:text-center'>
                            <div className='rounded-full border-2 border-blue-500 w-10'>
                                <img src={post.node.author.photo.url} alt=""className='w-10 h-10 object-cover rounded-full' />

                            </div>
                            
                            <p className='italic text-gray-400'>{post.node.author.name}</p>
                        </div>
                        <div className='md:flex block gap-2 items-center md:text-base text-sm sm:text-center'>
                            <span className='flex items-center justify-center'>
                                <HiOutlineCalendar className='stroke-blue-500' size={35} strokeWidth={1.5}/>
                            </span>
                            <span className='italic text-gray-400'>
                                {moment(post.node.createdAt).format("DD MMM YYYY")} 
                            </span>
                        </div>

                        <div className='md:ml-auto md:flex hidden items-center gap-2'>
                            {post && post.node.catergories.map((item) => 
                                
                                selectIcon(item)
                            )}
                        </div>
                        
                    </div>
                    <div className='md:ml-auto md:hidden flex  items-center gap-2'>
                        {post && post.node.catergories.map((item) => 
                            
                            selectIcon(item)
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedPosts