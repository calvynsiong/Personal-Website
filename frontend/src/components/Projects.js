import React from 'react'
import Cards from './Cards'
import { sideProjects } from '../data/data'

const Projects = ({ projects, categories, filterProjects }) => {
  return (
    <div className='container'>
      <h1 className='h1'>
        Highlights
      </h1>

      <div className=' flex gap-4 justify-center flex-wrap relative m-auto px-6 mb-6'>
        {sideProjects
          .filter(({ highlight }) => highlight)
          .map(project => {
            return <Cards project={project} />
          })}
      </div>

      <h1 className='h1 text-3xl sm:text-5xl text-center font-semibold mb-6'>
        My Projects
      </h1>
      <div className='flex items-center justify-center flex-wrap px-5 mb-4'>
        {categories.map((type, index) => {
          return (
            <button
              key={index}
              className={`categories ${
                index === 0 ? `md:rounded-l-xl` : null
              } ${index === categories.length - 1 ? `md:rounded-r-xl` : null}`}
              onClick={() => {
                filterProjects(type)
              }}
            >
              {type}
            </button>
          )
        })}
      </div>
      <div className=' flex gap-4 justify-center flex-wrap relative m-auto px-6 mb-6'>
        {projects
          .sort((a, b) => (a.name > b.name ? 1 : -1))
          .map(project => {
            return <Cards project={project} />
          })}
      </div>
    </div>
  )
}

export default Projects
