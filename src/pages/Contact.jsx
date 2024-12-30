import { useState } from 'react';
import SubmitCard from '../components/SubmitCard';
import styles from '../styles/Contact.module.css';
import '../fonts.css';

const Contact = () => {
  const locations = [
    {
      city: 'DUBLIN, CA',
      address: '7033 Village Parkway, Ste.211 Dublin, CA 94568',
      icon: 'src/assets/contact-location-icon.svg'
    },
    {
      city: 'DALLAS, TX',
      address: '105 Decker Court, Ste. 810 Irving, TX 75062',
      icon: 'src/assets/contact-location-icon.svg'
    },
    {
      city: 'BANGALORE, IN',
      address:
        '9th floor, Gamma Tower, Sigma Soft tech park, Whitefield, Bangalore, Karnataka 560066',
      icon: 'src/assets/contact-location-icon.svg'
    }
  ];
  const [showSubmitCard, setShowSubmitCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSubmitCard(true);
  };
  return (
    <div className={`${styles.contactContainer}`}>
      <div className={`${styles.headingText}`}>
        <h1 className={`open-sans-700 ${styles.title}`}>Get in Touch</h1>
        <h3 className={`poppins-500 ${styles.subtitle}`}>
          Add your details, We will get back to you!
        </h3>
      </div>
      <div className={`${styles.mainContainer}`}>
        <div className={`open-sans-500 ${styles.contactInfo}`}>
          <div className={`${styles.mainText}`}>
            To contact us regarding our Hotel Technology Solutions, such as
            guest feedback solutions, social listening tools, deep guest
            analytics, issue management, mystery shopping, and competition
            watch, write to
          </div>
          <div className={`${styles.mail}`}>
            <img
              className={`${styles.mailIcon}`}
              src="src\assets\contact-mail-icon.svg"
              alt="mail-icon"
            />
            <a
              className={`${styles.mailLink}`}
              href="mailto:successwith@kepsla.com">
              successwith@kepsla.com
            </a>
          </div>
          <div className={`${styles.officeText}`}>Our Offices</div>
          <ul className={`${styles.locations}`}>
            {locations.map((location, index) => (
              <li key={index}>
                <img
                  src="src/assets/contact-location-icon.svg"
                  alt="location-icon"
                />
                <div className={`${styles.locationText}`}>
                  <div className={`${styles.locTitle}`}>{location.city}</div>
                  <div className={`poppins-400 ${styles.locAdd}`}>
                    {location.address}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <form
          className={`poppins-500 ${styles.contactForm}`}
          onSubmit={handleSubmit}>
          <div className={`${styles.formRow}`}>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" required />
            </div>
          </div>
          <div className={`${styles.formRow}`}>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className={`${styles.formGroup}`}>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" required />
            </div>
          </div>
          <div className={`${styles.formGroup}`}>
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <button className={`poppins-600 btn btn-primary ${styles.bgBlue}`} type="submit">
            Submit
          </button>
        </form>
      </div>
      {showSubmitCard && (
        <div className={`${styles.overlay}`}>
          <div className={`${styles.submitCardContainer}`}>
            <SubmitCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
