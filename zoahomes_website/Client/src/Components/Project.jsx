import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchCompanyContent from '../utils/fetchCompanyContent';
import image from '../assets/property1.jpg';
const Project = ({country}) => {
  const [content, setContent] = useState(null);
  const selectedCountry = localStorage.getItem('selectedCountry') || 'default-country';

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchCompanyContent(country);
      setContent(data);
    };
    loadContent();
  }, [country]);


  return (
    <div>
          {content ? (
    <div className="col-md-3" data-aos="fade-up" data-aos-delay="1000">
    <div style={{ width: "80%", margin: "0 auto" }}>
      <img src={image} alt={content.project} style={{ width: "100%" }} />
    </div>
    <div style={{ textAlign: "center" }} className="col-md-12">
      <h1 style={{ fontSize: "40px", color: "#000814" }} className="mb-2 mt-4">{content.project1}</h1>
      <h5 className="mt-4" style={{ color: "#000" }}>{content.location1}</h5>
      <Link to={`/${selectedCountry}/ProjectDetail`}>
        <div className="d-flex mt-2" style={{ justifyContent: "center" }}>
          <button style={{ width: "100%", borderColor: "#000", backgroundColor: "#fff", height: "40px" }}>See Inside the Project</button>
        </div>
      </Link>
      <p className="mt-2" style={{ textAlign: "justify" }}>{content.description1}</p>
    </div>
  </div> ) : (<p></p>) }
    </div>
  )
}

export default Project