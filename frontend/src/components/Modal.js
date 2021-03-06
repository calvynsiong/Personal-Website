import React from 'react';

const Modal = ({ closeModal, children, id, modal }) => {
  return (
    <React.Fragment>
      <div
        key={id}
        ref={modal}
        className='fixed top-0  -left-full  w-0 h-screen flex items-center justify-center bg-black bg-opacity-90 transform transition-all duration-300'
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(17, 24, 39, var(1))',
        }}
      >
        <div
          className='w-4/5 h-4/5 overflow-auto p-16 bg-blue-300 dark:bg-gray-900 rounded-3xl'
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(17, 24, 39, var(1))',
          }}
        >
          <button
            onClick={() => closeModal()}
            type='button'
            className='focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-12 w-12 text-red-600 mb-6'
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
  );
};

export default Modal;
