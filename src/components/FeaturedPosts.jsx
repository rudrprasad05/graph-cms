import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineCalendar } from 'react-icons/hi'
import moment from 'moment'
import { selectIcon } from './SelectIcon'



const FeaturedPosts = ({post}) => {
    
    return (
        <>
        
            <div className='flex w-4/5 mx-auto overflow-clip shadow-md rounded-md mb-10 '>
                <div className='w-1/3 max-h-64 '>
                    <img src={post.node.featuredImage.url} alt="" className='w-full h-full object-cover'/>
                </div>
                
                <div className='grow px-16 py-10 flex flex-col'>
                    <p className='text-3xl text-blue-500 mb-3'>
                        <Link to={`/blog/${post.node.slug}`}>{post.node.title}</Link>
                    </p>
                    <p>{post.node.excert}</p>
                    <div className=' mt-auto flex gap-5'>
                        <div className='flex gap-2 items-center'>
                            <div className='rounded-full border-2 border-blue-500'>
                                <img src={post.node.author.photo.url} alt=""className='w-10 h-10 object-cover rounded-full' />

                            </div>
                            
                            <p className='italic text-gray-400'>{post.node.author.name}</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='flex items-center justify-center'>
                                <HiOutlineCalendar className='stroke-blue-500' size={35} strokeWidth={1.5}/>
                            </span>
                            <span className='italic text-gray-400'>
                                {moment(post.node.createdAt).format("DD MMM YYYY")} 
                            </span>
                        </div>

                        <div className='ml-auto flex items-center gap-2'>
                            {post && post.node.catergories.map((item) => 
                                
                                selectIcon(item)
                            )}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedPosts