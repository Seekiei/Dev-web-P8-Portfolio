import './Navbar.css';
import logo from "../../assets/logo/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

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
		<header>
			<Link to="/"><img className='logo-nav' src={logo} alt="Logo" /></Link>
			<nav className={isMenuOpen ? "responsive_nav" : ""}>
        <a href="#About" onClick={handleClick}>A Propos</a>
				<a href="#Mes-Projets" onClick={handleClick}>Mes Projets</a>
				<a href="#Technologie" onClick={handleClick}>Technologie</a>
				<a href="#Contact" onClick={handleClick}>Contact</a>
				<button className={`nav-btn ${isMenuOpen ? 'nav-close-btn' : ''}`} onClick={showBurgerMenu} >
					<FaTimes />
				</button>
			</nav>
			<button className={`nav-btn ${isMenuOpen ? 'nav-close-btn' : ''}`} onClick={showBurgerMenu} >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
		</header>
	);
}

export default Navbar;

