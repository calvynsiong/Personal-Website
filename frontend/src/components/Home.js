import React from 'react'
import photo from '../assets/personalPhoto.jpg'
import { socialIcons } from '../data/data'

const Home = ({ theme }) => {
  return (
    <section className='flex flex-grow justify-start items-center mt-8 px-8 flex-col gap-4 '>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex flex-col'>
          <p className='text-xl md:text-2xl mb-4'>
            Welcome to my personal website! This is the second version of it,
            built with{' '}
            <span className='highlight-text '>
              React
            </span>{' '}
            and styled with{' '}
            <span className='highlight-text'>
              Tailwind CSS
            </span>
            .
          </p>
          <p className='text-xl md:text-2xl mb-4'>
            Currently in my sophomore year in McMaster University studying
            <span className="highlight-text"> Software Engineering</span>. Focused on learning full stack development.
          </p>
          <p className='text-xl md:text-2xl mb-4'>
            Reach out to me on{' '}
            <a
              href='https://www.instagram.com/calvynsg'
              target="blank"
              className='dark:hover:text-yellow-300 dark:hover:border-yellow-300 underline'
            >
              Instagram
            </a>
            !
          </p>
        </div>
        <img
          src={photo}
          alt='Calvyn Siong.'
          className='w-40 rounded-3xl ml-4 mt-4'
        />
      </div>
      <div className='flex-grow min-w-full'>
        <h1 className='text-3xl font-semibold text-center my-12'>
          Check these out!
        </h1>
        <div className='flex flex-wrap min-w-full'>
          <ul className='flex justify-around items-center w-full flex-col gap-4 '>
            {socialIcons.map(({ icon, desc, username, link },index) => {
              return (
                <a href={link} key={index} target='blank'>
                  <li
                    className={`group flex  hover:animate-bounce relative list-none mb-6 cursor-pointer gap-3 hover:${
                      theme === 'light' ? `text-purple-900` : `text-black`
                    }`}
                  >
                    {icon}
                    <span className='text-xl relative'>
                      {desc}
                      <div class='opacity-0 w-28 min-w-min bg-black text-white text-center text-xs rounded-lg py-1 absolute z-10 group-hover:opacity-75 bottom-full mb-1 right-1/2 px-1 duration-200'>
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
