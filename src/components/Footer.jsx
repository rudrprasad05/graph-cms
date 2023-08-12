import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-screen bg-blue-500'>
        <div className='w-4/5 mx-auto flex text-blue-50'>
            <div>
                <p className='text-lg'>Quick Links</p>
                <div className='text-gray-300'>Home</div>
                <div className='text-gray-300'>Blogs</div>
                <div className='text-gray-300'>Categories</div>
            </div>
            <div>
                <p className='text-lg'>Contact</p>
                <div className='text-gray-300'>Home</div>
                <div className='text-gray-300'>Blogs</div>
                <div className='text-gray-300'>Categories</div>
            </div>
            <div>
                <p className='text-lg'>Popular</p>
                <div className='text-gray-300'>
                    <Link to={'/category/?query=react&id=clkz13xg62v800c1a6fchnihl'}>React</Link> 
                </div>
                <div className='text-gray-300'>
                    <Link to={'/category/?query=java&id=clkz17ms02vx60b19c44p1bf0'}>Java</Link> 
                </div>
                <div className='text-gray-300'>
                    <Link to={'/category/?query=C++&id=clkz1huxj2vez0c1agtsg4fbv'}>C++</Link> 
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer