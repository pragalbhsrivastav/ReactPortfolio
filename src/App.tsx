import './App.css';
import { NavBar } from './components/NavBar';
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
          <NavBar />
          <Banner />
          <Skills />
          <Projects />
        </div>
      <Routes>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
