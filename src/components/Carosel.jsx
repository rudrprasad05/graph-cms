import React from 'react'
import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import CaroCard from './CaroCard';
import { responsive } from './data';
import { gql, request } from 'graphql-request';

const Carosel = () => {
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
        image{
          url
        }
      }
    }
    `
    const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query);
    const final =  result.catergories
    return final
  }

    const product = catergories.map((item) => (
    <CaroCard
        cat={item}
        key={item.id}
        
    />
      ));
  return (
    <>

<div className="App">
      <h1>React multi carousel</h1>
      <Carousel showDots={true} responsive={responsive} className="w-4/5 mx-auto">
        {product}
      </Carousel>
    </div>

    </>
  )
}

export default Carosel