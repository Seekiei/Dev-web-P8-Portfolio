
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Technologie from './components/Technologie/Technologie.jsx';
import Main from './components/Main/Main.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Projets from './components/Projets/Projets.jsx';
import { BrowserRouter } from "react-router-dom";

// import jira from "../src/assets/jira.png";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main/>
      <About/>
      <Projets/>
      <Technologie/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
