import React, { useRef, useState } from 'react'

const Skills = ({ filterCategories, categories, skills }) => {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')

  const openModal = id => {
    modal.current.classList.add('left-0', 'w-screen')
    modal.current.classList.remove('-left-full', 'w-0')
    console.log(id)
    const changeModalContent = () => {
      console.log(skills)
      const properSkill = skills.filter(skill => skill.id === id)[0]
      console.log(properSkill)
      setBody(properSkill.desc)
      setTitle(properSkill.name)
    }
    changeModalContent()
  }
  const closeModal = () => {
    modal.current.classList.remove('left-0', 'w-screen')
    modal.current.classList.add('-left-full', 'w-0')
  }

  const modal = useRef(null)

  return (
    <div className='flex flex-col w-full items-center'>
      <h1 className='h1'>Tech Stack</h1>
      <div className='flex items-center justify-center flex-wrap gap-6 px-5 mb-4'>
        {categories.map((type, index) => {
          return (
            <button
              key={index}
              className='rounded-xl text-xl bg-yellow-400  dark:bg-yellow-600  p-2 w-24 min-w-max mb-2  focus:outline-none outline-none transform hover:scale-105 duration-200'
              onClick={() => {
                filterCategories(type)
              }}
            >
              {type}
            </button>
          )
        })}
      </div>
      <div className='flex w-full flex-wrap justify-center p-8 gap-16'>
        {skills
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(({ id, name, icon }) => {
            return (
              <div className='flex flex-col '>
                <div className='flex-col flex group relative'>
                  <div className='flex flex-col justify-between items-center'>
                    <button
                      key={id}
                      onClick={() => openModal(id)}
                      className=' focus:outline-none p-3 bg-purple-600 text-white bg-opacity-75 rounded-full ring-8 ring-indigo-300 ring-opacity-50 hover:text-yellow-500'
                      type='button'
                    >
                      {icon}
                    </button>
                    <div className='opacity-0 w-14 min-w-min bg-black text-white text-center text-xs rounded-lg p-2 absolute z-10 group-hover:opacity-75 bottom-full mb-2 transform  duration-200'>
                      {name}
                    </div>
                  </div>
                  <p className='text-center mt-2'>{name}</p>
                </div>

                <div
                  key={id}
                  ref={modal}
                  className='fixed top-0  -left-full  w-0 h-screen flex items-center justify-center bg-black bg-opacity-90 transform transition-all duration-300'
                >
                  <div className='bg- w-3/4 h-1/2 p-12 '>
                    <button
                      onClick={() => closeModal()}
                      type='button'
                      className='focus:outline-none'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-12 w-12 text-red-600'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </button>
                    <h1 className='h1 text-white underline'>{title}</h1>
                    <p className='text-xl text-white' key={id}>
                      {body}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <h1 className='h1'>Currently or Looking to Learn</h1>
    </div>
  )
}

export default Skills
