import React, { useState } from 'react'
import { aboutContentData } from '../data/aboutContentData'

const AboutContent = () => {
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState(null)

  const toggleHidden = newId => {

    //   Checks if the id of the section matches the stored id, if not then show that section
      
    if (newId !== id) {
      setVisible(true)
      setId(newId)
      return
    }

    //   If it's the same section, simply toggle it on or off
    setVisible(!visible)
  }

  return (
    <>
      {aboutContentData.map((section, index) => {
        return (
          <section>
            <h1 className='h1'>
              {section.title}
            </h1>
            <article
              key={section.id}
              className={`flex ${
                index % 2 === 0 ? 'flex-row-reverse' : null
              } px-8 gap-10  flex-wrap lg:flex-nowrap mb-10`}
            >
              <p className='text-xl sm:text-2xl'>
                {section.desc}
                <p className='mt-4'>
                  {visible ? (section.id === id ? section.hidden : null) : null}
                </p>
                <button
                  className='block transform mouse-pointer bg-gray-900  text-white mt-8  py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none'
                  onClick={() => toggleHidden(section.id)}
                >
                  {visible
                    ? section.id === id
                      ? 'Hide'
                      : 'Read More'
                    : 'Read More'}
                </button>
              </p>
              <img
                src={section.img}
                alt='Calvyn Siong'
                className='w-full h-full  lg:w-2/3 max-w-xl max-h-96 object-contain rounded-xl self-start hover:shadow-2xl duration-200'
              />
            </article>
          </section>
        )
      })}
    </>
  )
}

export default AboutContent
