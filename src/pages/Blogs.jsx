import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Catergories from '../components/Catergories.jsx'
import PostDetails from '../components/PostDetails.jsx'
import PostWidget from '../components/PostWidget.jsx'
import Author from '../components/Author.jsx'
import CommentsForm from '../components/CommentsForm.jsx'
import Comments from '../components/Comments.jsx'
import request, { gql } from 'graphql-request'

const Blogs = () => {

  const [post, setPost] = useState(null);
  const {id} = useParams()

  useEffect(() => {
    const fetchPosts = async (slug) => {
      
      const query = gql`
      query MyQuery($slug: String!) {
        post(where: { slug: $slug }){
      
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
          content{
            raw
          }
        }
      }
        
      
      `;

      const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query, {slug});

      const final =  result.post;
      
      setPost(final);
    };

    fetchPosts(id);
  }, []);
    
    
  return (
    <>
      {post && 
        <div>
          <div className='grid grid-cols-12'>
            <div className='col-span-8'>
              <PostDetails post={post}/>
              <Author author={post.author}/>
              <CommentsForm/>
              <Comments/>
            </div>
            <div className='col-span-4'>
              <div className='relative sticky top-8'>
                {post && 
                  <PostWidget catergories={post.catergories.map((catergory) => catergory.name)} slug={post.slug}/>
                }
                <Catergories />
              </div>
            </div>
          </div>
        </div>
      }
    </>
    
  )
}

export default Blogs