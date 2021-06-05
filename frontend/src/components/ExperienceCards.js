import React from 'react'
import { experiences } from '../data/data'

const ExperienceCards = () => {
  return (
    <div class='container'>
      <div class='flex flex-col md:grid grid-cols-9 mx-auto p-6 text-blue-50'>
        {experiences
          .sort((a, b) => {
            const aa = a.start
              .split('/')
              .reverse()
              .join()
            const bb = b.start
              .split('/')
              .reverse()
              .join()
            return aa < bb ? -1 : aa > bb ? 1 : 0
          })
          .map((experience, index) => {
            return index % 2 === 0 ? (
              <div class='flex flex-row-reverse md:contents'>
                <div class='bg-blue-500 dark:bg-gray-900 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md  sm:w-96 max-w-full w-full'>
                  <div className='flex justify-between'>
                    <h3 class='font-semibold text-lg mb-1'>
                      {experience.role}
                    </h3>
                    <h3 class='font-semibold text-lg mb-1'>
                      {experience.start}
                    </h3>
                  </div>
                  <p class='leading-tight text-justify'>{experience.role}</p>
                  <img
                    className='rounded-full object-cover w-16 h-16 self-center mx-auto row-span-5'
                    src='https://i.imgur.com/vHlVwq6.png'
                    alt='test'
                  ></img>
                </div>
                <div class='col-start-5 col-end-6 md:mx-auto relative mr-10'>
                  <div class='h-full w-6 flex items-center justify-center'>
                    <div class='h-full w-1 bg-blue-800 pointer-events-none'></div>
                  </div>
                  <div class='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow'></div>
                </div>
              </div>
            ) : (
              <div class='flex md:contents'>
                <div class='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
                  <div class='h-full w-6 flex items-center justify-center'>
                    <div class='h-full w-1 bg-blue-800 pointer-events-none'></div>
                  </div>
                  <div class='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow'></div>
                </div>
                <div class='bg-blue-500 dark:bg-gray-900 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md sm:w-96 max-w-full'>
                  
                  <div className='flex justify-between'>
                    <h3 class='font-semibold text-lg mb-1'>
                      {experience.role}
                    </h3>
                    <h3 class='font-semibold text-lg mb-1'>
                      {experience.start}
                    </h3>
                  </div>
                  <p class='leading-tight text-justify'>{experience.role}</p>
                </div>
              </div>
            )
          })}

        {/* <div class='flex md:contents'>
          <div class='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
            <div class='h-full w-6 flex items-center justify-center'>
              <div class='h-full w-1 bg-blue-800 pointer-events-none'></div>
            </div>
            <div class='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow'></div>
          </div>
          <div class='bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'>
            <h3 class='font-semibold text-lg mb-1'>Lorem ipsum</h3>
            <p class='leading-tight text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
        </div>

        <div class='flex flex-row-reverse md:contents'>
          <div class='bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
            <h3 class='font-semibold text-lg mb-1'>Lorem ipsum</h3>
            <p class='leading-tight text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div class='col-start-5 col-end-6 md:mx-auto relative mr-10'>
            <div class='h-full w-6 flex items-center justify-center'>
              <div class='h-full w-1 bg-blue-800 pointer-events-none'></div>
            </div>
            <div class='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow'></div>
          </div>
        </div>

        <div class='flex flex-row-reverse md:contents'>
          <div class='bg-blue-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md'>
            <h3 class='font-semibold text-lg mb-1'>Lorem ipsum</h3>
            <p class='leading-tight text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              quaerat?
            </p>
          </div>
          <div class='col-start-5 col-end-6 md:mx-auto relative mr-10'>
            <div class='h-full w-6 flex items-center justify-center'>
              <div class='h-full w-1 bg-blue-800 pointer-events-none'></div>
            </div>
            <div class='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow'></div>
          </div>
        </div>

        <div class='flex md:contents'>
          <div class='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
            <div class='h-full w-6 flex items-center justify-center'>
              <div class='h-full w-1 bg-blue-800 pointer-events-none'></div>
            </div>
            <div class='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow'></div>
          </div>
          <div class='bg-blue-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md'>
            <h3 class='font-semibold text-lg mb-1'>Lorem ipsum</h3>
            <p class='leading-tight text-justify'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
              facilis.
            </p>
          </div>
              </div> */}
      </div>
    </div>
    //       <div className=' z-50 p-3 mt-10 w-full xs:w-96  flex flex-col select-none rounded bg-blue-400 dark:bg-gray-900 shadow-lg min-h-full xs:h-96'>
    //           <div className="flex items-center">

    // <h3 className="text-xl font-bold">10-25-2018</h3>
    //           </div>
    //     </div>
  )
}

export default ExperienceCards
