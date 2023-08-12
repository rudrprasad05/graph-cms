import request, { gql } from 'graphql-request'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useParams, useSearchParams } from 'react-router-dom'
import CategoryCards from '../components/CategoryCards'

import { HiSearch, HiX } from 'react-icons/hi'

const Categories = () => {
    const {id} = useParams()
    const [searchParam, setSearchParam] = useSearchParams()

    const [categories, setCategories] = useState(null);
    const [search, setSearch] = useState("")

    const [tagState, setTagState] = useState(false)
    const [taggedTag, settaggedTag] = useState("")
    const [tagName, setTagName] = useState(searchParam.get('query'))
    const [tagID, settagID] = useState(searchParam.get('id'))

    const [numberOfItemsSearched, setnumberOfItemsSearched] = useState(0)
    const displayCount = (search, array) => {
      console.log(search, array)
      
      
     
    }

    const handleTagClick = (event, id, name) => {
      if(!tagState || id!=tagID ){
        setTagState(true)
        settagID(id)
        setTagName(name)
        setSearchParam(`query=${name}&id=${id}`)
      }
    
      else{
        setTagState(false)
        settaggedTag(id)
        setTagName("")
        settagID(``)
        setSearchParam(``)
      }
      
      
    }


    const setSearchFunction = (event) => {
      setSearch(event.target.value)
      setTagState(false)
      settaggedTag(id)
      setTagName("")
      setSearchParam(``)
    }

   
  
    useEffect(() => {
      if(searchParam.get('query')){
        setTagName(searchParam.get('query'))
        setTagState(true)
   
        
      }
     
        const fetchProducts = async () => {
        
        const query = gql`
        query MyQuery {
            catergories {
              id
              name
            }
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
                <title>{`${tagName ? tagName : ""} blogs`}</title>
            </Helmet>
            {!id ? (
            <div className='w-4/5 mx-auto '>
              <h1 className='text-center text-5xl text-blue-500'>Categories</h1>
              <div className='flex  mt-10 mb-5 '>
                <div className='flex grow gap-5 items-center '>
                  <p>Tags: </p>
                 
                  {categories && categories.catergories.map((item, index) => {
                    return(
                      <button 
                        key={item.id}
                        className={`${tagState && tagID == item.id ? "text-blue-500" : "text-black"} rounded-full border-2 flex gap-2 items-center px-4 py-1 ${tagState ? (tagID == item.id ? "border-blue-500" : "border-gray-500") : "border-gray-500"}`}
                        onClick={e => handleTagClick(e, item.id, item.name)}>
                        {item.name}
                        {(tagState && tagID == item.id) ?  
                          <div><HiX color='#fda4af'/></div> : ""}
                      </button>
                    )
                  })}
                  
                </div>
                <div className='items-center border-2 rounded-md e border-blue-200 px-5 py-2 flex'>
                  <input 
                    type="text" 
                    placeholder='Search Category'
                    className='focus:outline-none'
                    value={search}
                    onChange={e => setSearchFunction(e)}
                  />
                  <HiSearch color='#3b82f6' className='stroke-blue-500'/>
                </div>
              </div>

              
              
            </div>
            ) : (
              <div className='capitalize text-center text-5xl text-blue-500'>
                {id} Blogs
              </div>
            )}
            
            <div className='grid md:grid-cols-2  grid-cols-1 gap-10 w-4/5 mx-auto relative'>
              
              {!tagName && categories && categories.posts.filter((item) => {
        
                const temptitle = item.title.toLowerCase()
                return search.toLowerCase() === "" ? item : temptitle.includes(search)
                
              }).map((a, i, row) => {
                if(i + 1 == row.length){
                  displayCount(search, row)
                }
                return(
                  <CategoryCards post={a} postKey={i} search={search} array={row}/>
                )
              }
              )}


              {tagName && categories && categories.posts.filter((item) => {
              
                const temptitle = item.catergories.map((e)=>e.name.toLowerCase())
              
                if(temptitle.includes(tagName.toLowerCase())){
                  return item
                }
                else{
                  return ""
                }

              }).map((a, i, row) => <CategoryCards post={a} postKey={i} search={tagName} array={row}/>
              )}
              
            </div>
            
        
        </>
    
  )
}


export default Categories