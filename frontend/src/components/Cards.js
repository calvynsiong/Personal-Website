import React from 'react'

const Cards = ({ project }) => {
  return (
    <div className=' z-40 p-3 mt-10 w-full xs:w-96  grid grid-cols-1 auto-rows-auto cursor-default select-none rounded bg-blue-400 dark:bg-gray-900 shadow-lg min-h-full xs:h-96'>
      <div className='font-semibold row-span-1 text-xl mb-2 ml-2 text-gray-900 dark:text-white'>
        {project.name}
      </div>
      <div className='row-span-1'>
        {project.live ? (
          <button className='transform mouse-pointer bg-gray-900 text-sm text-white mx-2 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 hover:scale-90   focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none'>
            <a href={project.live} target='blank'>
              Live / Demo
            </a>{' '}
          </button>
        ) : null}

        <button className='transform mouse-pointer inline-block h-8 bg-gray-900 text-sm text-white px-2 py-1 mx-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600  hover:scale-90 dark:focus:bg-gray-600 focus:outline-none'>
          <a href={project.url} target='blank'>
            Code
          </a>
        </button>
      </div>
      <div className='my-2 mx-2 mr-5'>
        <p className='text-gray-900 dark:text-white text-md row-span-4'>
          {project.desc}
        </p>
      </div>
      <div>
        <div className='font-semibold text-lg ml-2 row-span-1'>Tech Stack:</div>
        <div className='flex flex-wrap ml-2 row-span-1'>
          <p className='text-lg'>{project.stack}</p>
        </div>
      </div>
      <img
        className='rounded-full object-contain w-24 h-24 self-center mx-auto row-span-5'
        src={project.img}
        alt={project.name}
      ></img>
    </div>
  )
}

export default Cards
