import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { gql,request } from 'graphql-request';

const PostWidget = ({ catergories, slug}) => {
  
  const [recentPosts, setRecentPosts] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState(null)

  useEffect(() => {
    if(slug){
      getSimilarPosts(catergories, slug)
        .then((result) => setRelatedPosts(result))
      
    }else{
      getRecentPosts()
        .then((result) => setRecentPosts(result))
      
    }

  }, [slug])

  const getRecentPosts = async() => {
    const query = gql`
    query GetPostDetails() {
      posts(
        orderBy: createdAt_ASC
        last: 3

      ){
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
    `
    const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query);
    const final =  result.posts;
    return final
  }

  const getSimilarPosts = async(catergories, slug) => {
    const query = gql`
    query MyQuery ($slug: String!, $catergories: [String!]){
      posts(where: { slug_not: $slug, AND: { catergories_some: { slug_in: $catergories } } } ){
        title
        createdAt
        featuredImage {
          url
        }
        slug
      }
    }
    `
    const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query, {catergories, slug});
    const final =  result.posts;

    return final
  }
  
  
  return (
    <div className='rounded-md bg-gray-200  py-5 shadow-lg mb-5'>
      <h3 className='px-8 pb-2'>{slug ? "Related Posts": "Recent Posts"}</h3>
      {recentPosts && recentPosts.map((post) => (
        <div key={post.slug} className="w-4/5 mx-auto bg-white relative">
          <div className='absolute top-0 left-0'>
            <img 
              src={post.featuredImage.url} 
              alt={post.title} 
            />
          </div>
          <div className=''>
            {post.title}
          </div>
          
        </div>
      ))}

      {relatedPosts && relatedPosts.map((post) => (
        <div key={post.slug} className="w-4/5 mx-auto  relative bg-black rounded-md overflow-clip">
          <div className=''>
            <img 
              src={post.featuredImage.url} 
              alt={post.title} 
              className='opacity-50 object-cover w-full h-full rounded-md hover:scale-125 transition'/>
          </div>
          
          <div className='absolute left-0 w-full text-center py-2 text-white top-1/2 -translate-y-2/4'>
            {post.title}
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default PostWidget