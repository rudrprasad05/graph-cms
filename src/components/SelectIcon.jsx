import React from 'react'

import { DiCss3, DiHtml5, DiJava, DiCode, DiReact } from 'react-icons/di'
import { Link } from 'react-router-dom'

export const selectIcon = (key, index) => {
    key.name=key.name.toLowerCase()
    switch (key.name) {
        case "html":
            return (
                <Link to={`/category/?query=${key.slug}&id=${key.id}`}>
                    <div key={index}>
                
                        <DiHtml5 size={30} className="mx-auto stroke-blue-500"/>
                        <div className='text-xs'>HTML</div>
                    </div>
                </Link>
            
            )
        case "css": 
            return(
                <Link to={`/category/?query=${key.slug}&id=${key.id}`}>
                    <div className='' key={index}>
                        <DiCss3 size={30} className="mx-auto stroke-blue-500"/>
                        <div className='text-xs text-center'>CSS</div>
                    </div>
                </Link>
           
            ) 
        case "java": 
            return(
                <Link to={`/category/?query=${key.slug}&id=${key.id}`}>
                    <div className='' key={index}>
                        <DiJava size={30} className="mx-auto stroke-blue-500"/>
                        <div className='text-xs text-center'>Java</div>
                    </div>
                </Link>
                
                ) 
        case "c++": 
            return(
                <Link to={`/category/?query=C++&id=${key.id}`}>
                    <div className='' key={index}>
                        <DiCode size={30} className="mx-auto stroke-blue-500"/>
                        <div className='text-xs text-center'>C++</div>
                    </div>
                </Link>
                
                ) 
        case "react": 
            return(
                <Link to={`/category/?query=${key.slug}&id=${key.id}`}>
                    <div className='' key={index}>
                        <DiReact size={30} className="mx-auto stroke-blue-500"/>
                        <div className='text-xs text-center'>React</div>
                    </div>
                </Link>
                
                ) 
        
        default:
            break;
    }
}

const SelectIcon = () => {
    
  return (
    <div></div>
  )
}

export default SelectIcon