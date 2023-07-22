import './Navbar.css';
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const showBurgerMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  const handleClick = (event) => {
        event.preventDefault();
        const { href } = event.target;
        const sectionId = href.substring(href.indexOf('#'));
        const targetElement = document.querySelector(sectionId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
        showBurgerMenu();
      };

	return (
		<motion.header initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 2 }} >
			<Link to="/"><img className='logo-nav' src={logo} alt="Logo" /></Link>
			<nav className={isMenuOpen ? "responsive_nav" : ""}>
        <a href="#About" onClick={handleClick}>About Me</a>
        <a href="#Technologie" onClick={handleClick}>Technologie</a>
				<a href="#Mes-Projets" onClick={handleClick}>Project</a>
				<a href="#Contact" onClick={handleClick}>Contact</a>
				<button type="button" value="Input" className={`nav-btn ${isMenuOpen ? 'nav-close-btn' : ''}`} onClick={showBurgerMenu} >
					<FaTimes />
				</button>
			</nav>
			<button type="button" className={`nav-btn ${isMenuOpen ? 'nav-close-btn' : ''}`} onClick={showBurgerMenu} >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
		</motion.header>
	);
}

export default Navbar;

