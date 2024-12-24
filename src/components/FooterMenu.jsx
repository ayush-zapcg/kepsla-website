import { Navbar, Nav } from 'react-bootstrap';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram
} from 'react-icons/fa';
import footerlogo from '../assets/footerlogo.png';

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
      expand="lg"
      fixed="bottom"
      className="font-white"
      style={{
        padding: '20px 10px',
        backgroundColor: '#263959',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: '5rem'
      }}>
      {/* Left side: Logo/Image */}
      <div style={{ width: '30%' }}>
        <Navbar.Brand href="#">
          <img src={footerlogo} alt="Logo" style={{ width: '100%' }} />
        </Navbar.Brand>
      </div>

      {/* Right side: Links, Text */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          gap: '4rem'
        }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '10rem',
            justifyContent: 'start'
          }}>
          {addresses.map((address, index) => (
            <div
              key={index}
              style={{
                marginBottom: '10px',
                maxWidth: '15rem',
                textAlign: 'start'
              }}>
              <Navbar.Text style={{ color: '#ffffff' }}>
                <p
                  style={{
                    marginBottom: '0',
                    fontSize: '24px',
                    fontWeight: '700',
                    fontFamily: 'Open Sans'
                  }}>
                  {address.city}
                </p>
                <span
                  style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    fontFamily: 'Poppins'
                  }}>
                  {address.address}
                </span>
              </Navbar.Text>
            </div>
          ))}
        </div>

        <div
          style={{
            marginBottom: '0',
            fontSize: '24px',
            fontWeight: '700',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
          <div style={{ display: 'flex', gap: '13px', color: '#ffffff' }}>
            <p
              style={{
                marginBottom: '0',
                fontSize: '24px',
                fontWeight: '400',
                fontFamily: 'Poppins'
              }}>
              Follow us on
            </p>

            {socialLinks.map((social, index) => (
              <Nav.Link key={index} href={social.href} target="_blank">
                {social.icon}
              </Nav.Link>
            ))}
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: '24px',
              fontWeight: '400',
              fontFamily: 'Poppins'
            }}>
            <a
              href="mailto:Successwith@kepsla.com"
              style={{ color: '#ffffff', textDecoration: 'underline' }}>
              Successwith@kepsla.com
            </a>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default FooterMenu;
