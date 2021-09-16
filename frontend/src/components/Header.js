import React, { useEffect, useState } from 'react';
import { IoSunnyOutline } from 'react-icons/io5';
import { IoPartlySunny } from 'react-icons/io5';
import { BsCodeSlash } from 'react-icons/bs';
import { HiDesktopComputer } from 'react-icons/hi';
import { CgWorkAlt } from 'react-icons/cg';

import { Link } from 'react-router-dom';

import ScrollButton from './ScrollButton';
import { AiFillBook, AiOutlineInfoCircle } from 'react-icons/ai';

const Header = ({ currentTheme, setTheme, theme, speed, setSpeed }) => {
  const [title, setTitle] = useState('');
  const [title2, setTitle2] = useState('');

  const text = 'Calvyn Siong';
  const text2 = ' 常家颖';

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  useEffect(() => {
    if (index < text.length) {
      setTimeout(() => {
        setTitle(title + text[index]);
        setIndex(index + 1);
      }, 300);
    }
  }, [index]);

  useEffect(() => {
    if (index2 < text2.length) {
      setTimeout(() => {
        setTitle2(title2 + text2[index2]);
        setIndex2(index2 + 1);
      }, 1000);
    }
  }, [index2]);

  return (
    <div className='flex justify-center items-center p-8 px-6 mb-7  flex-wrap gap-6 '>
      <ScrollButton></ScrollButton>

      <Link
        className='flex gap-4 transform hover:scale-110 translate-x-0 sm:hover:translate-x-8 duration-200 hover:text-white dark:hover:text-yellow-300 '
        to='/'
      >
        <h1 className='text-4xl text-center font-semibold dark:hover:border-yellow-300  break-word'>
          {title}
        </h1>
        <h1 className='text-4xl text-center font-semibold dark:hover:border-yellow-300  break-words'>
          {title2}
        </h1>
      </Link>
      <div className='flex flex-wrap gap-4 sm:ml-auto '>
        {currentTheme !== 'dark' && (
          <>
            {speed < 0.001 * 1.3 * 7 ? (
              <button
                className='focus:outline-none p-2 text-center hover:text-yellow-600 transform dark:hover:text-yellow-300 cursor-pointer'
                onClick={() => {
                  setSpeed((prevSpeed) => prevSpeed * 1.3);
                  console.log(speed);
                }}
              >
                Speed up
              </button>
            ) : (
              <p className='p-3'>Ok, that's enough</p>
            )}
            <p className='p-3'>Current speed: {speed.toFixed(4)}</p>
            <button
              className='focus:outline-none p-2 text-center hover:text-yellow-600 transform dark:hover:text-yellow-300 cursor-pointer'
              onClick={() => setSpeed((prevSpeed) => (prevSpeed * 2) / 3)}
            >
              Slow Motion
            </button>
          </>
        )}
        <button
          className='focus:outline-none p-2 text-center hover:text-yellow-600 transform hover:rotate-12 dark:hover:text-yellow-300 cursor-pointer'
          onClick={() => setTheme(currentTheme)}
        >
          {theme === 'light' ? (
            <IoSunnyOutline size={30} />
          ) : (
            <IoPartlySunny size={30} />
          )}
        </button>
      </div>
      <nav className='min-w-full -mt-2'>
        <ul className='flex flex-wrap justify-center'>
          {(width > breakpoint
            ? [
                { title: 'About' },
                { title: 'Skills' },
                { title: 'Projects' },
                { title: 'Experiences' },
                { title: 'Journal' },
              ]
            : [
                { title: 'About', icon: <AiOutlineInfoCircle size={30} /> },
                { title: 'Skills', icon: <BsCodeSlash size={30} /> },
                {
                  title: 'Projects',
                  icon: (
                    <HiDesktopComputer
                      className='text-white'
                      size={30}
                    ></HiDesktopComputer>
                  ),
                },
                {
                  title: 'Experiences',
                  icon: <CgWorkAlt size={30}></CgWorkAlt>,
                },
                { title: 'Journal', icon: <AiFillBook size={30} /> },
              ]
          ).map((section, index) => {
            return (
              <li key={index} className='relative ml-2'>
                <Link
                  title={`${section.title}`}
                  to={`/${section.title.toLowerCase()}`}
                  className={`flex gap-2`}
                >
                  <h1
                    className={`nav-link hover:border-b-4 focus:border-b-4 hover:border-white focus:border-white duration-100 hover:text-white focus:text-white dark:hover:text-yellow-300 dark:focus:text-yellow-300 dark:hover:border-yellow-300 text-sm xs:text-2xl md:text-3xl lg:text-4xl p-3 flex gap-2  ${
                      width < breakpoint && `p-2`
                    }`}
                  >
                    {section?.icon ?? section.title}{' '}
                  </h1>
                  {index === 4 || width < breakpoint ? null : (
                    <span className='text-sm xs:text-2xl md:text-3xl lg:text-4xl pt-3'>
                      ⋅
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
