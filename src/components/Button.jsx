import React from 'react'

const Button =(onClick, type, label)=> {
    return (
    <button className='text-white text-lg bg-neutral-500 dark:bg-zinc-800 rounded-md p-2' onClick={onClick} type={type}>{label}</button>
    )
  };


export default Button;