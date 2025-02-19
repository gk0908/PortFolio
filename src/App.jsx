import { Routes, Route ,useLocation} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import ParticlesComponent from './utils/ParticlesComponent';
import './App.scss';
import Contact from './components/container/contact';
import Home from './components/container/home';
import About from './components/container/about';
import Resume from './components/container/resume';
import Portfolio from './components/container/portfolio';
import Skills from './components/container/skills';

function App() {
  const location = useLocation();
  console.log(location);
  const handleInit = async (main) => {
    await loadFull(main);
  };
  const renderParticleJSInHomePage=location.pathname === '/';

  return (
    <div className="App">
      {
      renderParticleJSInHomePage && 
      <ParticlesComponent id="particles" init={handleInit} />
      }
      
      <Navbar />

      <div className='App_main-page-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;