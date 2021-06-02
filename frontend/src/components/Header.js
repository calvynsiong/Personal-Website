import React from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoPartlySunny } from 'react-icons/io5'

const Header = ({ currentTheme, setTheme, theme }) => {
  return (
    <div className='flex justify-center align-center p-4 pt-8 flex-wrap'>
      <h1 className='text-4xl text-center font-semibold'>Calvyn Siong</h1>
      <button
        className='focus:outline-none p-2 ml-auto'
        onClick={() => setTheme(currentTheme)}
      >
        {theme === 'light' ? (
          <IoSunnyOutline size={30} />
        ) : (
          <IoPartlySunny size={30} />
        )}
      </button>
      <nav className='min-w-full'>
        <ul>
          <li>Home</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
