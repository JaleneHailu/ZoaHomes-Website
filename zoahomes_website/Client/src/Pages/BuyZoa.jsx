import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import fetchCompanyContent from '../utils/fetchCompanyContent';
import Header from '../Components/Header';
import Spinner from './Spinner';
import imageEthiopia1 from '../assets/Zoa/BuyZoaProject1.jpg';
import imageEthiopia2 from '../assets/Zoa/BuyZoaProject1.jpg';
import imageEthiopia3 from '../assets/Zoa/BuyZoaProject1.jpg';
// import imageKenya1 from '../assets/10.png';
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BuyZoa = ({country}) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  const getCountryClassName = () => {
    const selectedCountry = localStorage.getItem('selectedCountry') || 'Ethiopia';
    switch (selectedCountry) {
      case 'Ethiopia':
        return 'ethiopia-header'; // Class for Ethiopia
      case 'Kenya':
        return 'kenya-header'; // Class for Kenya
      default:
        return ''; // Default class
    }
  };

  // Store project-specific images
  const countryImages = {
    Ethiopia: {
      project1: imageEthiopia1,
      project2: imageEthiopia2, // Replace with specific image for project2
      project3: imageEthiopia3,  // Replace with specific image for project3
    }
  };

  const selectedCountry = localStorage.getItem('selectedCountry') || 'Ethiopia';
  const validCountry = selectedCountry in countryImages ? selectedCountry : 'Ethiopia';
  console.log('Selected Country:', selectedCountry);

  AOS.init({
    duration: 1500,
    once: true,
    delay: 200,
  });

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchCompanyContent(country);
      setContent(data);
    };
    loadContent();
  }, [country]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ):(
      <div>
        <div>
          <div className={`${getCountryClassName()}`} style={{ height: '95px' }}>
            <Header />
          </div>
          <div className="mb-5" style={{ width: '90%', marginRight: 'auto', marginLeft: 'auto', marginTop: '3%' }}>

            <div className="mt-3 mb-5">
              <h1 data-aos="fade-up" data-aos-delay="50" style={{ color: 'grey', textAlign: 'center' }} >
                Properties For Sale
              </h1>
              <div>
                {content? (
              <div className=" mt-5">
              {/* Project 1 */}
              <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                <div className='col-md-1'></div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="1000">
                {/* <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                  <LazyLoadImage
                    src={countryImages[validCountry].project1}
                    alt="Project 1"
                    style={{ width: '100%' }}
                    effect="blur"
                  />
                </div> */}
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="1000">
                <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                  <LazyLoadImage
                    src={countryImages[validCountry].project1}
                    alt="Project 1"
                    style={{ width: '100%' }}
                    effect="blur"
                  /> <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe sequi necessitatibus labore suscipit recusandae rerum quasi enim voluptatibus laboriosam eos beatae officia, molestias voluptates voluptate assumenda cupiditate reiciendis voluptatum tenetur.
                  Optio harum ab eligendi a veniam omnis minima rerum consectetur saepe, dicta architecto excepturi incidunt magni voluptatibus unde deleniti molestias mollitia possimus modi inventore quo. Officiis quo hic accusamus fugiat!
                  Sunt unde et dolores aperiam! Eveniet, vero hic. Inventore amet unde doloribus pariatur magni esse. Iure quis et, maiores perspiciatis, incidunt labore molestiae modi eveniet eligendi doloremque expedita sapiente veritatis?</p>
                </div>
              </div>
              <div className="col-md-3" data-aos="fade-up" data-aos-delay="1000">
                {/* <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
                  <LazyLoadImage
                    src={countryImages[validCountry].project1}
                    alt="Project 1"
                    style={{ width: '100%' }}
                    effect="blur"
                  />
                </div> */}
              </div>
              <div className='col-md-1'></div>
              </div>
              <div style={{ textAlign: 'center' }} className="col-md-12">
                  <h1 style={{ fontSize: '30px', color: '#000814' }} className="mb-2 mt-4">
                    {content.project1}
                  </h1>
                  <h5 className="mt-4" style={{ color: '#000', fontSize: '17px' }}>
                    {content.location1}
                  </h5>
                  <Link to={`/${selectedCountry}/ZoaProjectDetail`}>
                    <div className="d-flex mt-2" style={{ justifyContent: 'center' }}>
                      <button style={{ width: '60%', borderColor: '#000', backgroundColor: '#fff', height: '40px', border: "0.5px solid #000" }}>
                        View the Project
                      </button>
                    </div>
                  </Link>
                  <p className="mt-4 col-md-10" style={{ textAlign: 'justify', marginLeft: 'auto', marginRight: "auto" }}>
                    {content.description1}
                  </p>
                </div>
            </div>
                ):(<div></div>)}
              </div>

            </div>

          </div>
        </div>
        <Footer country={country}/>
        </div>
      )}
    </div>
  );
};

export default BuyZoa;
