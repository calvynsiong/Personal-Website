import React from 'react';

const ExperienceCardContent = ({ experience }) => {
  return (
    <>
      <div className='flex justify-between items-center flex-wrap'>
        <h3 className='font-semibold text-3xl mb-1'>{experience.role}</h3>
        <h3 className='font-thin text-xl mb-1'>
          {`${experience.start} - ${experience.end}`}
        </h3>
      </div>

      <ul className='mt-4'>
        {experience.desc.map((point) => {
          return <li className='list-disc text-xl mb-2 ml-2'>{point}</li>;
        })}
      </ul>
      <button className='focus:outline-none mt-4 bg-black dark:bg-blue-500 rounded-full p-2'>
        {experience.icon}
      </button>
    </>
  );
};

export default ExperienceCardContent;
