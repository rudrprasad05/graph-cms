import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {HiCode} from 'react-icons/hi'

const catergories = [
    {name: "react", slug: "react"},
    {name: "HTML", slug: "html"}
]

const Header = () => {
  return (
    <nav className='w-screen bg-blue-500 text-blue-50 mb-10 border-b-2 border-blue-200'>
        <div className='border-b border-blue-400 w-4/5 mx-auto inline-block py-8 flex justify-between'>
            <div className='text-3xl flex gap-2'>
                <HiCode className='my-auto'/>
                <Link to='/'>DevLog</Link>
            </div>
            <div className='flex gap-10 capitalize text-xl'>
                <Link to={'/category'}>Categories</Link>
            </div>
        </div>
    </nav>
  )
}

export default Header