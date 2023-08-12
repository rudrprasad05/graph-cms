import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    
    const [date, setDate] = useState("")
    useEffect(() => {
        const d = new Date()
        setDate(d.getFullYear())
    })
  return (
    <footer className='w-screen bg-blue-500 py-2'>
        <div className='w-4/5 mx-auto flex text-blue-50 justify-between'>
            
            <div>
                <p className='text-lg'>Quick Links</p>
                <div className='text-gray-300'>
                    <Link to={'/'}>Home</Link> 
                </div>
                <div className='text-gray-300'>
                    <Link to={'/'}>About</Link> 
                </div>
                <div className='text-gray-300'>
                    <Link to={'/category'}>Categories</Link> 
                </div>
            </div>
            <div>
                <p className='text-lg'>Contact</p>
                <div className='text-gray-300'>
                    <a href="tel:6798397171">Mobile</a>
                </div>
                <div className='text-gray-300'>
                    <a href="mailto:rudrprasad@yahoo.com">Email</a>
                </div>
                <div className='text-gray-300'>
                    <Link to={'https://www.instagram.com/_._.rudr._._'}>Instagram</Link>
                </div>
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
        <p className='text-center text-white text-lg pt-2'>Procyon Web Development &#169; {date}</p>
    </footer>
  )
}

export default Footer