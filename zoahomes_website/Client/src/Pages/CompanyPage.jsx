// import heroImage from '../assets/hero3.png';
// import heroImage2 from '../assets/c5.png';
// import heroImage3 from '../assets/herro.png';
// import heroImage4 from '../assets/AVI B1.png';
// import heroImage5 from '../assets/herr05.png';
// import heroImage6 from '../assets/hero6.png';
// import mobileHeroImage from '../assets/living3.png'; // Example mobile images
// import mobileHeroImage2 from '../assets/living2.png';

import React, { useEffect, useState } from 'react';
import fetchCompanyContent from '../utils/fetchCompanyContent';
import './Company.css';
import Spinner from './Spinner';
import Header from '../Components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
// Desktop Images
import heroImageEth from '../assets/Avi/CompanyCoverAvi.png';
import heroImageEth2 from '../assets/Avi/CompanyCoverAvi2.png';
import heroImageEth3 from '../assets/Avi/AviKalosTy1&2.11.jpg';
import heroImageEth4 from '../assets/Avi/AviKalosTy1&2.2.jpg';
import heroImageKen from '../assets/Zoa/CompanyCover2.jpg';
import heroImageKen2 from '../assets/Zoa/CompanyCoverZoa2.jpg';
import heroImageKen3 from '../assets/zoa/CompanyCoverZoa3.jpg';
import heroImageKen4 from '../assets/Zoa/CompanyCoverZoa4.jpg';
import heroImageKen5 from '../assets/Zoa/CompanyCoverZoa5.jpg';
// Mobile Images
import heroImageEthMobile from '../assets/Avi/CompanyCoverAvi.png';
import heroImageEthMobile2 from '../assets/Avi/CompanyCoverAvi2.png';
import heroImageEthMobile3 from '../assets/Avi/AviKalosTy1&2.11.jpg';
import heroImageKenMobile from '../assets/Zoa/CompanyCoverZoa5.jpg';
import heroImageKenMobile2 from '../assets/Zoa/CompanyCoverZoa2.jpg';
import heroImageKenMobile3 from '../assets/Zoa/CompanyCoverZoa3.jpg';

const CompanyPage = ({ country }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      delay: 200,
    });
  }, []);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchCompanyContent(country);
      setContent(data);
    };
    loadContent();
  }, [country]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Define images based on country and device type
  const getImages = () => {
    if (country === 'Ethiopia') {
      return isMobile
        ? [heroImageEthMobile, heroImageEthMobile2, heroImageEthMobile3]
        : [heroImageEth, heroImageEth2, heroImageEth3, heroImageEth4];
    } else if (country === 'Kenya') {
      return isMobile
        ? [heroImageKenMobile, heroImageKenMobile2, heroImageKenMobile3]
        : [heroImageKen, heroImageKen2, heroImageKen3, heroImageKen4, heroImageKen5 ];
    } else {
      return []; // Fallback: Add default images if needed
    }
  };

  const images = getImages();

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <Header />
          <Swiper
            lazy={true}
            modules={[Autoplay, Navigation, EffectFade]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            effect="fade"
            fadeEffect={{
              crossFade: true,
            }}
            speed={3000}
            pagination={{ clickable: true }}
            navigation
            loop={true}
            style={{ height: '100vh', color: 'white' }}
          >
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                style={{
                  backgroundImage: `url(${img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '100vh',
                }}
              >
                {content ? (
                  <div
                    className="companyText"
                    style={{ position: 'absolute', top: '60vh', width: '100%' }}
                  >
                    <h1
                      style={{
                        color: '#fff',
                        fontSize: '6em',
                        width: '100%',
                        letterSpacing: '0.15em',
                        textAlign: 'center',
                      }}
                    >
                      {content.title}
                    </h1>
                    <p
                      style={{
                        color: 'white',
                        fontSize: '1.5em',
                        textAlign: 'center',
                      }}
                    >
                      {content.description}
                    </p>
                  </div>
                ) : (
                  <p></p>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default CompanyPage;
