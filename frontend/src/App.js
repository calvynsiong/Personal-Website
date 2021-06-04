import { useEffect, useState } from 'react'
import useDarkMode from './useDarkMode'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Experiences from './components/Experiences'
import About from './components/About'
import Header from './components/Header'
import Journal from './components/Journal'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { skills } from './data/data'

function App () {
  const allCategories = [
    'All',
    ...new Set(skills.map(skill => [...skill.category]).flat())
  ]

  const [setTheme, currentTheme, theme] = useDarkMode()
  const [skill, setSkill] = useState(skills)
  const filterCategories = category => {
    if (category.includes('All')) {
      setSkill(skills)
      return
    }
    const newSkills = skills.filter(skill => skill.category.includes(category))
    setSkill(newSkills)
  }

  return (
    <Router>
      <div className='flex flex-col bg-blue-200  dark:bg-blue-900 dark:text-white  min-h-screen duration-500'>
        <Header
          currentTheme={currentTheme}
          theme={theme}
          setTheme={setTheme}
        ></Header>
        <Switch>
          <Route exact path='/'>
            {' '}
            <Home theme={theme} />{' '}
          </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/experiences' component={Experiences} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills'>
            <Skills
              filterCategories={filterCategories}
              categories={allCategories}
              skills={skill}
            ></Skills>
          </Route>
          <Route exact path='/journal' component={Journal} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
