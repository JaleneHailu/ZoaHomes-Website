import React from 'react'
import Header from '../Components/Header'
import Spinner from './Spinner';
import { IoBedOutline } from "react-icons/io5";
import blueprint from '../assets/blueprint.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';





const AirportProjectDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  const selectedCountry = localStorage.getItem('selectedCountry') || 'default-country';


  const images = [
    // '../assets/living1.png',
    // '../assets/bedromm1.png',
    // '../assets/bath1.png',
    'https://static.wixstatic.com/media/2b71ec_956d86d1c08d4cbba61e9843d605d6aa~mv2.jpg/v1/fill/w_980,h_819,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2b71ec_956d86d1c08d4cbba61e9843d605d6aa~mv2',
    'https://static.wixstatic.com/media/4a7193_cb8625b755284b27889a92c235db5e3e~mv2.jpg/v1/fill/w_980,h_819,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/4a7193_cb8625b755284b27889a92c235db5e3e~mv2.jpg',
  ];
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ):(
    <div>
      <div className='headerdiv mb-5' style={{ height:"95px"}}>
        <Header  />
        </div>
        <div className='container'>
          <div className='col-md-10' style={{width:"90%", marginRight:"auto", marginLeft:"auto", marginTop:"3%"}}>
            <div className='d-flex'>
          <div className='col-md-6'>
          <Swiper 
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 2000, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
              }}
            >
          </SwiperSlide>
        ))}
          </Swiper>

            {/* <LazyLoadImage src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5 mt-4'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 1</h1>
            <span><h4 className='mt-4' style={{color:"#555", fontSize:"20px"}}>Kalos Heights | Appartment 1</h4></span>
            </div>
            <div className='d-flex col-md-4 mt-5' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}><IoBedOutline /></p>
            <p style={{fontSize:"18px"}} className='mt-2'>3 Bed Rooms</p>
            </div>
            <div className='d-flex col-md-4' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <LazyLoadImage src={blueprint} alt="" style={{width: "30px"}}effect="blur" />
            </p>
            <Link to={`/${selectedCountry}/info`}>
            <p style={{fontSize:"15px", marginLeft:"-100px"}} className='mt-2'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>
          </div>

          <div className='d-flex' style={{marginTop:"150px"}}>
          <div className='col-md-6'>
          <Swiper 
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 2000, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
              }}
            >
          </SwiperSlide>
        ))}
          </Swiper>

            {/* <LazyLoadImage src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5 mt-4'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 2</h1>
            <span><h4 className='mt-4' style={{color:"#555", fontSize:"20px"}}>Kalos Heights | Appartment 2</h4></span>
            </div>
            <div className='d-flex col-md-4 mt-5' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}><IoBedOutline /></p>
            <p style={{fontSize:"18px"}} className='mt-2'>3 Bed Rooms</p>
            </div>
            <div className='d-flex col-md-4' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <LazyLoadImage src={blueprint} alt="" style={{width: "30px"}}effect="blur" />
            </p>
            <Link to={`/${selectedCountry}/info`}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>
          </div>

          <div className='d-flex ' style={{margin:"150px 0"}}>
          <div className='col-md-6'>
          <Swiper 
            lazy={true}
            modules={[ Autoplay, EffectFade]}
            autoplay={{
              delay: 2000, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
              }}
            >
          </SwiperSlide>
        ))}
          </Swiper>

            {/* <LazyLoadImage src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 3</h1>
            <span><h4 className='mt-4' style={{color:"#555", fontSize:"20px"}}>Kalos Heights | Appartment 3</h4></span>
            </div>
            <div className='d-flex col-md-4 mt-5' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}><IoBedOutline /></p>
            <p style={{fontSize:"18px"}} className='mt-2'>3 Bed Rooms</p>
            </div>
            <div className='d-flex col-md-4' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <LazyLoadImage src={blueprint} alt="" style={{width: "30px"}}effect="blur" />
            </p>
            <Link to={`/${selectedCountry}/info`}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>

          </div>

          <div className='d-flex ' style={{margin:"150px 0"}}>
          <div className='col-md-6'>
          <Swiper
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 2000, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
              }}
            >
          </SwiperSlide>
        ))}
          </Swiper>

            {/* <LazyLoadImage src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 4</h1>
            <span><h4 className='mt-4' style={{color:"#555", fontSize:"20px"}}>Kalos Heights | Appartment 4</h4></span>
            </div>
            <div className='d-flex col-md-4 mt-5' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}><IoBedOutline /></p>
            <p style={{fontSize:"18px"}} className='mt-2'>1 Bed Rooms</p>
            </div>
            <div className='d-flex col-md-4' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <LazyLoadImage src={blueprint} alt="" style={{width: "30px"}}effect="blur" />
            </p>
            <Link to={`/${selectedCountry}/info`}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>

          </div>

          <div className='d-flex ' style={{margin:"150px 0"}}>
          <div className='col-md-6'>
          <Swiper 
            lazy={true}
            modules={[ Autoplay, EffectFade]}
            autoplay={{
              delay: 2000, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '50vh',
              }}
            >
          </SwiperSlide>
        ))}
          </Swiper>

            {/* <LazyLoadImage src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 5</h1>
            <span><h4 className='mt-4' style={{color:"#555", fontSize:"20px"}}>Kalos Heights | Appartment 5</h4></span>
            </div>
            <div className='d-flex col-md-4 mt-5' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}><IoBedOutline /></p>
            <p style={{fontSize:"18px"}} className='mt-2'>2 Bed Rooms</p>
            </div>
            <div className='d-flex col-md-4' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <LazyLoadImage src={blueprint} alt="" style={{width: "30px"}}effect="blur" />
            </p>
            <Link to={`/${selectedCountry}/info`}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>

          </div>

          </div>
        </div>

        <Footer />

    </div>
      )}
    </div>
  )
}

export default AirportProjectDetail