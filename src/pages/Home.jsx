import React from 'react'
import PostCard from '../components/PostCard'
import Carosel from '../components/Carosel'
import FeaturedPosts from '../components/FeaturedPosts'

import { useEffect } from 'react'
import { useState } from 'react'

import  { request, gql } from 'graphql-request'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'



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
                id
              }
              isFeatured
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

      <div className="grid md:grid-cols-10 grid-cols-1 w-4/5 mx-auto md:gap-16 gap-5">

          <div className="md:col-span-6 h-full">
            {products && products.slice(0, 1).map((post, index) => <PostCard post={post} key={index}/> )}
          </div>

          <div className="md:col-span-4 md:grid grid md:grid-rows-2 md:gap-10 gap-5 md:rows-1">
            <div className='md:row-span-1'>
              {products && products.slice(1, 2).map((post, index) => <PostCard post={post} key={index}/> )}
            </div>
            <div className='md:row-span-1'>
            {products && products.slice(2, 3).map((post, index) => <PostCard post={post} key={index}/> )}
            </div>
            
          </div>
          
      </div>


      <Carosel/>

      <p className='text-4xl pb-5 w-4/5 mx-auto'>Featured Blogs</p>
      {products && products.map((post, index) => 
      (<div>
        {post.node.isFeatured ? <FeaturedPosts post={post}/> : <p></p>}
      </div>)
      )}
      <Footer/>
    </>
    
    
  )
}

export default Home