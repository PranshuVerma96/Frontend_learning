import React from 'react'


const Navbar = ({cart}) => {
  return (
    <nav className=' fixed top-0 left-0  z-50 flex items-center justify-between bg-slate-800 px-6 py-4 w-full shadow-md text-white'>
  <div className='font-bold text-lg text-indigo-400'>Brand</div>
  <div className='flex gap-8 font-medium'>
    <a href="#" className='hover:text-indigo-300'>Home</a>
    <a href="#" className='hover:text-indigo-300'>About</a>
    <a href="#" className='hover:text-indigo-300'>Contact</a>
    <a href="#" className='hover:text-indigo-300'>Card Item {cart}</a>
  </div>
</nav>
  )
}

export default Navbar