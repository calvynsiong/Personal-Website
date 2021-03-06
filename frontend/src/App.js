import { useState, useRef, useEffect } from 'react';
import useDarkMode from './utils/useDarkMode';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Experiences from './components/Experiences';
import About from './components/About';
import Header from './components/Header';
import Journal from './components/Journal';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { skills, sideProjects } from './data/data';
import { JournalContent } from './data/JournalContentData';
import StarsCanvas from './utils/animateBackground';

function App() {
  const allCategories = [
    'All',
    ...new Set(skills.map((skill) => [...skill.category]).flat()),
  ];
  const allProjects = [
    'All Projects',
    ...new Set(sideProjects.map((project) => [...project.category]).flat()),
  ];

  const allJournals = [
    'All Journals',
    ...new Set(
      JournalContent.map((entry) => entry.period).sort((a, b) =>
        a > b ? 1 : -1
      )
    ),
  ];

  const [setTheme, currentTheme, theme] = useDarkMode();
  const [speed, setSpeed] = useState(0.001);
  const [skill, setSkill] = useState(skills);
  const [projects, setProjects] = useState(sideProjects);
  const [journals, setJournals] = useState(JournalContent);

  const filterCategories = (category) => {
    if (category.includes('All')) {
      setSkill(skills);
      return;
    }
    const newSkills = skills.filter((skill) =>
      skill.category.includes(category)
    );

    setSkill(newSkills);
  };

  const filterProjects = (category) => {
    if (category.includes('All Projects')) {
      setProjects(sideProjects);
      return;
    }
    const newProjects = sideProjects.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newProjects);
  };

  const filterJournals = (period) => {
    if (period === 'All Journals') {
      setJournals(JournalContent);
      return;
    }
    const newJournals = JournalContent.filter((entry) =>
      entry.period.includes(period)
    );
    setJournals(newJournals);
  };

  const modal = useRef(null);

  return (
    <Router>
      <div className='flex flex-col bg-gradient-to-r from-blue-500 to-blue-500  dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-white  min-h-screen  overflow-y-hidden duration-200 '>
        <StarsCanvas currentTheme={currentTheme} speed={speed} />
        <Header
          currentTheme={currentTheme}
          theme={theme}
          setTheme={setTheme}
          speed={speed}
          setSpeed={setSpeed}
        ></Header>
        <Switch>
          <Route exact path='/'>
            {' '}
            <Home theme={theme} />{' '}
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
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
            <Journal
              modal={modal}
              filterJournals={filterJournals}
              categories={allJournals}
              journals={journals}
            ></Journal>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
