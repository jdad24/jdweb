import './index.scss';
import NavigationBar from '../components/navigation-bar';
import { Routes, Route } from 'react-router';
import About from '../pages/about';
import Projects from '../pages/projects';
import Experience from '../pages/experience';
import Home from '../assets/home.svg'
import Folder from '../assets/folder.svg'
import Phone from '../assets/phone.svg'
import Asterick from '../assets/asterick.svg'

function App() {
  const navItems = [
    {
      name: "Experience",
      picture: Asterick
    },
    {
      name: "Projects",
      picture: Folder
    },
    {
      name: "About",
      picture: Home
    },
    {
      name: "Contact",
      picture: Phone
    }
  ]
  return (
    <div className="app-container">
      <NavigationBar items={navItems} />
      <div className='page-content'>
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
