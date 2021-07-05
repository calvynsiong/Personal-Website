import KualaLumpur from '../assets/KualaLumpur.jpg';
import studying from '../assets/studying.png';
import music from '../assets/music.png';

// const scrollToBottom = e => {
//   e.preventDefault()
//   window.scroll({ top: document.body.scrollHeight, behavior: 'smooth' })
// }

export const aboutContentData = [
  {
    id: Math.floor(Math.random() * 100000000),
    title: 'Background',
    img: KualaLumpur,
    desc: [
      ` I was born in Kuala Lumpur, Malaysia. I immigrated to Ontario,
                Canada in 2015, a pivotal moment in my life. Personally, I
                believe that`,
      <span className='highlight-text'> discipline </span>,
      `and`,
      <span className='highlight-text'> curiosity </span>,
      `are the biggest factors of self progress.`,
    ],
    hidden: [
      `I believe that my diverse background has shaped me to be a open minded individual. I love to learn new ideas and technologies. More recently, I have started to become interested into learning about the stories and journeys of others, no matter what field they are in. If you're reading this, please feel free to tell me your story!`,
      <button
        className='block transform mouse-pointer bg-purple-600  text-white my-6 py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-purple-900 focus:outline-none'
        // onClick={e => scrollToBottom(e)}
      >
        <a href='mailto:calvyn360@gmail.com' target='_blank' rel='noreferrer'>
          Send me a Message!
        </a>
      </button>,
    ],
  },
  {
    id: Math.floor(Math.random() * 100000000),
    title: 'Interests',
    img: studying,
    desc: [
      `I am interested in`,
      <span className='highlight-text'> full stack web development</span>,
      `, particularly working on the front end. I enjoy working with comprehesive systems, and I am always intrigued by the versatility and capabilities of modern websites and applications. I am also interested in`,
      <span className='highlight-text'> IOT</span>,
      `,`,
      <span className='highlight-text'> machine learning </span>,
      `and`,
      <span className='highlight-text'> computer vision</span>,
      `.`,
    ],
    hidden: [
      `I recognize that I have a lot of learning to do to pursue my interests. To be honest, my most important revelation in the first year of university was the importance of teaching yourself, rather than solely relying on school. To achieve my goals, I know that I'd have to work hard and independently pursue learning resources. Some of my favourite coding resources are `,
      <a
        className='highlight-text underline'
        href='https://www.freecodecamp.org/
'
        target='_blank'
        rel='noreferrer'
      >
        FreeCodeCamp
      </a>,
      ' and ',
      <a
        className='highlight-text underline'
        href='https://www.udemy.com/'
        target='_blank'
        rel='noreferrer'
      >
        Udemy
      </a>,
      '.',
    ],
  },
  {
    id: Math.floor(Math.random() * 100000000),
    title: 'Personal',
    img: music,
    desc: [
      `My personal hobbies involve finance, personal health, listening to podcasts, music and enjoying food. Here are some memorable things I enjoy.`,
    ],
    hidden: [
      <ul className='text-xl'>
        <li>
          Favourite album: The Return of Ziggy Stardust,
          <a
            className='highlight-text text-xl'
            href='https://calvynsfavalbums.netlify.app/'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            See more
          </a>
        </li>
        <li>Favourite food: Curry 🍛 </li>
        <li>Favourite fictions: Berserk, Breaking Bad, Black Mirror, 1984</li>
        <li className='mt-4'>
          Currently listening to:
          <a
            className='highlight-text text-xl'
            href='https://open.spotify.com/show/4FYpq3lSeQMAhqNI81O0Cn?si=CGgUlyOgRD6Oq36Lu9B_Qg'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Planet Money
          </a>
          ,
          <a
            className='highlight-text text-xl'
            href='https://open.spotify.com/show/1cF9PxVsRAjihHFAI1VI8s'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            The Next Iteration
          </a>
          ,
          <a
            className='highlight-text text-xl'
            href='https://open.spotify.com/show/6i9SWtZPb30xVXWVHSKCqq?si=F4eetWCFTpCQlxgrdolqsw'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            Trash Taste
          </a>
        </li>
        <li>Currently reading/ watching: Jujutsu Kaisen, The Wire</li>
      </ul>,
    ],
  },
];
