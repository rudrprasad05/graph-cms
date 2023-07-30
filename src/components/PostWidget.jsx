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
      query GetPostDetails($slug: String!, %catergories: [String!]){
        posts(
          where: { slug:not $slug, AND: {catergories_some: {slug_in: $catergories}}}
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
  
  
  return (
    <div className='rounded-md bg-gray-200  py-5 shadow-lg mb-5'>
      <h3 className='px-8'>{slug ? "Related Posts": "Recent Posts"}</h3>
      {recentPosts && recentPosts.map((post) => (
        <div key={post.slug} className="w-4/5 mx-auto bg-white">
          <div>
            <img 
              src={post.featuredImage.url} 
              alt={post.title} />
          </div>
          <div>
            {post.title}
          </div>
          
        </div>
      ))}
    </div>
  )
}

export default PostWidget