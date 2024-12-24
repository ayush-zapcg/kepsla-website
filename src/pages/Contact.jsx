import { useState } from 'react';
import SubmitCard from '../components/SubmitCard';
import '../styles/Contact.css';

const Contact = () => {
  const [showSubmitCard, setShowSubmitCard] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowSubmitCard(true);
  };
  return (
    <div className="Contact">
      <div className="heading-text">
        <h1 className="title">Get in Touch</h1>
        <h3 className="subtitle">Add your details, We will get back to you!</h3>
      </div>
      <div className="main-container">
        <div className="contact-info">
          <div className="main-text">
            To contact us regarding our Hotel Technology Solutions, such as
            guest feedback solutions, social listening tools, deep guest
            analytics, issue management, mystery shopping, and competition
            watch, write to
          </div>
          <div className="mail">
            <img src="src\assets\contact-mail-icon.svg" alt="mail-icon"></img>
            <a className="mail-link" href="mailto:successwith@kepsla.com">
              successwith@kepsla.com
            </a>
          </div>
          <div className="office-text">Our Offices</div>
          <ul className="locations">
            <li>
              <img
                src="src\assets\contact-location-icon.svg"
                alt="Location Icon"
              />
              <div className="location-text">
                <div className="loc-title">DUBLIN, CA</div>
                <div className="loc-add">
                  7033 Village Parkway, Ste.211 Dublin, CA 94568
                </div>
              </div>
            </li>
            <li>
              <img
                src="src\assets\contact-location-icon.svg"
                alt="Location Icon"
              />
              <div className="location-text">
                <div className="loc-title">DALLAS, TX</div>
                <div className="loc-add">
                  105 Decker Court, Ste. 810 Irving, TX 75062
                </div>
              </div>
            </li>
            <li>
              <img
                src="src\assets\contact-location-icon.svg"
                alt="Location Icon"
              />
              <div className="location-text">
                <div className="loc-title">BANGALORE, IN</div>
                <div className="loc-add">
                  9th floor, Gamma Tower, Sigma Soft tech park, Whitefield,
                  Bangalore, Karnataka 560066
                </div>
              </div>
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input type="text" id="company" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" required></textarea>
          </div>
          <button className="btn btn-primary bg-blue" type="submit">
            Submit
          </button>
        </form>
      </div>
      {showSubmitCard && (
        <div className="overlay">
          <div className="submit-card">
            <SubmitCard />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
