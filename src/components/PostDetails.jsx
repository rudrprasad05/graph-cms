import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'
import {HiOutlineCalendar} from 'react-icons/hi'

const PostDetails = ({ post }) => {

    const getContentFragment = (index, text, obj, type) => {
        let modifiedText = text;
    
        if (obj) {
          if (obj.bold) {
            modifiedText = (<b key={index}>{text}</b>);
          }
    
          if (obj.italic) {
            modifiedText = (<em key={index}>{text}</em>);
          }
    
          if (obj.underline) {
            modifiedText = (<u key={index}>{text}</u>);
          }
          if (obj.code){
            modifiedText = (<code key={index}>{text}</code>);
          }
        }
    
        switch (type) {
          case 'heading-one':
            return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-four':
            return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
          case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                height={obj.height}
                width={obj.width}
                src={obj.src}
              />
            );
            case 'bulleted-list':
                
                return(
                    <ul key={index}>
                        {obj.children.map((e, eIndex) => (
                            <li key={eIndex}>{e.children.map((i, iIndex) => (
                                <span key={iIndex}>{i.children.map((j, jIndex) => (
                                    <span key={jIndex}>{j.text}</span>
                                ))}</span>
                            ))}</li>
                        ))}
                    </ul>
                )
            case 'numbered-list':
            
                return(
                    <ol key={index}>
                        {obj.children.map((e, eIndex) => (
                            <li key={eIndex}>{e.children.map((i, iIndex) => (
                                <span key={iIndex}>{i.children.map((j, jIndex) => (
                                    <span key={jIndex}>{j.text}</span>
                                ))}</span>
                            ))}</li>
                        ))}
                    </ol>
                )

            case 'code-block':
                return(
                    <code>{modifiedText}</code>
                )
          default:
            return modifiedText;
        }
      };
    
    
  return (
    <div>
        {post && (
            <div key={post.slug}>

              {/* title section */}
              <div>
                  <div>
                      <img src={post.featuredImage.url} alt="" className='shadow-md rounded-md'/>
                  </div>
                  <div className=' my-5 flex gap-5'>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-full border-2 border-blue-500'>
                            <img src={post.author.photo.url} alt=""className='w-8 h-8 object-cover rounded-full' />

                        </div>
                        
                        <p className='italic text-gray-400'>{post.author.name}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='flex items-center justify-center'>
                            <HiOutlineCalendar className='stroke-blue-500' size={20}/>
                        </span>
                        <span className='italic text-gray-400'>
                            {moment(post.createdAt).format("DD MMM YYYY")} 
                        </span>
                    </div>
                  </div>
                  <div className='text-5xl text-blue-500'>
                      {post.title}
                  </div>
              </div>
              
              {/* content section */}

              <div>
                  {post.content.raw.children.map((typeObj, index) => {
                      const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));

                      return getContentFragment(index, children, typeObj, typeObj.type);
                  })}
              </div>
              
            </div>
        )}
        
    </div>
  )
}

export default PostDetails