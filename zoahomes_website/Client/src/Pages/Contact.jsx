import React, { useEffect, useState } from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Spinner from './Spinner';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import fetchCompanyContent from '../utils/fetchCompanyContent';
import './contact.css'
import '../assets/main.css'



const Contact = ({country}) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const officeMap = {
    Ethiopia: {
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.755120104024!2d38.79020607399592!3d8.994666389527572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8500344c3a6f%3A0x19901b2cf692d38f!2sAvi-Trust%20Homes!5e0!3m2!1sen!2set!4v1730265814433!5m2!1sen!2set", // Replace with specific image for project2
    },
    Kenya: {
      map: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d127643.42310012267!2d36.754658!3d-1.257796!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMcKwMTUnMjkuMyJTIDM2wrA0OCcyMi4yIkU!5e0!3m2!1sen!2sus!4v1733487094145!5m2!1sen!2sus"
    },
  };
  const selectedCountry = localStorage.getItem('selectedCountry') || 'Ethiopia';
  const validCountry = selectedCountry in officeMap ? selectedCountry : 'Ethiopia';
  console.log('Selected Country:', selectedCountry);
  
  useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  AOS.init({
    duration: 1500,
    once: true,
    delay: 200,
  });

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

  const getClassName = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    emailjs
      .sendForm('service_4b70zxk', 'template_mwdhumq', form, 'o22KhQSWtLqfV6-hY')
      .then(
        (result) => {
          alert('Your message has been sent successfully!');
          console.log(result.text);
          // Open the PDF file in a new tab
          window.open('../assets/AviMission.jpg', '_blank');
        },
        (error) => {
          alert('Failed to send your message. Please try again.');
          console.error(error.text);
        }
      );
  };

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchCompanyContent(country);
      console.log('Fetched Content:', data); // Debugging
      setContent(data);
    };
    loadContent();
  }, [country]);

  return (
    <>
    {isLoading ? (
        <Spinner />
      ):(
    <div>
    <div className={`${getCountryClassName()}`} style={{ height:"95px"}}>
        <Header />
        </div>
        <div className='mb-5 contact' style={{width:"70%", marginRight:"auto", marginLeft:"auto", marginTop:"3%"}}>
          <h1 data-aos="fade-up" style={{fontSize:"60px", color:"#e2b808", textAlign:"center"}}>Contact Us</h1>
          <div data-aos="fade-up" className='d-flex mt-5 mb-5 contactWrapper'>
          <div className='col-md-6 map'>
          <iframe data-aos="fade-up" src={officeMap[validCountry].map} 
              width="100%" height="350" 
              margin="0"
              style={{border: "0;" }}
              allowfullscreen="" effect="blur" referrerpolicy="no-referrer-when-downgrade" />
          </div>
          <div className='col-md-6' style={{textAlign: "center"}}>
            <h4 style={{color: "#000"}}>WORKING HOURS</h4>
            <p>monday - friday</p>
            <p>8.00 AM - 5.00 PM</p>
            {country === "Ethiopia"? (
              <div><p>saturday</p>
              <p>9.00 AM - 1.00 PM</p></div>):
              (<p><br /></p>)}
            <h4 className='mt-5' style={{color: "#000"}}>Get Intouch</h4>
            <div>
                  {content ? (
                    <div>
                    <p>WhatsUp:  {content.phone}</p>
                    {/* <p>Email: {content.email}</p> */}
                    </div>
                  ):
                  (
                    <div>
                      <p>WhatsUp:  +2549123456</p>
                      <p>Email: info@avitrust.com</p>
                    </div>
                  )
                  }
                </div>
            <p></p>
            </div>
            </div>

            <div data-aos="fade-up form" class="col-lg-12 mt-5">
            <h1 style={{textAlign:"Center", color:"#e2b808"}}>Send Us A Message</h1>

            <form onSubmit={handleSubmit} class="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div class="row gy-4 mt-3">
                <div class="col-md-6">
                {content?.title && (
                  <input type="hidden" name="country_project" value={content.title} />
                )}
                  <label for="name-field" class="pb-2" style={{textAlign: "center"}}>Your Name</label>
                  <input  type="text" name='from_name' id="name-field" class="form-control" required="" />
                </div>

                <div class="col-md-6">
                  <label for="email-field" class="pb-2">Your Email</label>
                  <input  type="email" class="form-control" name="email" id="email-field" required="" />
                </div>

                <div class="col-md-12">
                  <label for="subject-field" class="pb-2">Subject</label>
                  <input  type="text" class="form-control" name="subject" id="subject-field" required="" />
                </div>

                <div class="col-md-12">
                  <label for="message-field" class="pb-2">Message</label>
                  <textarea style={{ border:"solid 1px"}} class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                </div>

                <div class="col-md-12 text-center">
                  {/* <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div> */}
                  <button 
                    type="submit" style={{
                    color:"white", 
                    backgroundColor:"transparent",
                    borderRadius:"10px"}}>
                  <div className={`${getClassName()}`} style={{width:"100%"}}>
                  Send Message</div></button>
                </div>

              </div>
            </form>
          </div>
          </div>
          <Footer country={country}/>
          </div>
      )}
          </>
  )
}

export default Contact