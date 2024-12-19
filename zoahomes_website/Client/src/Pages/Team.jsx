import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import man from '../assets/team-1.png'
import woman from '../assets/team5.png'
import Spinner from './Spinner';
import fetchCompanyContent from '../utils/fetchCompanyContent'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Team = ({country}) => {

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


  return (
    <>{isLoading ? (
      <Spinner />
    ):(
    <div>
    <div className={`${getCountryClassName()}`}  style={{ height:"95px"}}>
        <Header />
        </div>
    <section id="team" class="team section mt-5 mb-5">
      <div class="container section-title" data-aos="fade-up"  data-aos-delay="50">
        <h2 style={{color: "#000000"}}>Team</h2>
        <p>We strive to create a leading housing brand on the continent of Africa by providing innovative and contextualized values</p>
      </div>

      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member d-flex align-items-start">
              <div class="pic"><LazyLoadImage src={man} class="img-fluid" alt="" effect="blur" /></div>
              <div class="member-info">
                <h4  style={{color: "#000000"}}>Henok Belachew</h4>
                <span>Chief Executive Officer (CEO)</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""> <i class="bi bi-linkedin"></i> </a>
                </div>
              </div>
            </div>
          </div>

          

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member d-flex align-items-start">
              <div class="pic"><LazyLoadImage src={man} class="img-fluid" alt="" effect="blur"/></div>
              <div class="member-info">
                <h4  style={{color: "#000000"}}>Alazar Ahmed</h4>
                <span>Cheif Business Development Officer</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""> <i class="bi bi-linkedin"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member d-flex align-items-start">
              <div class="pic"><LazyLoadImage src={man} class="img-fluid" alt="" effect="blur"/></div>
              <div class="member-info">
                <h4  style={{color: "#000000"}}>Belachew Seyoum</h4>
                <span>Head of Business Advisery</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""> <i class="bi bi-linkedin"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
            <div class="team-member d-flex align-items-start">
              <div class="pic"><LazyLoadImage src={woman} class="img-fluid" alt="" effect="blur" /></div>
              <div class="member-info">
                <h4  style={{color: "#000000"}}>Abigia Mesfin</h4>
                <span>General Manager</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""> <i class="bi bi-linkedin"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div class="team-member d-flex align-items-start">
              <div class="pic"><LazyLoadImage src={man} class="img-fluid" alt="" effect="blur"/></div>
              <div class="member-info">
                <h4  style={{color: "#000000"}}>Hagos Hailu</h4>
                <span>Head of Marketing and sales Department </span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""> <i class="bi bi-linkedin"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member d-flex align-items-start">
              <div class="pic"><LazyLoadImage src={woman} class="img-fluid" alt="" effect="blur" /></div>
              <div class="member-info">
                <h4  style={{color: "#000000"}}>Hana Kebede</h4>
                <span>Head of Finance</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""> <i class="bi bi-linkedin"></i> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
            <div class="team-member d-flex align-items-start">
              <div class="pic"><LazyLoadImage src={woman} class="img-fluid" alt="" effect="blur"/></div>
              <div class="member-info">
                <h4  style={{color: "#000000"}}>Alemtsehay Fikrey</h4>
                <span>Head of Procurment</span>
                <div class="social">
                  <a href=""><i class="bi bi-twitter-x"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""> <i class="bi bi-linkedin"></i> </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
    <Footer country={country}/>
    </div>
    )}
    </>
  )
}

export default Team