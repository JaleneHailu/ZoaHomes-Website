import React, { useEffect, useState } from 'react';
import Header from '../Components/Header'
import './projectdetail.css'
import Spinner from './Spinner';
import { IoBedOutline } from "react-icons/io5";
import blueprint from '../assets/blueprint.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import img1 from '../assets/Zoa/ZoaSamimaTy1.jpg'
import img2 from '../assets/Zoa/ZoaSamimaTy1.2.jpg'
import img3 from '../assets/Zoa/ZoaSamimaTy1.3.jpg'
import t2img1 from '../assets/Zoa/ZoaSamimaTy2.jpg'
import t2img2 from '../assets/Zoa/ZoaSamimaTy2.2.jpg'
import t2img3 from '../assets/Zoa/ZoaSamimaTy2.3.jpg'
import t3img1 from '../assets/Zoa/ZoaSamimaTy3.png'
import t3img2 from '../assets/Zoa/ZoaSamimaTy3.2.png'
import t3img3 from '../assets/Zoa/ZoaSamimaty3.3.png'
import t4img1 from '../assets/Zoa/ZoaSamimaTy4.png'
import t4img2 from '../assets/Zoa/ZoaSamimaTy4.2.png'
import t4img3 from  '../assets/Zoa/ZoaSamimaTy4.3.jpg'
import t5img1 from '../assets/Zoa/ZoaSamomaTy5.jpg'
import t5img2 from '../assets/Zoa/ZoaSamimaTy5.2.jpg'
import t5img3 from  '../assets/Zoa/ZoaSamimaTy5.3.png'

const ZoaProjectDetail = ({country}) => {

  const selectedCountry = localStorage.getItem('selectedCountry') || 'default-country';
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  const handleBookNow = (projectName, typologyNumber) => {
    const message = `Hello, I am interested in booking apartment on${projectName} Project! Typology ${typologyNumber}.Can you provide more details about its availability?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/251944331133?text=${encodedMessage}`; // Replace <PHONE_NUMBER> with the actual number
    window.open(whatsappLink, '_blank');
  };

  const images12 = [
    img1,
    img2,
    img3,
  ];
  const images34 = [
    t2img1,
    t2img2,
    t2img3,
  ];
  const images56 = [
    t3img1,
    t3img2,
    t3img3,
  ];
  const images79 = [
    t4img1,
    t4img2,
    t4img3,
  ];
  const images8 = [
    t5img1,
    t5img2,
    t5img3,
  ];

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ):(
      <div>
        
      <div className='kenya-header kenya-color mb-5' style={{ height:"70px"}}>
        <Header  />
        </div>
        <div className='container'>
          <div className='col-md-10' style={{width:"90%", marginRight:"auto", marginLeft:"auto", marginTop:"3%"}}>
            <div className='d-flex projectdetail'>
          <div className='col-md-6'>
          <Swiper
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 50, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images12.map((img, index) => (
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

            {/* <img src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5 typology'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 1</h1>
            <span><h4 className='mt-4 mb-4' style={{color:"#555", fontSize:"20px"}}>ZOA - Samima | Apartment 1 and 2</h4></span>
            </div>
            <Link>
                    <div className=" d-flex">
                      <button
                      onClick={() => handleBookNow('Zoa-Samima Residence', '1 and 2')}  
                      style={{ width: '55%', borderColor: '#000', backgroundColor: '#fff', height: '30px', border: "0.5px solid #000" }}>
                        Book Now
                      </button>
                    </div>
                  </Link>
            <div className='d-flex col-md-4 mt-4 nospace' style={{justifyContent:"space-between"}} >
            <div style={{fontSize:"30px"}}><IoBedOutline /></div>
            <div style={{fontSize:"18px"}} className='mt-2 bedroom'>2 Bed Rooms</div>
            </div>
            <div className='d-flex col-md-4 nospace' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <img src={blueprint} alt="" style={{width: "30px"}} effect="blur"/>
            </p>
            <Link 
            to={{
              pathname: `/${selectedCountry}/info`,
              search: `?apartmentName=${encodeURIComponent('Zoa-Samima')}&typology=1 and 2`  
            }}>
            <p style={{fontSize:"15px", marginLeft:"-100px"}} className='mt-2 floorplan'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>
          </div>

          <div className='d-flex projectdetail' style={{marginTop:"150px"}}>
          <div className='col-md-6'>
          <Swiper
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 50, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images34.map((img, index) => (
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

            {/* <img src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5 typology'>
            <div>
            <h1 className='mt-1 ' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 2</h1>
            <span><h4 className='mt-4 mb-4' style={{color:"#555", fontSize:"20px"}}>ZOA - Samima | Apartment 3 and 4</h4></span>
            </div>
            <Link>
                    <div className=" d-flex">
                      <button
                      onClick={() => handleBookNow('Zoa-Samima Residence', '3 and 4')}  
                      style={{ width: '55%', borderColor: '#000', backgroundColor: '#fff', height: '30px', border: "0.5px solid #000" }}>
                        Book Now
                      </button>
                    </div>
                  </Link>
            <div className='d-flex col-md-4 mt-4 nospace' style={{justifyContent:"space-between"}} >
            <div style={{fontSize:"30px"}}><IoBedOutline /></div>
            <div style={{fontSize:"18px"}} className='mt-2 bedroom'>3 Bed Rooms</div>
            </div>
            <div className='d-flex col-md-4 nospace' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <img src={blueprint} alt="" style={{width: "30px"}} effect="blur"/>
            </p>
            <Link 
            to={{
              pathname: `/${selectedCountry}/info`,
              search: `?apartmentName=${encodeURIComponent('Zoa-Samima')}&typology=3 and 4` ,  // passing apartment name and typology
            }}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2 floorplan'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>
          </div>

          <div className='d-flex projectdetail' style={{margin:"150px 0"}}>
          <div className='col-md-6'>
          <Swiper
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 50, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images56.map((img, index) => (
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

            {/* <img src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5 typology'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 3</h1>
            <span><h4 className='mt-4 mb-4' style={{color:"#555", fontSize:"20px"}}>ZOA - Samima | Apartment 5 and 6</h4></span>
            </div>
            <Link>
                    <div className=" d-flex">
                      <button
                      onClick={() => handleBookNow('Zoa-Samima Residence', '5 and 6')}  
                      style={{ width: '55%', borderColor: '#000', backgroundColor: '#fff', height: '30px', border: "0.5px solid #000" }}>
                        Book Now
                      </button>
                    </div>
                  </Link>
            <div className='d-flex col-md-4 mt-4 nospace' style={{justifyContent:"space-between"}} >
            <div style={{fontSize:"30px"}}><IoBedOutline /></div>
            <div style={{fontSize:"18px"}} className='mt-2 bedroom'>2 Bed Rooms</div>
            </div>
            <div className='d-flex col-md-4 nospace' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <img src={blueprint} alt="" style={{width: "30px"}} effect="blur"/>
            </p>
            <Link 
            to={{
              pathname: `/${selectedCountry}/info`,
              search: `?apartmentName=${encodeURIComponent('Zoa-Samima')}&typology=3`,  // passing apartment name and typology
            }}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2 floorplan'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>

          </div>

          <div className='d-flex projectdetail' style={{margin:"150px 0"}}>
          <div className='col-md-6'>
          <Swiper
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 50, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images79.map((img, index) => (
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

            {/* <img src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5 typology'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 4</h1>
            <span><h4 className='mt-4 mb-4' style={{color:"#555", fontSize:"20px"}}>ZOA - Samima | Apartment 7 and 9</h4></span>
            </div>
            <Link>
                    <div className=" d-flex">
                      <button
                      onClick={() => handleBookNow('Zoa-Samima Residence', '7 and 9')}  
                      style={{ width: '55%', borderColor: '#000', backgroundColor: '#fff', height: '30px', border: "0.5px solid #000" }}>
                        Book Now
                      </button>
                    </div>
                  </Link>
            <div className='d-flex col-md-4 mt-4 nospace' style={{justifyContent:"space-between"}} >
            <div style={{fontSize:"30px"}}><IoBedOutline /></div>
            <div style={{fontSize:"18px"}} className='mt-2 bedroom'>1 Bed Room</div>
            </div>
            <div className='d-flex col-md-4 nospace' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <img src={blueprint} alt="" style={{width: "30px"}} effect="blur"/>
            </p>
            <Link 
            to={{
              pathname: `/${selectedCountry}/info`,
              search: `?apartmentName=${encodeURIComponent('Zoa-Samima')}&typology=4`  // passing apartment name and typology
            }}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2 floorplan'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>

          </div>

          <div className='d-flex projectdetail' style={{margin:"150px 0"}}>
          <div className='col-md-6'>
          <Swiper
            lazy={true}
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 50, // Increase delay for better visibility
              disableOnInteraction: false,
            }}
            effect="fade" // Enables fade effect
            fadeEffect={{
              crossFade: true, // Smooth fading transition
            }}
            speed={3000} 
            loop={true}
          >
          {images8.map((img, index) => (
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

            {/* <img src={hero} alt="" style={{maxWidth:"100%"}} /> */}
          </div>
          <div className='col-md-6 ps-5 ms-5 typology'>
            <div>
            <h1 className='mt-1' style={{color:"#555", fontSize:"40px"}}>TYPOLOGY 5</h1>
            <span><h4 className='mt-4 mb-4' style={{color:"#555", fontSize:"20px"}}>ZOA - Samima | Apartment 8</h4></span>
            </div>
            <Link>
                    <div className=" d-flex">
                      <button
                      onClick={() => handleBookNow('Zoa-Samima Residence', '8')}  
                      style={{ width: '55%', borderColor: '#000', backgroundColor: '#fff', height: '30px', border: "0.5px solid #000" }}>
                        Book Now
                      </button>
                    </div>
                  </Link>
            <div className='d-flex col-md-4 mt-4 nospace' style={{justifyContent:"space-between"}} >
            <div style={{fontSize:"30px"}}><IoBedOutline /></div>
            <div style={{fontSize:"18px"}} className='mt-2 bedroom'>1 Bed Room</div>
            </div>
            <div className='d-flex col-md-4 nospace' style={{justifyContent:"space-between"}} >
            <p style={{fontSize:"30px"}}> 
              <img src={blueprint} alt="" style={{width: "30px"}} effect="blur"/>
            </p>
            <Link 
            to={{
              pathname: `/${selectedCountry}/info`,
              search: `?apartmentName=${encodeURIComponent('Zoa-Samima')}&typology=5`, 
            }}>
            <p style={{fontSize:"15px", marginLeft:"-10px"}} className='mt-2 floorplan'>
              <u>View Floor Plan</u>
              </p>
            </Link>
            </div>
            
          </div>

          </div>

          </div>
        </div>

        <Footer country={country}/>
      </div>
      )}
    </div>
  )
}

export default ZoaProjectDetail