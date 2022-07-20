import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
    <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-zinc-800 flex justify-between">
      <Link to='/' className='text-white'>Header</Link>
      <Link to='/test' className='text-white'>TEST PAGE</Link>
    </nav>
    )
  }
}
