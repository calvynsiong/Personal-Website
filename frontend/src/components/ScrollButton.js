import React, { useState } from 'react'
import { BiArrowToTop } from 'react-icons/bi'

const ScrollButton = () => {
  const [visible, setVisible] = useState(true)

  let scrollPos = 0

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop <= scrollPos) {
      setVisible(false)
    } else {
      setVisible(true)
    }

  })

  const scrollToTop = e => {
    e.preventDefault()
    window.scroll({ top: 0, left: 0, behavior: 'smooth' })
  }
  return (
    <button
      className={`fixed bottom-4 ${
        visible ? `opacity-50` : `opacity-0`
      }  left-4 z-50 rounded-full  bg-gray-500  text-black  transition duration-250 ease-linear border-gray-200  focus:outline-none font-bold hover:bg-gray-50 hover:scale-110 transform  hover:opacity-100`}
      onClick={e => scrollToTop(e)}
    >
      <BiArrowToTop size={40}></BiArrowToTop>
    </button>
  )
}

export default ScrollButton
