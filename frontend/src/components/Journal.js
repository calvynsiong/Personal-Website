import React, { useState } from 'react';
import Modal from './Modal';
import { JournalContent } from '../data/JournalContentData';

const Journal = ({ modal, filterJournals, categories, journals }) => {
  const [modalContent, setModalContent] = useState({
    body: '',
    title: '',
    img: '',
  });

  const openJournalModal = (id) => {
    modal.current.classList.add('left-0', 'w-screen');
    modal.current.classList.remove('-left-full', 'w-0');
    const changeModalContent = () => {
      const properEntry = JournalContent.filter((entry) => entry.id === id)[0];
      setModalContent({
        title: properEntry.title,
        body: properEntry.body,
        img: properEntry.img,
        date: properEntry.date,
      });
    };
    changeModalContent();
  };
  const closeJournalModal = () => {
    modal.current.classList.remove('left-0', 'w-screen');
    modal.current.classList.add('-left-full', 'w-0');
  };

  return (
    <>
      <section className='container items-start pl-8 relative'>
        <h1 className='h1 -ml-8'>Journal</h1>

        <p className=' text-xl md:text-2xl my-4'>
          Small reflections/stories of thing I have learned and would like to
          share.
        </p>

        <ul className=' list-reset flex flex-wrap my-6 self-center'>
          {categories.map((type, index) => {
            return (
              <li
                key={index}
                className={` ${index === 0 ? `rounded-l` : null} ${
                  index === categories.length - 1 ? `rounded-r` : null
                }   -mb-px block border p-2 border-gray-900 text-3xl hover:shadow-2xl backdrop  hover:bg-white hover:bg-opacity-10`}
                onClick={() => filterJournals(type)}
              >
                {' '}
                {type}{' '}
              </li>
            );
          })}
        </ul>
        {journals
          .sort((a, b) => {
            const aa = a.date.split('.').reverse().join();
            const bb = b.date.split('.').reverse().join();
            return aa > bb ? -1 : aa > bb ? 1 : 0;
          })
          .map((entry) => {
            return (
              <article
                key={entry.id}
                className='w-5/6  h-full hover:shadow-2xl backdrop  hover:bg-white hover:bg-opacity-10 rounded-3xl border border-gray-900 dark:border-gray-300 flex flex-col self-center my-10 transform duration-200 hover:scale-105 p-8'
              >
                <h1 className='text-xl w-max sm:text-3xl text-center self-center border-b-2 p-1 mb-4 border-gray-900 break-words dark:border-gray-300'>
                  {entry.title}
                </h1>
                <h3 className='font-thin text-lg sm:text-2xl mb-1 self-end'>
                  {entry.date}{' '}
                </h3>

                <p className='text-xl sm:text-2xl break-words'>
                  {entry.body[0].substring(0, 400)}
                  {entry.body[0].length > 300 ? `...` : null}
                </p>

                <button
                  className='block transform mouse-pointer bg-gray-900 dark:bg-blue-300 dark:text-black text-white mt-8  py-1 px-2 font-semibold rounded hover:bg-gray-700 dark:hover:bg-gray-200 hover:shadow-2xl focus:outline-none w-24 sm:hover:animate-pulse'
                  onClick={() => openJournalModal(entry.id)}
                >
                  Read more
                </button>
              </article>
            );
          })}

        <Modal id={1} closeModal={closeJournalModal} modal={modal}>
          <h1 className='h1  underline'>{modalContent.title}</h1>
          <p className='font-thin text-lg sm:text-2xl my-4 pl-8'>
            {modalContent.date}
          </p>
          <article className='flex flex-wrap gap-8 pl-8'>
            <div className='flex flex-wrap gap-3'>
              <p
                className={`text-lg sm:text-2xl ${
                  modalContent.img ? `max-w-3xl` : null
                } `}
              >
                {modalContent.body[0]}
              </p>
              {modalContent.img ? (
                <img
                  src={modalContent.img}
                  className='w-3/4 max-w-xs rounded-lg'
                  alt={modalContent.title}
                />
              ) : null}
            </div>
            <p className={`text-lg sm:text-2xl`}>
              {modalContent.body.slice(1)}
            </p>
          </article>
        </Modal>
      </section>
    </>
  );
};

export default Journal;
