import { Navbar, Nav } from 'react-bootstrap';
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaInstagram
} from 'react-icons/fa';
import footerlogo from '../assets/footerlogo.png';

function FooterMenu() {
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
        gap: '3rem'
      }}>
      {/* Left side: Logo/Image */}
      <div style={{ width: '20%' }}>
        <Navbar.Brand href="#">
          <img
            src={footerlogo} // Replace with your image URL
            alt="Logo"
            style={{ width: '100%' }}
          />
        </Navbar.Brand>
      </div>

      {/* Right side: Links, Text and Icons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%'
        }}>
        {/* Top-right: Text */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start'
          }}>
          <div style={{ marginBottom: '10px' }}>
            <Navbar.Text style={{ color: '#ffffff' }}>
              <p
                style={{
                  marginBottom: '0',
                  fontSize: '24px',
                  fontWeight: '700',
                  fontFamily: 'Open Sans'
                }}>
                DUBLIN, CA
              </p>
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins'
                }}>
                7033 Village Parkway, Ste.211 Dublin, CA 94568
              </span>
            </Navbar.Text>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Navbar.Text style={{ color: '#ffffff' }}>
              <p
                style={{
                  marginBottom: '0',
                  fontSize: '24px',
                  fontWeight: '700',
                  fontFamily: 'Open Sans'
                }}>
                DALLAS, TX
              </p>
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins'
                }}>
                105 Decker Court, Ste. 810 Irving, TX 75062
              </span>
            </Navbar.Text>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <Navbar.Text style={{ color: '#ffffff' }}>
              <p
                style={{
                  marginBottom: '0',
                  fontSize: '24px',
                  fontWeight: '700',
                  fontFamily: 'Open Sans'
                }}>
                BANGALORE, IN
              </p>
              <span
                style={{
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: 'Poppins'
                }}>
                9th floor, Gamma Tower, Sigma Soft tech park, Whitefield,
                Bangalore, Karnataka 560066
              </span>
            </Navbar.Text>
          </div>
        </div>

        {/* Bottom-right: Social Media Icons */}
        <div
          style={{
            marginBottom: '0',
            fontSize: '24px',
            fontWeight: '700',
            display: 'flex',
            gap: '10rem'
          }}>
          <div style={{ display: 'flex', gap: '10px', color: '#ffffff' }}>
            <p
              style={{
                marginBottom: '0',
                fontSize: '24px',
                fontWeight: '400',
                fontFamily: 'Poppins'
              }}>
              Follow us on
            </p>
            <Nav.Link href="https://facebook.com" target="_blank">
              <FaFacebook style={{ color: '#fff' }} />
            </Nav.Link>
            <Nav.Link href="https://pinterest.com" target="_blank">
              <FaPinterest style={{ color: '#fff' }} />
            </Nav.Link>
            <Nav.Link href="https://instagram.com" target="_blank">
              <FaInstagram style={{ color: '#fff' }} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com" target="_blank">
              <FaTwitter style={{ color: '#fff' }} />
            </Nav.Link>
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
