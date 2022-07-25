import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { IoSunny, IoMoon } from "react-icons/io5";

import { ThemeContext } from '../utils/context';

const Header =()=> {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleChangeTheme =(mode)=> {
    setTheme(mode);
  };
    return (
    <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-zinc-800 flex justify-between">
      <Link to='/' className='text-white'>Header</Link>
      {theme ==='dark'? (
      <IoSunny
      color='#fff'
      size={30}
      onClick={()=>handleChangeTheme('light')} />):
      (<IoMoon color='#fff' size={30} onClick={()=>handleChangeTheme('dark')}/>)}
      <Link to='/test' className='text-white'>TEST PAGE</Link>
    </nav>
    )
  };
export default  Header;
