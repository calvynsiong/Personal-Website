import React, { useRef, useState, useEffect } from 'react'
import { futureSkills } from '../data/data'
import Modal from './Modal'

const Skills = ({ filterCategories, categories, skills, modal }) => {
  const [body, setBody] = useState('')
  const [title, setTitle] = useState('')
  const [dots, setDots] = useState('')

  useEffect(() => {
    let text = ' ...'
    let i = 0
    setInterval(() => {
      let loadingDots = text.substring(0, (i % text.length) + 1)
      setDots(loadingDots)
      i++
    }, 1750)
  }, [])

  const openSkillModal = id => {
    modal.current.classList.add('left-0', 'w-screen')
    modal.current.classList.remove('-left-full', 'w-0')
    futureSkillSection.current.classList.remove('relative')
    const changeModalContent = () => {
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
    futureSkillSection.current.classList.add('relative')
  }


  const futureSkillSection = useRef(null)

  return (
    <div className='container'>
      <h1 className='h1 '>Tech Stack</h1>
      <div className='flex items-center justify-center flex-wrap mb-4 px-8'>
        {categories.map((type, index) => {
          return (
            <button
              key={index}
              className={`categories ${index === 0 ? `md:rounded-l-xl` : null
                } ${index === categories.length - 1 ? `md:rounded-r-xl` : null
                }`}
              onClick={() => {
                filterCategories(type)
              }}
            >
              {type}
            </button>
          )
        })}
      </div>
      <div className='flex w-full flex-wrap justify-center px-14 py-8 gap-16 max-w-6xl'>
        {skills
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(({ id, name, icon }) => {
            return (
              <div className='flex flex-col relative'>
                <div className='flex-col flex group'>
                  <div className='flex flex-col justify-between items-center '>
                    <button
                      key={id}
                      onClick={() => openSkillModal(id)}
                      className=' focus:outline-none p-3 bg-purple-600 text-white bg-opacity-75 rounded-full ring-8 ring-indigo-300 ring-opacity-50 hover:text-yellow-500'
                      type='button'
                    >
                      {icon}
                    </button>
                    <div className='opacity-0 w-14 min-w-min bg-black text-white text-center text-xs rounded-lg p-2 absolute  group-hover:opacity-75 bottom-full mb-2 transform  duration-200'>
                      {name}
                    </div>
                  </div>
                  <p className='text-center mt-2'>{name}</p>
                </div>

                <Modal id={id} closeModal={closeModal} modal={modal}>
                  <h1 className='h1 underline'>{title}</h1>
                  <p className='text-lg sm:text-2xl max-w-3xl mx-auto'>
                    {body}
                  </p>
                </Modal>
              </div>
            )
          })}
      </div>
      <h1 className='h1 mb-6'>Currently or Looking to Learn {dots}</h1>
      <article
        ref={futureSkillSection}
        className='flex justify-center gap-16 px-14 mt-4 pb-8 flex-wrap relative'
      >
        {futureSkills
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(({ id, name, icon }) => {
            return (
              <div className='flex flex-col'>
                <div className='flex flex-col group justify-between items-center'>
                  <button
                    key={id}
                    className=' focus:outline-none p-3 bg-purple-600 text-white bg-opacity-75 rounded-full ring-8 ring-indigo-300 ring-opacity-50 hover:text-yellow-500 cursor-default'
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
            )
          })}
      </article>
    </div>
  )
}

export default Skills

