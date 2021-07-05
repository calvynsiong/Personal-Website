export const JournalContent = [
  {
    id: Math.floor(Math.random() * 100000000),
    title: 'First Journal',
    body: [
      "Finally finished my website. There's definitely room for improvement to be made in several different sections. Part of me can't help to implement all the cool animation and special effects that I see on other people's websites, but I think it's best to take it 1 step at a time and realy think about what I need to include. Really fun to use React, especially for scaling up certain sections of the website (modals and skill sections). Can't imagine using plain HTML and CSS to add new parts and maintain them regularly. I've seen some really impressive personal websites/portfolios that take an abysmal time to load, and hopefully my website does not turn out that way.",
      <a
        href='https://calvynsiong.github.io/'
        target='blank'
        className='block mt-6 underline text-purple-800 dark:text-blue-300'
      >
        Link to my first website.
      </a>,
      "Wow looking back on my first website, it was definitely quite rough around the edges. I'd like to think I was able to use the feedback I got to improve the second version.",
    ],
    date: ' 07.06.2021',
    period: '2021',
  },
  {
    id: Math.floor(Math.random() * 100000000),
    title: 'Working in a team',
    body: [
      `This summer, I have been working in a team environment where I have the opportunity to help develop a web application, and it has been quite an eye opening experience. For starters, getting adjusted to a massive codebase has definitely been a learning experience. I was amazed at how structured and separated the code was. Adapting to the workflow and regularly merging + making pull requests was also a new experience.`,
      `Currently, I have been to help develop new features and pages for the
        web app, and it's been quite a fun and challenging experience. I have been using React to build the frontend, and Node/Express to create backend routes. My goal is to improve my skills in this field, and branch out to learn more practises for working in large scale projects.`,
    ],
    date: ' 05.07.2021',
    period: '2021',
    img: 'https://www.ringcentral.com/us/en/blog/wp-content/uploads/2020/07/Effective-teamwork.png',
  },
];
