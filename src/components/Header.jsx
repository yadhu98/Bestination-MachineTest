import React ,{useState} from 'react';
import './Header.scss';
import logo from '../assets/bestination-header-logo.png'
import appNavIcon from '../assets/application-icon.png'
const Header = () => {

  const [activeLink, setActiveLink] = useState('home'); // Track the active link

  const handleNavClick = (sectionId) => {
    setActiveLink(sectionId); // Update the active link
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to section
    }
  };

  return (
    <header className="header">
      <div className="logo">
          <img src={logo} alt="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>
            <a
              href="#home"
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#international"
              className={activeLink === 'international' ? 'active' : ''}
              onClick={() => handleNavClick('international')}
            >
              International
            </a>
          </li>
          <li>
            <a
              href="#domestic"
              className={activeLink === 'domestic' ? 'active' : ''}
              onClick={() => handleNavClick('domestic')}
            >
              Domestic
            </a>
          </li>
          <li>
            <a
              href="#custom-trip"
              className={activeLink === 'custom-trip' ? 'active' : ''}
              onClick={() => handleNavClick('custom-trip')}
            >
              Custom trip
            </a>
          </li>
          <li>
            <a
              href="#visa"
              className={activeLink === 'visa' ? 'active' : ''}
              onClick={() => handleNavClick('visa')}
            >
              Visa
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeLink === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about')}
            >
              About us
            </a>
          </li>
        </ul>
      </nav>
      <div className='last-item'>
        <button className='angular-gradient-btn'>
          Enquire Now
        </button>
        <img src={appNavIcon} alt="icon" />
      </div>
    </header>
  );
};

export default Header;