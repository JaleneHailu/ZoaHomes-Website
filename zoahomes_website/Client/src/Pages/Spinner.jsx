import React from 'react'
import './Spinner.css'
import '../assets/main.css'

const Spinner = () => {
  const getCountryClassName = () => {
    const selectedCountry = localStorage.getItem('selectedCountry') || 'Ethiopia';
    console.log(selectedCountry);
    switch (selectedCountry) {
      case 'Ethiopia':
        return 'ethiopia-spinner'; // Class for Ethiopia
      case 'Kenya':
        return 'kenya-spinner'; // Class for Kenya
      default:
        return ''; // Default class
    }
  };

  return (
    <div className="spinner cover2">
      <div className={`loader ${getCountryClassName()}`}></div>
    </div>
  );
};


export default Spinner