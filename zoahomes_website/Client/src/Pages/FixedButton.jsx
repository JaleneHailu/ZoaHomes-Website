import React, { useState, useEffect } from 'react';
import './FixedButton.css';
import { FaWhatsapp } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const FixedButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state
  const [isHidden, setIsHidden] = useState(false); // Button visibility state
  const selectedCountry = localStorage.getItem('selectedCountry') || 'Ethiopia'; // Default to Ethiopia if not found
  const location = useLocation(); // Get the current route

  // Map of countries to WhatsApp numbers and company names
  const countryData = {
    Ethiopia: {
      whatsappUrl: 'https://wa.me/+251944331133', // Example WhatsApp number for Ethiopia
      companyName: 'Avi Trust Homes',
    },
    Kenya: {
      whatsappUrl: 'https://wa.me/+254114170371', // Example WhatsApp number for Kenya
      companyName: 'Zoa Life',
    },
  };

  // Define exact paths where the button should be hidden
  const hiddenRoutes = ['/'];

  useEffect(() => {
    // Update visibility state whenever location.pathname changes
    setIsHidden(hiddenRoutes.includes(location.pathname));
  }, [location.pathname]); // Listen specifically to changes in pathname

  // Handle opening the modal
  const handleClick = () => {
    setIsModalOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle starting the chat
  const startChat = () => {
    const whatsappUrl = countryData[selectedCountry].whatsappUrl;
    window.open(whatsappUrl, '_blank'); // Open WhatsApp link in a new tab
    closeModal(); // Close the modal
  };

  // If the current route matches a hidden route, do not render the button
  if (isHidden) return null;

  return (
    <>
      <button className="fixed-button d-flex" onClick={handleClick}>
        <div className='whatsupIcon'>
          <FaWhatsapp />
        </div>
        Enquire Now
      </button>

      {isModalOpen && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className='close-modal' onClick={closeModal}>X</button>
            <h2>{countryData[selectedCountry].companyName}</h2>
            <p>Start a conversation with us on WhatsApp.</p>
            <button className="start-chat-btn" onClick={startChat}>
              <FaWhatsapp className="whatsupIcon" /> Start Chat
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FixedButton;
