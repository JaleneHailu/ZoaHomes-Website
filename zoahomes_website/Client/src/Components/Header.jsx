import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import imageEthiopia1 from "../assets/Logo-2-100x39.png";
import imageKenya1 from "../assets/5-09.png";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // For mobile menu
  const { country } = useParams(); // Get the selected country from the URL

  const countryData = {
    Ethiopia: {
      image1: imageEthiopia1,
      phoneNumber: "251944331133", // Example phone number for Ethiopia
    },
    Kenya: {
      image1: imageKenya1,
      phoneNumber: "254114170371", // Example phone number for Kenya
    },
  };

  const getCountryClassName = () => {
    const selectedCountry = localStorage.getItem("selectedCountry") || "Ethiopia";
    switch (selectedCountry) {
      case "Ethiopia":
        return "ethiopia-nav"; // Class for Ethiopia
      case "Kenya":
        return "kenya-nav"; // Class for Kenya
      default:
        return ""; // Default class
    }
  };

  const selectedCountry = localStorage.getItem("selectedCountry") || "Ethiopia";
  const validCountry = selectedCountry in countryData ? selectedCountry : "Ethiopia";

  const isActive = (path) => location.pathname === `/${country}${path}`;

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <header
      id="header"
      className={`header d-flex fixed-top ${getCountryClassName()} header${getCountryClassName()}`}
    >
      <nav
        className="navv container-fluid position-relative d-flex"
        style={{ justifyContent: "space-between" }}
      >
        {/* Logo */}
        <Link to={`/${selectedCountry}`} className={isActive("/buy") ? "active-link" : ""}>
          <img src={countryData[validCountry].image1} alt="Logo" className="logo-top" />
        </Link>

        {/* Nav Menu */}
        <nav
          id="navmenu"
          className={`navmenu d-flex ${isDropdownOpen ? "dropdown-open" : ""}`}
          style={{ fontSize: "1em" }}
        >
          <ul className={isDropdownOpen ? "dropdown-list open" : "dropdown-list"}>
            <li>
              <Link to={`/${selectedCountry}/buy`} className={isActive("/buy") ? "active-link" : ""}>
                BUY
              </Link>
            </li>
            <li>
              <Link
                to={`/${selectedCountry}/corporate`}
                className={isActive("/corporate") ? "active-link" : ""}>
                CORPORATE
              </Link>
            </li>
            <li>
              <Link
                to={`/${selectedCountry}/contact`}
                className={isActive("/contact") ? "active-link" : ""}>
                CONTACT
              </Link>
            </li>
            <li
            className="phoneNumberHeader"
            >
                <a
                  href={`https://wa.me/${countryData[validCountry].phoneNumber}`}
                  target="_blank" // This ensures it opens in a new tab
                  rel="noopener noreferrer"object
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <div className="headerPhone">
      <FaPhoneVolume />
    </div>
    <div>+{countryData[validCountry].phoneNumber}</div>
  </a>
            </li>
          </ul>
          {/* <button 
            className=""
            style={{border: 'none', backgroundColor:'transparent', color: 'white', marginTop:'38px', width:"150px", marginRight:"10px", marginLeft:"auto" }}
          >
              
              </button> */}
        </nav>

        {/* Mobile Toggle */}
        <div className="dropdownmenu">
          <i
            className="mobile-nav-toggle d-xl-none bi bi-list dropdownmenu-icon"
            onClick={toggleDropdown}
          ></i>
        </div>
      </nav>
      {/* Phone Number */}
      
    </header>
  );
};

export default Header;
