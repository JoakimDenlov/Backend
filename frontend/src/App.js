import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import SideBar from './Components/SideBar/Sidebar'
import Home from '../src/view/HomeView'
import Resume from '../src/view/ResumeView'
import Review from '../src/view/ReviewView'
import Timeline from './Components/Timeline/Timeline'


function App() {
  return (
    <Router>
    <SideBar />
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/timeline" component={Timeline} />
    <Route path="/review" component={Review} />
    </Router>

  );
}

export default App;