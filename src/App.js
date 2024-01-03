import Navbar from './components/navbar/navbar';
import Intro from './components/intro/intro';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';
import Contact from './components/contact/contact';
import Experience from './components/experience/experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
    </div>
  );
}

export default App;
