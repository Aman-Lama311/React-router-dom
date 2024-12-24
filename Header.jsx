import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='flex items-center justify-between p-7 bg-green-400 text-white'>
      <h2 className='text-3xl font-semibold'>Techunter <input className='text-black' type="text" /></h2>
      <div className='flex gap-10 text-lg'>

        <Link className='underline' to='/'>Home</Link>
        <Link className='underline' to='/about'>About</Link>
        <Link className='underline' to='/product'>Product</Link>
        <Link className='underline' to='/contact'>Contact</Link>

      </div>
    </div>
  )
}

export default Header
