import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Education from './pages/Education'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <Switch>
          <Route exact path="/login"><Login /></Route>
          <Route exact path={["/", "/home", "/jdweb"]}><div><Home className="home" /></div></Route>
          <Route exact path="/projects"><div><Projects className="projects" /></div></Route>
          <Route exact path="/education"><div><Education className="education" /></div></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
