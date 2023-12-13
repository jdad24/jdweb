import './App.css';
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        {/* <Switch>
          <div className='page-container'>
            <Route exact path={["/", "/home", "/jdweb"]}><div><Home className="home" /></div></Route>
            <Route exact path="/projects"><div><Projects className="projects" /></div></Route>
            <Route exact path="/education"><div><Education className="education" /></div></Route>
          </div>         
        </Switch> */}
      </Router>
    </div>
  );
}

export default App;
