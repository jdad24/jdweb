import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header'
import Home from './Home/Home'
import Projects from './Projects/Projects'
import Education from './Education/Education'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <Switch>
          <Route exact path={["/", "/home", "/jdweb"]}><div><Home className="home"/></div></Route>
          <Route exact path="/projects"><div><Projects className="projects"/></div></Route>
          <Route exact path="/education"><div><Education className="education"/></div></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
