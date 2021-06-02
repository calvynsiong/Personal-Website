import React from 'react'

const Header = ({ currentTheme, setTheme, theme }) => {
  return (
    <div className='flex justify-center align-center p-4 pt-8'>
      <h1 className='text-4xl text-center font-semibold'>Calvyn Siong</h1>
      <button
        className='focus:outline-none p-2 ml-auto'
        onClick={() => setTheme(currentTheme)}
      >
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>
    </div>
  )
}

export default Header
