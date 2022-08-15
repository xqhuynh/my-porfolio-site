import './App.css';
import NavBar from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Main />
      break
    case "/resume":
      component = <Resume />
      break
    case "/projects":
      component = <Projects />
      break
    case "/contact":
      component = <Contact />
  }
  return (
    <div className="App">
      <NavBar />
      {component}
      <Footer />
    </div>
  );
}

export default App;
