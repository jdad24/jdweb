import './index.scss';
import NavigationBar from '../components/navigation-bar';
import { Routes, Route } from 'react-router';
import About from '../pages/about';
import Projects from '../pages/projects';
import Experience from '../pages/experience';

function App() {
  return (
    <div className="app-container">
      <NavigationBar items={['About', 'Experience', 'Projects', 'Contact']} />
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
