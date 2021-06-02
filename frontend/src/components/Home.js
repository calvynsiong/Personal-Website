import React from 'react'
import photo from '../assets/personalPhoto.jpg'

const Home = () => {
  return (
    <div className='flex flex-grow justify-start items-center mt-8 px-8 flex-col sm:flex-row gap-4 sm:items-start'>
      <div className='flex flex-col'>
        <p className='text-xl mb-4'>
          Welcome to my personal website! It is the second iteration, built with
          React and styled with Tailwind CSS.
        </p>
        <p className='text-xl mb-4'>
          Welcome to my personal website! It is the second iteration, built with
          React and styled with Tailwind CSS.
        </p>
        <p className='text-xl'>
          Welcome to my personal website! It is the second iteration, built with
          React and styled with Tailwind CSS.
        </p>
      </div>
      <img
        src={photo}
        alt='Personal photo'
        className='w-40 rounded-3xl ml-4 mt-4'
      />
    </div>
  )
}

export default Home
