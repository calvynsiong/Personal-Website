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
  SiNetlify,
  SiHeroku,
  SiMaterialUi,
  SiTailwindcss
} from 'react-icons/si'
import matlab from '../assets/matlab.png'
import express from '../assets/express.jpg'

export const skills = [
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Languages'],
    name: 'Python',
    icon: <FaPython size={30} />,
    desc: `As my first programming language, I am most experienced in Python. I am knowledgable with concepts such as simple data structures (dictionaries, lists, tuples), list comprehension, functions, error handling and object oriented programming. I have also utilised different Python packages such as OpenCV, Matplotlib, NumPy and Mediapipe. I plan to learn Django and Flask for web development, as well as learn web scraping for future purposes.`
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Framework/Libraries', 'Web Dev'],
    name: 'React',
    icon: <FaReact size={30} />,
    desc:
      'Learned how to create functional components with ES6 Javascript, alongside hooks to create scalable websites and applications. I have also had experience building React components that are able to connect with the backend (Node.js) to send HTTP requests for interactive experiences. Currently trying to learn and incorporate Redux for better state management.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev'],
    name: 'HTML',
    icon: <FaHtml5 size={30} />,
    desc:
      'Proficient in using the markup language to create structured websites for web design and layouts. Able to create a layout that can be structured to display different elements and features, as well as create forms that accept user-input.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev'],
    name: 'CSS',
    icon: <FaCss3Alt size={30} />,
    desc:
      'Proficient in styling websites with CSS in conjunction with HTML with classes, ids, and element selectors. I understand the methods for dealing with responsive design, and tend to style from a mobile first experience. Also experienced with using flexbox and grid to structure content layout.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev'],
    name: 'SASS',
    icon: <FaSass size={30} />,
    desc:
      'I strongly enjoy using this preprocessor for CSS styling, due to its different features that allow for much more maintanable and scalable methods for styling. Utitlized mixins, partials, functions and nesting for more efficient and readable styling in my personal projects. I ensure to use BEM notation when writing class names for readability and accessibility purposes.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Languages', 'Web Dev'],
    name: 'JavaScript',
    icon: <SiJavascript size={30} />,
    desc:
      'Proficient in ES6+ Javascript. Javascript is my most used programming language and my favourite as well. I understand different array methods, ternary/nullish operators, scope, DOM manipulation/events, callback/HO functions, error handling, promises and async/await concepts. Aiming to learn and implement Typescript in my own projects for better type safety and maintainability.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Languages'],
    name: 'MATLAB',
    icon: (
      <img
        src={matlab}
        alt='MATLAB'
        className='w-8 h-8 object-cover rounded-full'
      />
    ),
    desc:
      'Knowledgable with Matlab, which I learned and applied in my Linear Algebra and Calculus 3 labs. Learned how to use functions, deal with matrices/vectors as data types and display calculations as graphs.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Tools', 'Web Dev'],
    name: 'MongoDB',
    icon: <SiMongodb size={30} />,
    desc:
      'I used the BSON based database with backend with the mongoose module in Node.js. Understand how to navigate collections and sort/process documents. Learned how to fetch, update, add and delete data with defined schemas connected to the backend server with HTTP requests, as well as used web sockets with Pusher to update data in realtime. '
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Framework/Libraries', 'Web Dev'],
    name: 'Node.js',
    icon: <FaNodeJs size={30} />,
    desc:
      'Understand how to create backend server with routes to handle HTTP requests that connect to the frontend and database. Knowledgeable with using the npm package management tool to download and handle dependencies.'
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
    desc:
      'Knowledgable in using the Node framework to build routes and connect middleware in a fast and efficient manner.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Tools'],
    name: 'Git',
    icon: <FaGit size={30} />,
    desc:
      'Confident in using the version control tool to commit and stash changes to local and remote repositories. Proficient in using different commands to checkout to different branches, merge changes, fork/clone repos and collaborating with pull requests.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Tools'],
    name: 'Netlify',
    icon: <SiNetlify size={30} />,
    desc:
      'Knowledgable in using the Netlify platform to automatically deploy production build of websites and applications, connected to my Github. Allows me to update these builds with a simple commit and push procedure.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Tools'],
    name: 'Heroku',
    icon: <SiHeroku size={30} />,
    desc:
      'Used the platform to deploy larger and more complex projects, primarily made with MERN stack with the Heroku CLI.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev', 'Framework/Libraries'],
    name: 'Material UI',
    icon: <SiMaterialUi size={30} />,
    desc:
      'Used Material UI in React for styling componets in a quick and scalable manner. Also utilized custom styling with JSS for customizing components.'
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev', 'Framework/Libraries'],
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={30} />,
    desc: `Proficient in using Tailwind utility classes and custom configurations to for styling, especially when needed for larger scale projects. I enjoy the clarity of the class names as well as the simplicity of having the styling and the elements all in 1 location  (😅 though it was hard to get used to at first). It's the reason I picked it to style this website!`
  }
]

export const futureSkills = [
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev', 'Framework/Libraries'],
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={30} />,
    desc: `Proficient in using Tailwind utility classes and custom configurations to for styling, especially when needed for larger scale projects. I enjoy the clarity of the class names as well as the simplicity of having the styling and the elements all in 1 location  (😅 though it was hard to get used to at first). It's the reason I picked it to style this website!`
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['Web Dev', 'Framework/Libraries'],
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={30} />,
    desc: `Proficient in using Tailwind utility classes and custom configurations to for styling, especially when needed for larger scale projects. I enjoy the clarity of the class names as well as the simplicity of having the styling and the elements all in 1 location  (😅 though it was hard to get used to at first). It's the reason I picked it to style this website!`
  },
]

export const socialIcons = [
  {
    icon: <FaGithub size={30} />,
    desc: 'Github',
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
