import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import moment from 'moment'
import copy from 'copy-to-clipboard'
import {HiOutlineCalendar, HiOutlineClipboard, HiOutlineClipboardCheck, HiLink } from 'react-icons/hi'

const PostDetails = ({ post }) => {

  const [copyCode, setCopyCode] = useState(false)

  

  const handleCopy =(e, temp) => {
    const tempstring = temp.toString()
    if (!copyCode){
      setCopyCode(true)
      copy(tempstring)
      
      console.log("code copied")
    }else{
      setCopyCode(false)
      console.log("code NOT copied")
    }
  }
  

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
      
          if (obj.type == "link"){
            modifiedText = (<a target={obj.openInNewTab ? "_blank" : ""} className="in-line-link" key={index} href={obj.href} title={obj.title}>{obj.children[0].text}</a>);
          }
        }
    
        switch (type) {
          case 'heading-one':
            return <p key={index} className="md:text-4xl text-2xl text-blue-500 mb-2">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'heading-two':
            return <p key={index} className="md:text-2xl text-xl mb-2">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
          case 'paragraph':
            return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
            
          case 'link':
            return <a key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</a>;
            

            case 'image':
            return (
              <img
                key={index}
                alt={obj.title}
                src={obj.src}
                className="rounded-md shadow-md"
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
              
              const temp = obj.children[0].text.split("\n")
                return(
                  <pre key={index}>
                    <code className='rounded-md'>
                      <div className=' border border-gray-500 rounded-md overflow-clip'>

                        <div className='relative border-b bg-gray-700 border-gray-500 py-2 px-3'>
                          <button className='absolute top-0 right-0 h-min md:pt-2 pt-1 px-3' onClick={e => handleCopy(e, obj.children[0].text)}>
                            {copyCode ? <HiOutlineClipboardCheck strokeWidth={1} stroke={'white'} size={30}/> : <HiOutlineClipboard strokeWidth={1} stroke={'white'} size={30}/>}
                          </button>
                          <div className='text-white'>
                            Code
                          </div>
                        </div>
                        
                        <div className='bg-gray-900 px-5 py-3 text-white text-sm' >
                          {temp.map((c, i) => {
                           
                            return(
                              <div className='flex gap-5' key={i}>
                                <div className='text-gray-500 select-none'>
                                  {i + 1}
                                </div>
                                <div className='grow'>
                                  {c}
                                </div>
                              </div>
                            )
                            })}
                        </div>

                      </div>
                      
                    </code>
                  </pre>
                )

            case 'class':
              return(
                <div className={obj.className}>
                  {obj.children[0].children[0].text}
                </div>
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
                  <div className='md:text-5xl text-3xl  text-blue-500 mb-8'>
                      {post.title}
                  </div>
                  <div className=' my-5 flex gap-5 '>
                    <div className='flex gap-2 items-center'>
                        <div className='rounded-full border-2 border-blue-500'>
                            <img src={post.author.photo.url} alt=""className='w-6 h-6 object-cover rounded-full' />

                        </div>
                        
                        <p className='italic text-gray-400 md:text-base text-sm'>{post.author.name}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <span className='flex items-center justify-center'>
                            <HiOutlineCalendar className='stroke-blue-500' size={35} strokeWidth={1.2}/>
                        </span>
                        <span className='italic text-gray-400 md:text-base text-sm'>
                            {moment(post.createdAt).format("DD MMM YYYY")} 
                        </span>
                    </div>
                  </div>
                  <div className='md:text-lg text-sm'>{post.excert}</div>
                  <div className='mt-5 mb-8'>
                      <img src={post.featuredImage.url} alt="" className='shadow-md rounded-md'/>
                  </div>
                  
                  
              </div>
              
              {/* content section */}

              <div className='md:text-lg text-sm text-justify'>
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




