import React from 'react'

const Projects = ({ categories, filterCategories }) => {
  return (
    <div className='container'>
      <h1 className='h1'>Highlights</h1>

      <h1 className='h1'>My Projects</h1>
      <div className='flex items-center justify-center flex-wrap gap-6 px-5 mb-4'>
        {categories.map((type, index) => {
          return (
            <button
              key={index}
              className='categories'
              onClick={() => {
                filterCategories(type)
              }}
            >
              {type}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
