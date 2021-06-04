import {
  FaGithub,
  FaLinkedin,
  FaStickyNote,
  FaWix,
  FaPython,
  FaReact,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGit
} from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNetlify
} from 'react-icons/si'
import matlab from '../assets/matlab.png'
import express from '../assets/express.png'

export const skills = [
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Languages'],
    name: 'Python',
    icon: <FaPython size={30} />,
    desc:
      'As my first programming language, I am most experienced in Python. I am knowledgable with concepts such as simple data structures (dictionaries, lists, tuples), list comprehension, functions, error handling and object oriented programming. I have also utilised different Python packages such as OpenCV, Matplotlib, NumPy and Mediapipe. I plan to learn Django in the future.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Framework/Libraries', 'Web Dev'],
    name: 'React',
    icon: <FaReact size={30} />,
    desc: 'Helloaaa world'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev'],
    name: 'HTML',
    icon: <FaHtml5 size={30} />,
    desc: 'Ayo '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev'],
    name: 'CSS',
    icon: <FaCss3Alt size={30} />,
    desc: 'Ayo '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Languages', 'Web Dev'],
    name: 'JavaScript',
    icon: <SiJavascript size={30} />,
    desc: 'Ayo '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Languages'],
    name: 'Matlab',
    icon: (
      <img
        src={matlab}
        alt='Matlab'
        className='w-8 h-8 object-cover rounded-full'
      />
    ),
    desc: 'Ayo world'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Tools', 'Web Dev'],
    name: 'MongoDB',
    icon: <SiMongodb size={30} />,
    desc: 'Ayo '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Framework/Libraries', 'Web Dev'],
    name: 'Node.js',
    icon: <FaNodeJs size={30} />,
    desc: 'Ayo '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Framework/Libraries', 'Web Dev'],
    name: 'Express.js',
    icon: (
      <img
        src={express}
        alt='Express.js'
        className='w-8 h-8 object-cover rounded-full'
      />
    ),
    desc: 'Ayo '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Tools'],
    name: 'Git',
    icon: <FaGit size={30} />,
    desc: 'Ayo '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Tools'],
    name: 'Netlify',
    icon: <SiNetlify size={30} />,
    desc: 'Ayo '
  }
]

export const socialIcons = [
  {
    icon: <FaGithub size={30} />,
    desc: 'Git',
    username: 'calvynsiong',
    link: 'https://github.com/calvynsiong'
  },
  {
    icon: <FaLinkedin size={30} />,
    desc: 'LinkedIn',
    username: 'Calvyn Siong',
    link: 'https://www.linkedin.com/in/calvyn-siong'
  },
  {
    icon: <FaStickyNote size={30} />,
    desc: 'Resume',
    username: 'Resume',
    link:
      'https://drive.google.com/file/d/1034uHEAh65yfjqBw3WYtrylDt2o3I6eC/view?usp=sharing'
  },
  {
    icon: <AiOutlineMail size={30} />,
    desc: 'Email',
    username: 'calvyn360@gmail.com',
    link: 'https://calvyn360.wixsite.com/website'
  },
  {
    icon: <FaWix size={30} />,
    desc: 'First Year Portfolio',
    username: 'School projects',
    link: 'https://calvyn360.wixsite.com/website'
  }
]
