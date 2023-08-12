import {request,  gql } from 'graphql-request';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

import { selectIcon } from './SelectIcon';

const Catergories = () => {

  const [catergories, setCatergories] = useState([])

  useEffect(() => {
    getCatergories().then((newCats) => setCatergories(newCats))
  }, [])

  const getCatergories = async() => {
    const query = gql`
    query MyQuery {
      catergories {
        id
        name
        slug
      }
    }
    `
    const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query);
    const final =  result.catergories
    
    return final
  }
  return (
    <>
      
      <div className='rounded-md bg-blue-300 py-5 shadow-lg mb-5 px-8'>
        <div className='mb-2 text-xl ' >Categories</div>
        <div className='grid grid-cols-5 gap-2 text-center '>
          {catergories && catergories.map((e, index) => selectIcon(e, index))}
        </div>
        
      </div>  
    
    </>
    
  )
}

export default Catergories