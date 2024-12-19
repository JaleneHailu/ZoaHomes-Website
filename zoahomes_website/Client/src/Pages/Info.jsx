import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import './projectdetail.css';
import emailjs from 'emailjs-com';
import { useLocation, useNavigate } from 'react-router-dom';
import fetchCompanyContent from '../utils/fetchCompanyContent';

const Info = ({ country }) => {
  const [content, setContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const apartmentName = queryParams.get('apartmentName');
  const typology = queryParams.get('typology');

  useEffect(() => {
    // Simulate an API call or data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  useEffect(() => {
    const loadContent = async () => {
      const data = await fetchCompanyContent(country);
      console.log(data);
      setContent(data);
    };
    loadContent();
  }, [country]);

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
  
    // Include the apartment name and typology in the form data
    form.apartment_name.value = apartmentName;
    form.typology_number.value = typology;
  
    emailjs
      .sendForm('service_4b70zxk', 'template_tx91q7r', form, 'o22KhQSWtLqfV6-hY')
      .then(
        (result) => {
          alert('Your information has been sent successfully!');
          console.log(result.text);
          // Open the PDF file in a new tab
          window.open('../assets/AviMission.jpg', '_blank');
        },
        (error) => {
          alert('Failed to send your information. Please try again.');
          console.error(error.text);
        }
      );
  };

  return (
    <div className='cover2 col-md-12'>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='container col-md-6' style={{ textAlign: 'center' }}>
          <div className='col-md-8 info' style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          {content ? (
            <h1 style={{ fontSize: '70px', color: '#fff', marginTop: '150px' }}>{content.title}</h1>)
            :(<p></p>)
            }
          </div>
          <h4 style={{ fontSize: '17px', color: '#fff' }}>We’d love to learn more about you.</h4>
          <div className='container col-md-11'>
            <form onSubmit={handleSubmit}>
              <div className='mt-5 d-flex' style={{ justifyContent: 'space-between' }}>
                <input
                  style={{ width: '48%', height: '40px', borderRadius: '5px', border: 'none' }}
                  type='text'
                  name='from_name'
                  placeholder='Name'
                  required
                />
                <input
                  style={{ width: '48%', height: '40px', borderRadius: '5px', border: 'none' }}
                  name='phone'
                  type='text'
                  placeholder='Phone'
                  required
                />
              </div>
              <input
                style={{ width: '100%', height: '40px', borderRadius: '5px', border: 'none' }}
                className='mt-5'
                name='email'
                type='email'
                placeholder='Email'
                required
              />
              <input type="hidden" name="apartment_name" />
              <input type="hidden" name="typology_number" />

              <div>
                <button
                  className={`mt-5 infobutton ${getClassName()}`}
                  type='submit'
                  style={{
                    fontSize: '15px',
                    width: '120px',
                    backgroundColor: '#000814',
                    color: '#fff',
                    border: 'none',
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Info;
