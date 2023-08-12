import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Catergories from '../components/Catergories.jsx'
import PostDetails from '../components/PostDetails.jsx'
import PostWidget from '../components/PostWidget.jsx'
import Author from '../components/Author.jsx'
import CommentsForm from '../components/CommentsForm.jsx'
import Comments from '../components/Comments.jsx'
import request, { gql } from 'graphql-request'
import { Helmet } from 'react-helmet'

import { motion, useScroll, useSpring } from "framer-motion";
import Footer from '../components/Footer.jsx'


const Blogs = () => {

  const [post, setPost] = useState(null);
  const {id} = useParams()
  const [idState, setidState] = useState(id)

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

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
  }, [id]);
    
    
  return (
    <>
      <Helmet>
        {post && <title>{post.title}</title>}
      </Helmet>
      <motion.div className="progress-bar fixed top-0 left-0 " style={{ scaleX }}/>
      {post && 
        <div className='w-4/5 mx-auto text'>

          <div className='grid grid-cols-12 gap-20'>
            <div className='col-span-8'>
              <PostDetails post={post}/>
              {/* <Author author={post.author}/> */}
              {/* <CommentsForm slug={post.slug}/>
              <Comments slug={post.slug}/> */}
            </div>

            <div className='col-span-4 hidden md:block'>
              <div className='relative sticky top-8 pb-12'>
                {post && 
                  <PostWidget catergories={post.catergories.map((catergory) => catergory.name)} slug={post.slug}/>
                }
                <Catergories />
              </div>
            </div>

          </div>
        </div>
      }
      <Footer/>
    </>
    
  )
}

export default Blogs