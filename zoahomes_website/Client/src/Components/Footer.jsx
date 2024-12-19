import React, { useEffect, useState } from 'react';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import fetchCompanyContent from '../utils/fetchCompanyContent';4
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import './Footer.css'





const Footer = ({ country }) => {

  const [content, setContent] = useState(null);
  
  const getCountryClassName = () => {
    const selectedCountry = localStorage.getItem('selectedCountry') || 'Ethiopia';
    switch (selectedCountry) {
      case 'Ethiopia':
        return 'ethiopia-color'; // Class for Ethiopia
      case 'Kenya':
        return 'kenya-color'; // Class for Kenya
      default:
        return ''; // Default class
    }
  };

  useEffect(() => {
    const loadContent = async () => {
      console.log("Country passed to fetchCompanyContent:", country);
      const data = await fetchCompanyContent(country);
      console.log("Fetched Content:", data);
      setContent(data)
    }
    loadContent();
  }, [country]);


  return (
    <div>
      {content ? (
      <div className= {`footerWrapper d-flex ${getCountryClassName()}`}  style={{padding:"40px 250px", color:"white", justifyContent:"space-between", width: "100%" }}>
        <div className='footerContent d-flex col-md-12' style={{ color:"white", justifyContent:"space-between" }}>
        <div className='footerContents col-md-5' style={{fontFamily: "Inter"}}>
        <div className='d-flex' style={{justifyContent: "center"}}><b>{content.company_name}</b></div>
        <div className='d-flex' style={{justifyContent: "center"}}>{content.address}</div>
        <div className='d-flex' style={{justifyContent: "center"}}>{content.address2}</div>
        <div className='d-flex' style={{justifyContent: "center"}}>{content.description}</div>

      </div>
      <div className='footerContents col-md-3' style={{fontFamily: "Inter", paddingTop: "2%"}}>
      <div className='d-flex' style={{justifyContent: "center"}}><b>Phone Number</b></div>
      <div className='d-flex' style={{justifyContent: "center"}}>{content.phone}</div>
      {/* <div className='d-flex' style={{justifyContent: "center"}}><b>Email: </b>{content.email}</div> */}
      </div>
      <div className='footerIcons footerContents d-flex col-md-3' style={{paddingTop: "4%", justifyContent:"space-between", fontSize: "25px", color: '#e2b808'}}>
        <AiFillTwitterCircle />
        <BiLogoFacebookCircle/>
        <AiFillInstagram  />
        <IoLogoLinkedin />
        <FaTelegram />
        <RiWhatsappFill />
      </div>
        </div>
      
    </div> ) : 
    (<p></p>)}
    </div>
    
    
  )
}

export default Footer