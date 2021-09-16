import React from 'react';
import photo from '../assets/personalPhoto.jpg';
import { socialIcons } from '../data/data';
import Sketch from 'react-p5';
import StarsCanvas from '../utils/animateBackground';

const Home = ({ theme }) => {
  // let x = 50;
  // let y = 50;
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(
      Math.min(window.innerWidth / 2, 700),
      Math.min(window.innerWidth / 2, 700),
      p5.WEBGL
    ).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
  };

  let size = window.innerWidth / 20;
  const resize = (p5) => {
    p5.resizeCanvas(window.innerWidth / 2, window.innerWidth / 2);
    size = window.innerWidth / 20;
  };

  const draw = (p5) => {
    p5.background('rgba(00%,0%,100%,0)');
    p5.rotateX(60);
    p5.noFill();
    p5.stroke(255);

    for (var i = 0; i < size; i++) {
      const r = p5.map(p5.sin(p5.frameCount / 2), -1, 1, 100, 200);
      const g = p5.map(i, 0, 50, 100, 200);
      const b = p5.map(p5.cos(p5.frameCount), -1, 1, 200, 100);
      p5.stroke(r, g, b);

      p5.rotate(p5.frameCount / 50);

      p5.beginShape();
      for (var j = 0; j < 360; j += 90) {
        var rad = i * 3;
        var x = rad * p5.cos(j);
        var y = rad * p5.sin(j);
        var z = p5.sin(p5.frameCount * 2 + i * 5) * 50;
        p5.vertex(x, y, z);
      }
      p5.endShape(p5.CLOSE);
    }
  };
  return (
    <section className='flex flex-grow justify-start items-center mt-8 px-14 flex-col gap-4 '>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='flex flex-col'>
          <p className='text-xl md:text-2xl mb-4'>
            Welcome to my personal website! This is the second version of it,
            built with <span className='highlight-text '>React</span> and styled
            with <span className='highlight-text'>Tailwind CSS</span>.
          </p>
          <p className='text-xl md:text-2xl mb-4'>
            Currently in my sophomore year in McMaster University studying
            <span className='highlight-text'> Software Engineering</span>.
            Focused on learning full stack development.
          </p>
          <p className='text-xl md:text-2xl mb-4'>
            Reach out to me on{' '}
            <a
              href='https://www.instagram.com/calvynsg'
              target='blank'
              className='dark:hover:text-yellow-300 hover:text-white dark:hover:border-yellow-300 underline duration-200'
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
      <article className='flex flex-col gap-2 mt-8 max-w-full '>
        <Sketch
          setup={setup}
          draw={draw}
          windowResized={resize}
          className='mx-auto  max-w-full rounded-3xl overflow-hidden'
        ></Sketch>
        <p className='text-xl md:text-2xl mt-4 text-center'>
          Rendered drawing made from p5.js that I'm working on!
        </p>
      </article>
      <div className='flex-grow min-w-full'>
        <h1 className='text-3xl font-semibold text-center my-12'>
          Check these out!
        </h1>
        <div className='flex flex-wrap min-w-full'>
          <ul className='flex justify-around items-center w-full flex-col gap-4 '>
            {socialIcons.map(({ icon, desc, username, link }, index) => {
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
                      <div className='opacity-0 w-28 min-w-min bg-black text-white text-center text-xs rounded-lg py-1 absolute z-10 group-hover:opacity-75 bottom-full mb-1 right-1/2 px-1 duration-200'>
                        {username}
                      </div>
                    </span>
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
