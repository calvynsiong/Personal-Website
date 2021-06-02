import { useEffect } from 'react'
import useDarkMode from './useDarkMode'
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Experiences from './components/Experiences'
import About from './components/About'
import Header from './components/Header'
import Journal from './components/Journal'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App () {
  const [setTheme, currentTheme, theme] = useDarkMode()

  return (
    <Router>
      <div className='flex flex-col bg-blue-100  dark:bg-blue-900 dark:text-white  min-h-screen duration-500'>
        <Header
          currentTheme={currentTheme}
          theme={theme}
          setTheme={setTheme}
        ></Header>
        <Switch>
          <Route exact path='/'> <Home theme={theme}/>  </Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/experiences' component={Experiences} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/journal' component={Journal} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
