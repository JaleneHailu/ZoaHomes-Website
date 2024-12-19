import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactCountryFlag from 'react-country-flag';
import 'flag-icons/css/flag-icons.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './LandingPage.css';
import '../assets/main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);
  const [typedText, setTypedText] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const options = [
    { name: 'Select Projects In' },
    { name: 'Ethiopia', code: 'ET', value: 'Ethiopia' },
    { name: 'Kenya', code: 'KE', value: 'Kenya' },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    localStorage.setItem('selectedCountry', option.value); // Save to localStorage
    setIsOpen(false);
    navigate(`/${option.value}`); // Navigate to the selected country path
  };

  AOS.init({
    duration: 1500,
    once: true,
    delay: 2000,
  });

  // Display welcome text for a few seconds before transitioning
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    const welcomeTimer = setTimeout(() => {
      setShowWelcome(false);
      setShowDropdown(true);
    }, 2000);

    return () => clearTimeout(welcomeTimer);
  }, []);

  // Typing animation effect for the dropdown button text
  useEffect(() => {
    if (showDropdown) {
      const text = `BBuilding Africans' Future, One Landmark at a Time`;
      let index = 0;

      // Reset the text to ensure a clean start
      setTypedText('');

      // Typing interval
      const typingInterval = setInterval(() => {
        if (index <= text.length) {
          setTypedText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust speed if needed

      // Cleanup on unmount
      return () => clearInterval(typingInterval);
    }
  }, [showDropdown]);

  return (
    <div id="hero" className="cover d-flex align-items-center">
      <div className="container">
        <div className="row gy-4 justify-content-center marginTop">
          <div className="col-lg-9 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center text-center">
            {showWelcome ? (
              <div className="fade-out">
                <h1
                  style={{
                    color: '#fff',
                    fontSize: '3em',
                    letterSpacing: '0.15em',
                    fontWeight: '50',
                    marginLeft: '15vw',
                  }}
                  className="typing-text"
                >
                  WELCOME TO ZOAAVI
                </h1>
              </div>
            ) : (
              <div className="dropdown">
                <button onClick={toggleDropdown} className="dropdown-btn">
                  <h1
                    style={{
                      color: '#fff',
                      fontSize: '0.8em',
                      letterSpacing: '0.15em',
                      fontWeight: '400',
                    }}
                  >
                    {typedText}
                  </h1>
                </button>
                {isOpen && (
                  <div
                    className="dropdown-content"
                    data-aos="fade-up"
                    style={{ display: isOpen ? 'block' : 'none' }}
                  >
                    {options.map((option, index) => (
  <div
    key={index}
    onClick={() => handleOptionClick(option)}
    className={`dropdown-option d-flex align-items-center 
      ${option.name === 'Ethiopia' ? 'selected' : ''} 
      ${!option.value ? 'disabled' : ''}`} /* Add disabled class if no value */
    style={{ cursor: option.value ? 'pointer' : 'not-allowed' }} /* Change cursor */
  >
    <ReactCountryFlag
      aria-label={option.name}
      countryCode={option.code}
      svg
      style={{
        fontSize: '1.7em',
        marginRight: '8px',
        opacity: option.value ? 1 : 0.5, /* Reduce opacity for disabled option */
      }}
    />
    <span>
      <div>{option.name}</div>
    </span>
  </div>
))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
