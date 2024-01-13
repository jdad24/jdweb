import "./App.css";
import Header from "./components/Header";
import About from "./pages/About";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <Switch>
          <div className="page-container">
            <Route exact path={["/", "/about", "/jdweb"]}>
              <div>
                <About className="about" />
              </div>
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
