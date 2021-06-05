import React from 'react'

const Timeline = () => {
  return (
    <div className='col-start-5 col-end-6 mr-10 md:mx-auto relative'>
      <div className='h-full w-6 flex items-center justify-center'>
        <div className='h-full w-1 bg-blue-800 pointer-events-none'></div>
      </div>
      <div className='w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-blue-500 shadow'></div>
    </div>
  )
}

export default Timeline
