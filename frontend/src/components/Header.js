import React from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoPartlySunny } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = ({ currentTheme, setTheme, theme }) => {
  return (
    <div className='flex justify-center align-center p-8 flex-wrap'>
      <h1 className='text-4xl text-center font-semibold hover:text-yellow-700 dark:hover:text-yellow-300 dark:hover:border-yellow-300 transform hover:scale-110 hover:translate-x-6 duration-200

'>
        <Link to='/'>Calvyn Siong</Link>
      </h1>
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
      <nav className='min-w-full mt-4'>
        <ul className='flex flex-wrap '>
          <li className='relative'>
            <Link to='/about'>
              <p className='nav-link'>
                About
              </p>
            </Link>{' '}
            <span>||</span>
          </li>
          <li className='ml-2'>
            <Link to='/skills'>
              <p className='nav-link'>
                Skills
              </p>
            </Link>{' '}
            <span>|| </span>
          </li>
          <li className='ml-2'>
            <Link to='/projects'>
              {' '}
              <p className='nav-link'>
                Projects
              </p>{' '}
            </Link>{' '}
            <span>||</span>
          </li>
          <li className='ml-2'>
            <Link to='/experiences'>
              {' '}
              <p className='nav-link'>
                Experiences
              </p>
            </Link>{' '}
            <span>||</span>
          </li>
          <li className='ml-2'>
            <Link to='/journal'>
              {' '}
              <p className='nav-link'>
                Journal
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
