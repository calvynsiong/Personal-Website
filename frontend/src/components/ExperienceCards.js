import React from 'react'
import { experiences } from '../data/data'
import ExperienceCardContent from './ExperienceCardContent'
import Timeline from './Timeline'

const ExperienceCards = () => {
  return (
    <section className='w-screen'>
      <div className='w-full flex flex-col md:grid grid-cols-9 sm:mx-auto p-10 text-blue-50 l'>
        {experiences
          .sort((a, b) => {
            const aa = a.start
              .split('.')
              .reverse()
              .join()
            const bb = b.start
              .split('.')
              .reverse()
              .join()
            return aa > bb ? -1 : aa > bb ? 1 : 0
          })
          .map((experience, index) => {
            return index % 2 === 0 ? (
              <div className='flex flex-row-reverse md:contents'>
                <div className='bg-blue-500 dark:bg-gray-900 col-start-1 col-end-5  p-8 rounded-xl my-4 ml-auto shadow-2xl  sm:w-full max-w-full w-full'>
                  <ExperienceCardContent
                    experience={experience}
                  ></ExperienceCardContent>
                </div>
                <Timeline></Timeline>
              </div>
            ) : (
              <div className='flex md:contents'>
                <Timeline></Timeline>
                <div className='bg-blue-500 dark:bg-gray-900 col-start-6 col-end-10 p-8 rounded-xl my-4 mr-auto shadow-2xl sm:w-full max-w-full'>
                  <ExperienceCardContent
                    experience={experience}
                  ></ExperienceCardContent>
                </div>
              </div>
            )
          })}
      </div>
    </section>
  )
}

export default ExperienceCards
