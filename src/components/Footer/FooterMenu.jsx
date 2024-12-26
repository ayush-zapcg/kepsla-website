import { Navbar, Nav } from 'react-bootstrap';
import {
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import styles from './FooterMenu.module.css';
import footerlogo from '../../assets/footerlogo.png';

function FooterMenu() {
  const addresses = [
    {
      city: 'DUBLIN, CA',
      address: '7033 Village Parkway, Ste.211 Dublin, CA 94568'
    },
    {
      city: 'DALLAS, TX',
      address: '105 Decker Court, Ste. 810 Irving, TX 75062'
    },
    {
      city: 'BANGALORE, IN',
      address:
        '9th floor, Gamma Tower, Sigma Soft tech park, Whitefield, Bangalore, Karnataka 560066'
    }
  ];
  const socialLinks = [
    {
      href: 'https://facebook.com',
      icon: <FaFacebook />
    },
    {
      href: 'https://pinterest.com',
      icon: <FaPinterest />
    },
    {
      href: 'https://instagram.com',
      icon: <FaInstagram />
    },
    {
      href: 'https://twitter.com',
      icon: <FaTwitter />
    }
  ];
  return (
    <Navbar
      className={`${styles.footerMenuContaniner} d-flex justify-content-between align-items-start gap-5`}
      expand="lg"
      fixed="bottom">
      {/* Left side: Logo/Image */}
      <div className={styles.width30}>
        <Navbar.Brand href="#">
          <img src={footerlogo} alt="Logo" className={styles.width100} />
        </Navbar.Brand>
      </div>

      {/* Right side: Links, Text */}
      <div className="col-12 col-md-8">
        <div className="d-flex flex-column flex-md-row justify-content-start gap-4">
          {addresses.map((address, index) => (
            <div className={`${styles.addressContent} text-start`} key={index}>
              <Navbar.Text className={styles.whiteText}>
                <p className={styles.addressHeading}>{address.city}</p>
                <span className={styles.addressPara}>{address.address}</span>
              </Navbar.Text>
            </div>
          ))}
        </div>

        <div
          className={`${styles.bottomContent} d-flex justify-content-between`}>
          <div className={`${styles.bottomText} ${styles.whiteText}  d-flex`}>
            <p>Follow us on</p>

            {socialLinks.map((social, index) => (
              <Nav.Link key={index} href={social.href} target="_blank">
                {social.icon}
              </Nav.Link>
            ))}
          </div>
          <div>
            <a
              href="mailto:Successwith@kepsla.com"
              className={`${styles.textUnderline} ${styles.whiteText}`}>
              Successwith@kepsla.com
            </a>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default FooterMenu;
