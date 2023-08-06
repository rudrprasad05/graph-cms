import React from 'react'
import PostCard from '../components/PostCard'
import Catergories from "../components/Catergories"
import PostWidget from "../components/PostWidget"

import { useEffect } from 'react'
import { useState } from 'react'

import  { request, gql } from 'graphql-request'
import { Helmet } from 'react-helmet'
import Carosel from '../components/Carosel'

const Home = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      
      const query = gql`
      query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excert
              featuredImage {
                url
              }
              catergories {
                name
                slug
              }
            }
          }
        }
      }
      `;

      const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query);

      const final =  result.postsConnection.edges;
      
      setProducts(final);
    };

    fetchProducts();
  }, []);
  return (
   
    <>
      <Helmet 
        title='Home'
      />

      <div className="grid grid-cols-10 w-4/5 mx-auto gap-16">

          <div className="col-span-6 h-full">
            {products && products.slice(0, 1).map((post, index) => <PostCard post={post} key={index}/> )}
          </div>

          <div className="col-span-4 grid grid-rows-2 gap-10">
            <div className='row-span-1'>
              {products && products.slice(1, 2).map((post, index) => <PostCard post={post} key={index}/> )}
            </div>
            <div className='row-span-1'>
            {products && products.slice(2, 3).map((post, index) => <PostCard post={post} key={index}/> )}
            </div>
            
          </div>
          
      </div>

      <Carosel/>
    </>
    
    
  )
}

export default Home