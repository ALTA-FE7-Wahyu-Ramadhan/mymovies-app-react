import React from 'react'
import { Link } from 'react-router-dom';
import { IoSunny } from "react-icons/io5";

const Header =()=> {
    return (
    <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-zinc-800 flex justify-between">
      <Link to='/' className='text-white'>Header</Link>
      <IoSunny color='#fff' size={30}/>
      <Link to='/test' className='text-white'>TEST PAGE</Link>
    </nav>
    )
  };
export default  Header;
