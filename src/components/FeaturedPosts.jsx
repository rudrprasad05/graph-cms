import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineCalendar, HiOutlineChevronDoubleRight } from 'react-icons/hi'
import { DiCss3, DiHtml5, DiJava, DiCode, DiReact } from 'react-icons/di'
import moment from 'moment'

const FeaturedPosts = ({post}) => {

    const selectIcon = (key) => {
        switch (key) {
            case "html":
                return (
                <div className='ml-2'>
                    <Link to={'/category/html'}>
                        <DiHtml5 size={30}/>
                        <div className='text-xs'>HTML</div>
                    </Link>
                    
                </div>
                )
            case "css": 
                return(
                <div className='ml-2'>
                    <Link to={'/category/css'}>
                        <DiCss3 size={30}/>
                        <div className='text-xs text-center'>CSS</div>
                    </Link>
                    
                </div>
                ) 
            case "java": 
                return(
                    <div className='ml-2'>
                        <Link to={'/category/java'}>
                            <DiJava size={30}/>
                            <div className='text-xs text-center'>Java</div>
                        </Link>
                        
                    </div>
                    ) 
            case "C++": 
                return(
                    <div className='ml-2'>
                        <Link to={'/category/cplusplus'}>
                            <DiCode size={30}/>
                            <div className='text-xs text-center'>C++</div>
                        </Link>
                        
                    </div>
                    ) 
            case "react": 
                return(
                    <div className='ml-2'>
                        <Link to={'/category/react'}>
                           <DiReact size={30}/>
                            <div className='text-xs text-center'>React</div> 
                        </Link>
                        
                    </div>
                    ) 
            
            default:
                break;
        }
    }
    return (
        <>
        
            <div className='flex w-4/5 mx-auto overflow-clip shadow-md rounded-md mb-10 border-2 border-gray-100'>
                <div className='w-1/3'>
                    <img src={post.node.featuredImage.url} alt="" className='w-full h-full object-cover'/>
                </div>
                
                <div className='grow px-16 py-10 flex flex-col'>
                    <p className='text-xl text-blue-500 mb-3'>
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
                                <HiOutlineCalendar className='stroke-blue-500' size={35}/>
                            </span>
                            <span className='italic text-gray-400'>
                                {moment(post.node.createdAt).format("DD MMM YYYY")} 
                            </span>
                        </div>

                        <div className='ml-auto flex items-center'>
                            {post && post.node.catergories.map((item) => selectIcon(item.name))}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedPosts