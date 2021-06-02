import { useEffect, useState } from 'react'

export default function useDarkMode () {
  const [theme, setTheme] = useState(localStorage.getItem('theme'))
  const currentTheme = theme === 'dark' ? 'light' : 'dark'

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(`${currentTheme}`)
    root.classList.add(`${theme}`)
    localStorage.setItem('theme', theme)
  }, [theme])

  return [setTheme, currentTheme, theme]
}
