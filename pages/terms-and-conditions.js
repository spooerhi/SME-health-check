import React from 'react';


const styles = {
  app: {
    textAlign: 'center',
  },
  header: {
    background: 'linear-gradient(135deg, #5e4b8b, #9b3c9b)',
    color: 'white',
    padding: '20px',
  },
  logo: {
    maxWidth: '100px',
    marginBottom: '10px',
  },
  headerText: {
    fontSize: '40px',
  },
  container: {
    width: '100%',
    margin: '20px auto',
    padding: '20px',
    background: 'white',
    //borderRadius: '8px',
    //boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  containerHeader: {
    fontSize: '30px',
    marginBottom: '20px',
    textAlign : 'left',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#9b3c9b',
    marginBottom: '10px',
    textAlign :'left',
  },
  sectionText: {
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '15px',
    textAlign :'left',

  },

};

function App() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div style={styles.app}>
      {/* Header Section */}
      <header style={styles.header}>
       
        <h1 style={styles.headerText}>SME Health Check</h1>
      </header>

      {/* Main Content Section */}
      <div style={styles.container}>
        <h1 style={styles.containerHeader}>Terms and Conditions</h1>
        
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>1. Overview and Consent Declaration</h2>
          <p style={styles.sectionText}>
          By clicking or checking “Apply Now” or “I duly accept the Terms and Conditions” or similar statements available at CREDILINQ’s Registration Page or in the course of providing you with the services or upon your submission of application for CREDILINQ’s product offering, you acknowledge that you have read and understood the terms of this Terms and Conditions and that you have agreed and consented to the collection, use, disclosure, storage, transfer and/or processing of your personal and business data as described and under the terms herein
          </p>
        </section>
        

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>2. Commitment to Privacy Laws</h2>
          <p style={styles.sectionText}>
            2.1 CREDILINQ.AI and its affiliates (hereinafter, “CREDILINQ” and
            collectively or individually, "CREDILINQ", "we" or "us") take your privacy
            seriously pursuant to our commitment to abide by the Singapore Personal Data
            Privacy Act (“PDPA”), the European General Data Protection Regulation
            (“GDPR”), and all applicable data privacy laws.
          </p>
          <p style={styles.sectionText}>
            2.2 In the course of you using CREDILINQ's applications and websites (both web and mobile versions), as well as products, information, functions and other services operated by CREDILINQ, we will be collecting, using, disclosing, storing and/or processing data, including your personal and business data (collectively, your “data”). In this Terms, Platform shall refer to all relevant applications and websites (both web and mobile versions), and Services shall refer to all products, information, functions and services provided by CREDILINQ from time to time in the Platform(s).
          </p>
          <p style={styles.sectionText}>
            2.3 This Terms exists to keep you in the know about how we collect, use, disclose, store and/or process the data we collect and receive during the course of providing the Services or access to the Platform to you, our user, particularly at the time you have submitted an application to avail of our Products and/or Services. We will only collect, use, disclose, store and/or process your personal and business data in accordance with this Terms and Conditions.
          </p>
        </section>



        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>3. The Personal and Business Data We Collect From You</h2>
          <p style={styles.sectionText}>
             3.1 We collect the personal and business data described below in accordance with applicable local laws and, if required, upon obtaining your consent.
          </p>
          <p style={styles.sectionText}>
            3.2. Personal data means any information about an individual, whether recorded in a material form or not and whether true or not, who can be identified from that data (whether directly or indirectly), or from that data and other data to which we have or are likely to have access, including but not limited to name, contact numbers, e-mail address, and identification numbers.
          </p>
        </section>

        

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>4. How We Receive Your Personal and Business Data</h2>
          <p style={styles.sectionText}>
           4.1. During the course of your use of the Platform and our provision of the Services, we may receive personal and business data from you in the following situations:
          </p>
        </section>



        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>5. Collection of Computer Data</h2>
          <p style={styles.sectionText}>
            We reserve the right to update or change these Terms at any time. Please
            review this page periodically to stay informed of any changes.
          </p>
        </section>



        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Use and Disclosure of Your Personal and Business Data</h2>
          <p style={styles.sectionText}>
            If you have any questions regarding these Terms and Conditions, please
            contact us at: <strong>support@credilinq.com</strong>.
          </p>
        </section>
      </div>

      
    </div>
  );
}

export default App;
