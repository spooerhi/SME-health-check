// import React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import CompanyInfo from '../components/CompanyInfo';
import ApplicantInfo from '../components/ApplicantInfo';
import UploadDocuments from '../components/UploadDocuments';
import TermsConditions from '../components/TermsConditions';
// import axios from 'axios';


const Home = () => {
  //const steps = ['Company Info', 'Applicant Info', 'Upload Docs', 'Terms & Conditions'];
  const steps = ['', '', '', ''];
  // const [users, setUsers] = useState([]);


  const handleNext = (data) => {
    console.log('Collected Data:', data);
  };

  
  const handleSubmit = () => {
    alert('Submission Successful!');
  };


//   useEffect(() => {
//     axios.get('http://localhost:3000/users')
//       .then((response) => {
//         setUsers(response.data);
//   })
//   .catch((error) => {
//     console.error('Error fetching users:', error);
//   });
// }, []);




  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
        // background: 'linear-gradient(to right, #2a004f, #6500b0)',
        color: '#4a148c',
        minHeight: '100vh',
        padding: '20px',
        
      }}
    >
      {/* Heading Section with Specific Background */}
      <div
        style={{
          width: '100%',
          height: '150px', // Specific height for the background
          backgroundColor: '#4a148c', // Blue background
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          SME Health Check - Get Started
        </h1>
      </div>
 
      {steps.map((title, index) => (            
        <div
          key={index}
          style={{
            // border: '1px solid #4a0070',
            borderRadius: '8px',
            padding: '10px',
            width: '90%',
             backgroundColor: 'rgba(255, 255, 255, 0.1)',
            // boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0px' }}>{title}</h2>
          <div>
            {index === 0 && <CompanyInfo onNext={handleNext} />}
            {index === 1 && <ApplicantInfo onNext={handleNext} />}
            {index === 2 && <UploadDocuments onNext={handleNext} />}
            {index === 3 && <TermsConditions onSubmit={handleSubmit} />}
          </div>
        </div>
      ))}
    </div>
    

    
  );
};

export default Home;


