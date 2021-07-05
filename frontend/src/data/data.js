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
  FaGit,
  FaBootstrap,
  FaChalkboardTeacher,
  FaCoffee,
  FaPeace,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiNetlify,
  SiHeroku,
  SiMaterialUi,
  SiTailwindcss,
  SiJava,
  SiPostgresql,
  SiVisualstudiocode,
} from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import matlab from '../assets/matlab.png';
import express from '../assets/express.jpg';
import hand from '../assets/hand.png';
import roboticarm from '../assets/roboticarm.jpg';
import birthday from '../assets/birthday.webp';

export const sideProjects = [
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Development', '🤝 Collaborative'],
    name: 'VaccineInfo',
    url: 'https://github.com/calvynsiong/CovidInfo.git',
    live: 'https://vaccine-info.herokuapp.com/',
    desc: 'React website that displays global COVID-19 statistics and Canadian vaccine information/progress based on province. 1st Place winner at TOHacks.',
    stack: 'React, Bootstrap, MaterialUI, Sass',
    img: 'https://vaccine-info.herokuapp.com/images/logo.svg',
    highlight: true,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Development'],
    name: 'Ecommerce site',
    url: 'https://github.com/calvynsiong/Ecommerce.git',
    live: 'https://eccommercebycalvyn.herokuapp.com/',
    desc: 'Simple Ecommerce site built with MERN stack and Redux for state management.',
    stack: 'React, Node.js, Express.js, MongoDB, Redux, MaterialUI',
    img: 'https://i.imgur.com/3wYqcF6.png',
    highlight: true,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🐍 Python'],
    name: 'Finger Tracker',
    url: 'https://github.com/calvynsiong/FingerTracker.git',
    live: 'https://drive.google.com/file/d/1bRurwnWMewoY-uSxBFS12-bWIdWHRbTb/view?usp=sharing',
    desc: "A finger tracking program created with the OpenCV and MediaPipe library. Detects the coordinates of each finger node to determine the hand's location.",
    stack: 'Python',
    img: hand,
    highlight: true,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🐍 Python', '🤝 Collaborative'],
    name: 'Automated robotic arm',
    url: 'https://github.com/calvynsiong/Automated-sensing-system-for-robotic-arm.git',
    desc: 'A Python program that allows for a virtual robotic arm in the Qlabs environment to transfer items in an automated manner.',
    stack: 'Python',
    img: roboticarm,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Development'],
    name: 'To Do List',
    url: 'https://github.com/calvynsiong/To-Do-List.git',
    live: 'https://checklistbycalvyn.netlify.app/ ',
    desc: 'A To Do list made with React as well as the useReducer hook for state management',
    stack: 'React, Sass',
    img: 'https://i.imgur.com/A6MKnkV.png',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Development'],
    name: 'Basic Reddit Clone',
    url: 'https://github.com/calvynsiong/Reddit-Clone.git',
    live: 'https://simpleredditclone.netlify.app/ ',
    desc: 'A simple Reddit front page clone with redesigned components. This project was used to practise React concepts and try out MaterialUI.',
    stack: 'React, MaterialUI',
    img: 'https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Color-Logo.wine.svg',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Development'],
    name: 'Birthday Reminders',
    url: 'https://github.com/calvynsiong/BirthdayReminderWebsite.git',
    live: 'https://macengbdayreminders.netlify.app/ ',
    desc: "My first ever React project. Made to track my friends' birthdays.",
    stack: 'React, Tailwind',
    img: birthday,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Development'],
    name: 'Menu website',
    url: 'https://github.com/calvynsiong/BirthdayReminderWebsite.git',
    live: 'https://myheritagerestaurant.netlify.app/ ',
    desc: 'A single page website made with React and styled components. Learned how to map over data and destructure them to be used with components. Finally learned the beauty of implementing dark mode.',
    stack: 'React, Tailwind',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYAXy-rKS_1RjEH6CjpNjKuJdmEf-66m44cg&usqp=CAU',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Development'],
    name: 'Chatting app',
    url: 'https://github.com/calvynsiong/BirthdayReminderWebsite.git',
    desc: 'A project to practise MERN stack and using web sockets for real time updates. WIP.',
    stack: 'React, Node.js, Express.js, MongoDB, Pusher',
    img: 'https://lh3.googleusercontent.com/Ez0bB-z2_r1dgzbbQnaN-nyrKReRV14QryS-k9MQxYjk1DrvmmN1G6QwbVX0EIvIawNf1g=s85',
  },
];

export const skills = [
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🔣 Languages'],
    name: 'Python',
    icon: <FaPython size={30} />,
    desc: `As my first programming language, I am most experienced in Python. I am knowledgable with concepts such as simple data structures (dictionaries, lists, tuples), list comprehension, functions, error handling and object oriented programming. I have also utilised different Python packages such as OpenCV, Matplotlib, NumPy and Mediapipe. I plan to learn Django and Flask for 🌐 web development, as well as learn web scraping for future purposes.`,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['📚 Framework/Libraries', '🌐 Web Dev'],
    name: 'React',
    icon: <FaReact size={30} />,
    desc: 'Learned how to create functional components with ES6 Javascript, alongside hooks to create scalable websites and applications. I have also had experience building React components that are able to connect with the backend (Node.js) to send HTTP requests for interactive experiences. Currently trying to learn and incorporate Redux for better state management. I have also used Postman to test requests to APIs.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev'],
    name: 'HTML',
    icon: <FaHtml5 size={30} />,
    desc: 'Proficient in using the markup language to create structured websites for web design and layouts. Able to create a layout that can be structured to display different elements and features, as well as create forms that accept user-input.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev'],
    name: 'CSS',
    icon: <FaCss3Alt size={30} />,
    desc: 'Proficient in styling websites with CSS in conjunction with HTML with classes, ids, and element selectors. I understand the methods for dealing with responsive design, and tend to style from a mobile first experience. Also experienced with using flexbox and grid to structure content layout.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev'],
    name: 'SASS',
    icon: <FaSass size={30} />,
    desc: 'I strongly enjoy using this preprocessor for CSS styling, due to its different features that allow for much more maintanable and scalable methods for styling. Utitlized mixins, partials, functions and nesting for more efficient and readable styling in my personal projects. I ensure to use BEM notation when writing class names for readability and accessibility purposes.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🔣 Languages', '🌐 Web Dev'],
    name: 'JavaScript',
    icon: <SiJavascript size={30} />,
    desc: 'Proficient in ES6+ Javascript. Javascript is my most used programming language and my favourite as well. I understand different array methods, ternary/nullish operators, scope, DOM manipulation/events, callback/HO functions, error handling, promises and async/await concepts. Aiming to learn and implement Typescript in my own projects for better type safety and maintainability.Proficient in ES6+ Javascript. Javascript is my most used programming language and my favourite as well. I understand different array methods, ternary/nullish operators, scope, DOM manipulation/events, callback/HO functions, error handling, promises and async/await concepts. Aiming to learn and implement Typescript in my own projects for better type safety and maintainability.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🔣 Languages'],
    name: 'MATLAB',
    icon: (
      <img
        src={matlab}
        alt='MATLAB'
        className='w-8 h-8 object-cover rounded-full'
      />
    ),
    desc: 'Knowledgable with Matlab, which I learned and applied in my Linear Algebra and Calculus 3 labs. Learned how to use functions, deal with matrices/vectors as data types and display calculations as graphs.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['⚙️ Tools', '🌐 Web Dev'],
    name: 'MongoDB',
    icon: <SiMongodb size={30} />,
    desc: 'I used the BSON based database with backend with the mongoose module in Node.js. Understand how to navigate collections and sort/process documents. Learned how to fetch, update, add and delete data with defined schemas connected to the backend server with HTTP requests, as well as used web sockets with Pusher to update data in realtime. ',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['📚 Framework/Libraries', '🌐 Web Dev'],
    name: 'Node.js',
    icon: <FaNodeJs size={30} />,
    desc: 'Understand how to create backend server with routes to handle HTTP requests that connect to the frontend and database. Knowledgeable with using the npm package management tool to download and handle dependencies.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['📚 Framework/Libraries', '🌐 Web Dev'],
    name: 'Express.js',
    icon: (
      <img
        src={express}
        alt='Express.js'
        className='w-8 h-8 object-cover rounded-full'
      />
    ),
    desc: 'Knowledgable in using the Node framework to build routes and connect middleware in a fast and efficient manner.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['⚙️ Tools'],
    name: 'Git',
    icon: <FaGit size={30} />,
    desc: 'Confident in using the version control tool to commit and stash changes to local and remote repositories. Proficient in using different commands to checkout to different branches, merge changes, fork/clone repos and collaborating with pull requests.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['⚙️ Tools'],
    name: 'Netlify',
    icon: <SiNetlify size={30} />,
    desc: 'Knowledgable in using the Netlify platform to automatically deploy production build of websites and applications, connected to my Github. Allows me to update these builds with a simple commit and push procedure.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['⚙️ Tools'],
    name: 'Heroku',
    icon: <SiHeroku size={30} />,
    desc: 'Used the platform to deploy larger and more complex projects (MERN stack) with the Heroku CLI.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev', '📚 Framework/Libraries'],
    name: 'Material UI',
    icon: <SiMaterialUi size={30} />,
    desc: 'Used Material UI in React for styling components in a quick and scalable manner. Also utilized custom styling with JSS for customizing components.',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev', '📚 Framework/Libraries'],
    name: 'Tailwind CSS',
    icon: <SiTailwindcss size={30} />,
    desc: `Proficient in using Tailwind utility classes and custom configurations to for styling, especially when needed for larger scale projects. I enjoy the clarity of the class names as well as the simplicity of having the styling and the elements all in 1 location  (😅 though it was hard to get used to at first). It's the reason I picked it to style this website!`,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['⚙️ Tools'],
    name: 'VS Code',
    icon: <SiVisualstudiocode size={30} />,
    desc: `My primary IDE for coding. I am comfortable with using different extensions and the integrated terminal to work efficiently.`,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev', '📚 Framework/Libraries'],
    name: 'Bootstrap',
    icon: <FaBootstrap size={30} />,
    desc: ``,
  },
];

export const futureSkills = [
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev', '🔣 Languages', '⚙️ Tools'],
    name: 'TypeScript',
    icon: <SiTypescript size={30} />,
    desc: ``,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🌐 Web Dev', '📚 Framework/Libraries'],
    name: 'Postgresql',
    icon: <SiPostgresql size={30} />,
    desc: ``,
  },
  {
    id: Math.floor(Math.random() * 100000000),
    category: ['🔣 Languages'],
    name: 'Java',
    icon: <SiJava size={30} />,
    desc: ``,
  },
];

export const socialIcons = [
  {
    icon: <FaGithub size={30} />,
    desc: 'Github',
    username: 'calvynsiong',
    link: 'https://github.com/calvynsiong',
  },
  {
    icon: <FaLinkedin size={30} />,
    desc: 'LinkedIn',
    username: 'Calvyn Siong',
    link: 'https://www.linkedin.com/in/calvyn-siong',
  },
  {
    icon: <FaStickyNote size={30} />,
    desc: 'Resume',
    username: 'Resume',
    link: 'https://drive.google.com/file/d/1034uHEAh65yfjqBw3WYtrylDt2o3I6eC/view?usp=sharing',
  },
  {
    icon: <AiOutlineMail size={30} />,
    desc: 'Email',
    username: 'calvyn360@gmail.com',
    link: 'mailto:calvyn360@gmail.com?Subject=Reaching Out',
  },
  {
    icon: <FaWix size={30} />,
    desc: 'First Year Portfolio',
    username: 'School projects',
    link: 'https://calvyn360.wixsite.com/website',
  },
];

export const experiences = [
  {
    role: 'Tim Hortons Supervisor',
    start: '25.10.2018',
    end: `30.01.2020`,
    desc: [
      `Practised interpersonal and communication skills by
                        working collaboratively with team members in a fast paced environment`,
      `Supervised on weekend
                        shifts and handled customer complaints`,
    ],
    icon: <FaCoffee size={30}></FaCoffee>,
  },
  {
    role: 'Tutor',
    start: '10.10.2017',
    end: `Present`,
    desc: [
      `Tutored with License to Learn and currently on contract with The Tutoring Expert`,
      `Adept in visualisation techniques and clearly communicated ideas with clarity`,
      `Tutored Grade 10-12 in Math, English and Science`,
    ],
    icon: <FaChalkboardTeacher size={30}></FaChalkboardTeacher>,
  },
  {
    role: 'Social Justice Club President',
    start: '03.11.2017',
    end: `05.03.2020`,
    desc: [
      `Lead discussions among club members and organized food drives and awareness campaigns`,
      `Volunteered for Food For Life Canada with Peers to prepare and distribute fresh food for residents in need`,
    ],
    icon: <FaPeace size={30}> </FaPeace>,
  },
  {
    role: [
      <a
        title='Peernet website'
        target='_blank'
        rel='noreferrer'
        href='https://www.peernet.co/'
        className='underline'
      >
        Peernet
      </a>,
      ` Web Developer Intern`,
    ],
    start: '07.06.2021',
    end: `Present`,
    desc: [
      `Develop pages and components on the frontend side with React`,
      `Create backend routes and controllers that connected to MongoDB database with Node/Express`,
      `Colloborated on Github and coordinated tasks through Jira`,
    ],
    icon: <CgWebsite size={30}> </CgWebsite>,
  },
];

// This is getting way too large, isn't it...
