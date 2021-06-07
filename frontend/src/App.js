import { useState, useRef } from 'react'
import useDarkMode from './useDarkMode'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Experiences from './components/Experiences'
import About from './components/About'
import Header from './components/Header'
import Journal from './components/Journal'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { skills, sideProjects } from './data/data'
import { JournalContent } from "./data/JournalContentData"

function App() {
  const allCategories = [
    'All',
    ...new Set(skills.map(skill => [...skill.category]).flat())
  ]
  const allProjects = [
    'All Projects',
    ...new Set(sideProjects.map(project => [...project.category]).flat())
  ]

  const allJournals = [
    "All Journals",
    ...new Set(JournalContent.map(entry => entry.period).sort((a, b) => (a > b ? 1 : -1)))
  ]


  const [setTheme, currentTheme, theme] = useDarkMode()
  const [skill, setSkill] = useState(skills)
  const [projects, setProjects] = useState(sideProjects)
  const [journals, setJournals] = useState(JournalContent)

  const filterCategories = category => {
    if (category.includes('All')) {
      setSkill(skills)
      return
    }
    const newSkills = skills.filter(skill => skill.category.includes(category))

    setSkill(newSkills)
  }

  const filterProjects = category => {
    if (category.includes('All Projects')) {
      setProjects(sideProjects)
      return
    }
    const newProjects = sideProjects.filter(project =>
      project.category.includes(category)
    )
    setProjects(newProjects)
  }


  const filterJournals = period => {
    if (period === ('All Journals')) {
      setJournals(JournalContent)
      return
    }
    const newJournals = JournalContent.filter(entry =>
      entry.period.includes(period)
    )
    setJournals(newJournals)
  }

  const modal = useRef(null)

  return (
    <Router>
      <div className='flex flex-col bg-gradient-to-r from-green-500 to-blue-500 dark:from-blue-900 dark:to-purple-500 dark:text-white  min-h-screen duration-500 overflow-hidden'>
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
          <Route exact path='/projects'>
            <Projects
              filterProjects={filterProjects}
              categories={allProjects}
              projects={projects}
            ></Projects>
          </Route>
          <Route exact path='/skills'>
            <Skills
              filterCategories={filterCategories}
              categories={allCategories}
              skills={skill}
              modal={modal}
            ></Skills>
          </Route>
          <Route exact path='/journal'>
            <Journal modal={modal}
              filterJournals={filterJournals}
              categories={allJournals}
              journals={journals}

            ></Journal>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
