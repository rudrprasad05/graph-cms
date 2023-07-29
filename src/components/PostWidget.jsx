import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';

const PostWidget = ({ catergories, slug}) => {

  const [products, setProducts] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState(null)

  useEffect(() => {
    if(slug){
      getSimilarPosts(catergories, slug)
        .then((result) => setRelatedPosts(result))
      
    }else{
      getRecentPosts()
        .then((result) => setProducts(result))
    }
  })

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

  
  
  return (
    <div>

    </div>
  )
}

export default PostWidget