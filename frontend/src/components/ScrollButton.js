import React, { useState, useEffect, useCallback } from 'react'
import { BiArrowToTop } from 'react-icons/bi'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const [y, setY] = useState(window.scrollY)

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        setVisible(false)
      } else if (y < window.scrollY) {
        setVisible(true)
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])


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
