import React, { useRef } from 'react'

const Modal = ({ closeModal, children, id, modal }) => {
  return (
    <React.Fragment>
      <div
        key={id}
        ref={modal}
        className='fixed top-0  -left-full  w-0 h-screen flex items-center justify-center bg-black bg-opacity-90 transform transition-all duration-300'
      >
        <div className='w-4/5 h-4/5 overflow-y-scroll p-16 bg-purple-800'>
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
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Modal
