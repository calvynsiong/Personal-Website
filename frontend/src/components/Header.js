import React, { useEffect, useState } from 'react'
import { IoSunnyOutline } from 'react-icons/io5'
import { IoPartlySunny } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import ScrollButton from './ScrollButton'

const Header = ({ currentTheme, setTheme, theme }) => {
  const [title, setTitle] = useState('')
  const [title2, setTitle2] = useState('')

  const text = 'Calvyn Siong'
  const text2 = ' 常家颖'

  const [index, setIndex] = useState(0)
  const [index2, setIndex2] = useState(0)
  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setTitle(title + text[index])
        setIndex(index + 1)
      }, 300)
    }
  }, [index])

  useEffect(() => {
    if (index2 < text2.length) {
      setTimeout(() => {
        setTitle2(title2 + text2[index2])
        setIndex2(index2 + 1)
      }, 1000)
    }
  }, [index2])

  return (
    <div className='flex justify-center items-center p-8 px-6 mb-7  flex-wrap gap-6 '>
      <ScrollButton></ScrollButton>

      <Link
        className='flex flex-wrap gap-4 transform hover:scale-110 translate-x-0 sm:hover:translate-x-8 duration-200 hover:text-yellow-700 dark:hover:text-yellow-300 '
        to='/'
      >
        <h1 className='text-4xl text-center font-semibold dark:hover:border-yellow-300  break-word'>
          {title}
        </h1>
        <h1 className='text-4xl text-center font-semibold dark:hover:border-yellow-300  break-words'>
          {title2}
        </h1>
      </Link>
      <button
        className='focus:outline-none p-2 sm:ml-auto text-center hover:text-purple-700 dark:hover:text-yellow-300'
        onClick={() => setTheme(currentTheme)}
      >
        {theme === 'light' ? (
          <IoSunnyOutline size={30} />
        ) : (
          <IoPartlySunny size={30} />
        )}
      </button>
      <nav className='min-w-full -mt-2'>
        <ul className='flex flex-wrap'>
          <li className='relative ml-2'>
            <Link to='/about' className="flex gap-2 items-end">
              <p className='nav-link flex gap-2'>About </p>
              <span>||</span>
            </Link>{' '}

          </li>
          <li className='ml-2'>
            <Link to='/skills' className="flex gap-2 items-end">
              <p className='nav-link'>Skills</p>
              <span>|| </span>
            </Link>{' '}
          </li>
          <li className='ml-2'>
            <Link to='/projects' className="flex gap-2 items-end">
              {' '}
              <p className='nav-link'>Projects</p>{' '}
              <span>||</span>
            </Link>{' '}
          </li>
          <li className='ml-2'>
            <Link to='/experiences' className="flex gap-2 items-end">
              {' '}
              <p className='nav-link'>Experiences</p>
              <span>||</span>
            </Link>{' '}
          </li>
          <li className='ml-2'>
            <Link to='/journal' >
              {' '}
              <p className='nav-link'>Journal</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
