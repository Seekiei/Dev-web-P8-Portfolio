import './App.scss';
import Navbar from './components/Navbar/Navbar.jsx';
import About from './components/About/About.jsx';
import Projets from './components/Projets/Projets.jsx';
import Technologie from './components/Technologie/Technologie.jsx';
import Main from './components/Main/Main';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import { BrowserRouter } from "react-router-dom";

// import jira from "../src/assets/jira.png";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Main/>
      <About/>
      <Projets/>
      <Modal/>
      <Technologie/>
      <Contact/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
