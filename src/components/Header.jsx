import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const catergories = [
    {name: "react", slug: "react"},
    {name: "web development", slug: "web-dev"}
]

const Header = () => {
  return (
    <div className='w-screen px-10 py-5'>
        <div className='border-b border-blue-400 w-full inline-block py-8 flex justify-between'>
            <div>
                <Link to='/'>DevLog</Link>
            </div>
            <div className='flex gap-10 capitalize'>
                {catergories && catergories.map((catergory, index) => (
                    <Link to={`/catergory/${catergory.slug}`} key={index}>
                        <span>{catergory.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header