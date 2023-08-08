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

        {/* carousel */}
        <div className="w-4/5 mx-auto my-20">
          <p className='text-4xl pb-5'>Browse Our Categories</p>
          <Carousel 
            additionalTransfrom={0}
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            autoPlaySpeed={3000}
            centerMode={false}

            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={true}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {product}
          </Carousel>
        </div>
      
      </div>

    </>
  )
}

export default Carosel