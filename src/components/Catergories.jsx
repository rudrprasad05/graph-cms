import {request,  gql } from 'graphql-request';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

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
      }
    }
    `
    const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query);
    const final =  result.catergories
    return final
  }
  return (
    <div className='rounded-md bg-gray-200  py-5 shadow-lg mb-5'>
      {catergories && catergories.map((e) => (
      
          <div key={e.id}>
            <p className='px-8'>
              {e.name}
            </p>
          </div>
      
      ))}
    </div>
  )
}

export default Catergories