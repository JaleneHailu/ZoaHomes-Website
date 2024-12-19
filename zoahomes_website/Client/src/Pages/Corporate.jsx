import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import fetchCompanyContent from '../utils/fetchCompanyContent';
import Header from '../Components/Header'
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import img1 from '../assets/StoryImg1.jpg'
import img2 from '../assets/StoryImg2.jpg'
import Footer from '../Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhyUsSection from '../Components/WhyUs';
import './corporate.css'
import myGif from '../assets/Zoa 1.mp4'
import vision from'../assets/AviMission.jpg'
import vision2 from  '../assets/visionAvi.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



const Corporate = ({country}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState(null);
  useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);
  const countryImages = {
    Ethiopia: {
      image1: vision,
      image2: vision, // Replace with specific image for image2
    },
    Kenya: {
      image1: myGif,
      image2: vision, 
  // Replace with specific image for project3
    },
  };

  const selectedCountry = localStorage.getItem('selectedCountry') || 'Ethiopia';
  const validCountry = selectedCountry in countryImages ? selectedCountry : 'Ethiopia';
  console.log('Selected Country:', selectedCountry);

  AOS.init({
    duration: 1500,
    once: true,
    delay: 1000,
  });

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchCompanyContent(country);
      setContent(data);
    };
    loadContent();
  }, [country]);

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

  const getCountryClassName2 = () => {
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

  return (
    <>{isLoading ? (
      <Spinner />
    ):(
    <div>
    <div className={`${getCountryClassName()}`}  style={{ height:"95px"}}>
        <Header />
        </div>

        <div className='mb-5' style={{width:"90%", marginRight:"auto", marginLeft:"auto", marginTop:"3%"}}>
        <div className='d-flex buyhero'  data-aos="fade-up" style={{backgroundColor: "#000814"}}>
        <section id="about" class="about section col-md-12 p-5">
      <div class="corporate-title section-title" >
        <h1 class="corporate-title" style={{fontSize:"70px"}} >Company Overview</h1>
        <hr  style={{backgroundColor: "#fff", width:"25%", height: "7px", opacity:"100%", marginRight:"auto", marginLeft:"auto", border: "none"}}  />
      </div>

      <div class="col-md-12 mt-">
        <div class="row gy-4 col-md-12">
          <div class="col-lg-12 content" data-aos="fade-up" data-aos-delay="1000" style={{textAlign: "justify",color:"#fff"}}>
          {content ? (
            <p style={{letterSpacing: "0.07em"}}>
              {content.company_name} is a young company established by inspired and experienced individuals with a strong ambition of providing quality living space. It came with comprehensive solutions for electricity, plumbing, and mechanical dysfunction, applying the most advanced home technologies via quality appliances and systems. We are also committed to providing a green space where you can enjoy the beauty of nature while being connected to the magnificence of life. We value greenness and the healthy benefits of it to our families who are interested in being involved in any of our projects. Our team comprises professionals that have contributed to over 50 accomplished projects. We have great value in the experts who know how to design a suitable habitation with sufficient daylight, comfortable rooms, and functional systems. Our projects fit those characteristics and are believed to be impressively comfortable for a new life experience. Started with a passionate desire to create superior quality apartments, we will continue answering your needs in all the best ways possible.</p>
              ) : (
                <p></p>
              )}
          </div>
        </div>
      </div>
    </section>
      </div>

      <div className='corporateStory d-flex' style={{marginTop:"150px"}}>
      <div className={`col-md-5 p-5 corporateWrapper pe-5 ${getCountryClassName2()}`} data-aos="fade-up" data-aos-delay="50" style={{borderRadius: "10%"}}>
        <h1 className='mb-3 mt-5' style={{fontSize:"50px", color:"#e2b808"}} >OUR STORY</h1>
        <p style={{textAlign: "justify", color: "#fff"}} className='col-md-11 storyContent mt-5' >
        We have humble upbringings, from designing projects to consulting our partners who ventured into the real estate business. In the process, we were privileged to understand the possible improvements in the real estate industry and an opportunity to make our professional contributions.  We envisioned exploring the East African market through our contextualized real estate business awareness and construction experience. We make our first footstep from Addis Ababa, Ethiopia, and venture into Nairobi, Kenya. Bole and 24 Sefer in Addis Ababa and Westland in Nairobi are where we are starting our dreams. And we will continue to strive to put our presence across Africa.</p>
      </div>
      <div className='col-md-1'>
      </div>
      <div className='col-md-6' data-aos="fade-up">
        <LazyLoadImage style={{maxWidth: "100%"}} src={img1} alt="" effect="blur" />
        <LazyLoadImage className='mt-5' style={{maxWidth: "100%"}} src={img2} alt="" effect="blur"/>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="1000" className='corporateStory d-flex' style={{justifyContent: 'space-between', marginTop:"50px"}}>
        {/* <div className='col-md-1'></div> */}
        {country === "Ethiopia"? (
        <LazyLoadImage src={vision2}className='col-md-11 ms-2  missionImg' style={{maxWidth: "100%", marginTop:"84px", borderRadius: "100px"}}  alt="" effect="blur" />): (
        <video className='col-md-4' style={{maxWidth: "35%", borderRadius: "100px"}} autoPlay loop muted>
        <source src={myGif} type="video/mp4"  />
        Your browser does not support the video tag.
      </video>
        )}
        {/* <div className='col-md-1'></div> */}
      <div className='mt-5 col-md-7' style={{marginTop:"70px"}}>
        <h1 style={{fontSize:"50px", color: "#000"}}>
          Our Mission
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000" style={{textAlign: 'justify'}}>
        We are committed to becoming a leading housing brand across the continent of Africa, setting new benchmarks for excellence in the housing industry. Our mission is to address the evolving needs of the region by delivering innovative and tailored solutions that take into account both local contexts and global best practices. By focusing on the architectural and MEP (Mechanical, Electrical, and Plumbing aspects of building design, we ensure that every project we undertake not only meets the highest standards of modern living but also harmonizes with the unique environmental, cultural, and practical demands of the African landscape. At the heart of our strategy is the establishment of adaptive, change-oriented institutions that respond proactively to the dynamic challenges of the housing sector. These institutions drive our projects forward with agility and foresight, positioning us to stay ahead of emerging trends and disruptions in the industry.
        </p>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-delay="1000" className='corporateStory d-flex' style={{justifyContent: 'space-between', marginTop:"50px"}}>
      {/* <div className='col-md-1'></div> */}

      <div className='col-md-7'  data-aos="fade-up" data-aos-delay="1000" style={{marginTop:"30px", }}>
        <h1 style={{fontSize:"50px", color: "#000"}}>
          Our Vission
        </h1>
        <p style={{textAlign: 'justify'}}>
        We are fully dedicated to delivering quality apartments at a reasonable and affordable price. It came with comprehensive solutions for electricity, plumbing, and mechanical dysfunction, applying the most advanced home technologies via quality appliances and systems. The idea of providing environmentally friendly apartments is to make the group unique. We provide considerable green space where you can see a variety of natural species, which keeps the dwellings connected with the beauty of the earth. We value greenness and the healthy benefits of it for our families who are interested in being involved in any of our projects. Started with a passionate desire to create superior-quality houses, we will continue to answer housing needs in all the best ways possible.
        </p>
      </div>
      {/* <div className='col-md-1' ></div> */}
        <LazyLoadImage src={vision} className='col-md-10 ms-4 ourVision' style={{maxWidth: "100%", borderRadius: "100px", marginTop: "74px"}}  alt="" effect="blur" />
        {/* <video className='col-md-4 ms-2' style={{maxWidth: "35%", borderRadius: "100px"}} autoPlay loop muted>
        <source src={myGif} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      </div>

      <WhyUsSection />

        </div>

        <Footer country={country}/>
        </div>)}

      </>
  )
}

export default Corporate