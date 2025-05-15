import NavBar from './components/NavBar.jsx';
import HomePage from "./components/Home-page.jsx";
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx'

import backgroundVideo from './assets/background.mp4'
import './main.css';

function App() {
  

  return (
   <>
    <section className="home">
    <video src={backgroundVideo} autoPlay loop muted></video>
        <NavBar />
        <HomePage />
    </section>
    <div className='sections'>
      <About />
      <Portfolio />
      <Contact />
    </div>
   </>
  );
}

export default App;
