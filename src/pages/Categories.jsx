import request, { gql } from 'graphql-request'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams } from 'react-router-dom'
import CategoryCards from '../components/CategoryCards'

const Categories = () => {
    const {id} = useParams()

    const [categories, setCategories] = useState(null);
    const [blogs, setblogs] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
        
        const query = gql`
        query MyQuery {
            posts(where: {catergories_every: {}}) {
              id
              title
              catergories {
                name
              }
              slug
              createdAt
              author {
                name
              }
              featuredImage {
                url
              }
            }
          }
        `;

        const result = await request("https://api-ap-southeast-2.hygraph.com/v2/clkgnwzex6dki01t420aqfil3/master", query);

        const final =  result;
        
        
        setCategories(final);
  
        };

        fetchProducts();
    }, []);

 

    return (
        <>

            <Helmet>
                <title>{id}</title>
            </Helmet>

            {categories && categories.posts.map((a) => 
                a.catergories.map((b, i) => 
                    b.name == id ? <CategoryCards post={a} postKey={i}/> : <div></div>
            ))}
        
        </>
    
  )
}

export default Categories