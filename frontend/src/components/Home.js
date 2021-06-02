import React from 'react'
import photo from '../assets/personalPhoto.jpg'
import { socialIcons } from '../data/data'

const Home = ({ theme }) => {
  return (
    <section className='flex flex-grow justify-start items-center mt-8 px-8 flex-col gap-4 '>
      <div className='flex flex-col'>
        <p className='text-xl mb-4'>
          Welcome to my personal website! This is the second version of it,
          built with <span className="text-2xl text-yellow-600 dark:text-purple-500">React</span> and styled with <span className="text-2xl text-yellow-600   dark:text-purple-500">Tailwind CSS</span>.
        </p>
        <p className='text-xl mb-4'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab optio
          tempore qui nemo architecto voluptates facere et earum ipsum
          obcaecati.
        </p>
      </div>
      <img
        src={photo}
        alt='Personal photo'
        className='w-40 rounded-3xl ml-4 mt-4'
      />
      <div className='flex-grow min-w-full'>
        <h1 className='text-3xl font-semibold text-center my-12'>
          Check these out!
        </h1>
        <div className='flex flex-wrap min-w-full'>
          <ul className='flex justify-around items-center w-full flex-col gap-4 '>
            {socialIcons.map(({ icon, desc, username, link }) => {
              return (
                <a href={link} target='blank'>
                  <li
                    className={`group flex relative list-none mb-6 cursor-pointer gap-3 hover:${
                      theme === 'light' ? `text-purple-900` : `text-black`
                    }`}
                  >
                    {icon}
                    <span className='text-xl relative'>
                      {desc}
                      <div class='opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-1 absolute z-10 group-hover:opacity-75 bottom-full mb-1 right-1/2 px-1 pointer-events-none duration-200'>
                        {username}
                      </div>
                    </span>
                  </li>
                </a>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Home
