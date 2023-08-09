import {request,  gql } from 'graphql-request';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { DiCss3, DiHtml5, DiJava, DiCode, DiReact } from 'react-icons/di'

const Catergories = () => {

  const [catergories, setCatergories] = useState([])

  const selectIcon = (key) => {
    switch (key) {
        case "HTML":
            return (
            <div>
                <DiHtml5 size={30} className="mx-auto"/>
                <div className='text-xs'>HTML</div>
            </div>
            )
        case "CSS": 
            return(
            <div className=''>
                <DiCss3 size={30} className="mx-auto"/>
                <div className='text-xs text-center'>CSS</div>
            </div>
            ) 
        case "Java": 
            return(
                <div className=''>
                    <DiJava size={30} className="mx-auto"/>
                    <div className='text-xs text-center'>Java</div>
                </div>
                ) 
        case "C++": 
            return(
                <div className=''>
                    <DiCode size={30} className="mx-auto"/>
                    <div className='text-xs text-center'>C++</div>
                </div>
                ) 
        case "React": 
            return(
                <div className=''>
                    <DiReact size={30} className="mx-auto"/>
                    <div className='text-xs text-center'>React</div>
                </div>
                ) 
        
        default:
            break;
    }
}

  useEffect(() => {
    getCatergories().then((newCats) => setCatergories(newCats))
  }, [])

  const getCatergories = async() => {
    const query = gql`
    query MyQuery {
      catergories {
        id
        name
      }
    }
    `
    const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query);
    const final =  result.catergories
    return final
  }
  return (
    <>

      <div className='rounded-md bg-gray-200  py-5 shadow-lg mb-5 grid grid-cols-5 gap-5 text-center p-5'>
        {catergories && catergories.map((e) => selectIcon(e.name))}
      </div>  
    
    </>
    
  )
}

export default Catergories