import { useLocation } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/', isDropdown: false },
    {
      name: 'Products',
      isDropdown: true,
      dropdownItems: [
        { name: 'Review Intelligence', href: '/review-intelligence' },
        { name: 'Feedback Management', href: '/feedback-management' },
        {
          name: 'Service Enhancement System',
          href: '/service-enhancement-system'
        },
        { name: 'Voice of Employee', href: '/voice-of-employee' }
      ]
    },
    {
      name: 'About',
      isDropdown: true,
      dropdownItems: [
        { name: 'Our Team', href: '/our-team' },
        { name: 'Our Clients', href: '/our-clients' },
        {
          name: 'Recognitions and Partnerships',
          href: '/recognitions-and-partnerships'
        }
      ]
    },
    {
      name: 'Resources',
      isDropdown: true,
      dropdownItems: [{ name: 'Case Studies', href: '/case-studies' }]
    },
    {
      name: 'Login',
      isDropdown: true,
      dropdownItems: [
        { name: 'Review Intelligence', href: 'https://reviews.kepsla.com/' },
        {
          name: 'Feedback Management System',
          href: 'https://feedback.kepsla.com'
        }
      ]
    },
    { name: 'Contact us', href: '/contact-us', isDropdown: false }
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${styles.customNavbar}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="src/assets/Logo.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent">
          <ul className={`navbar-nav ${styles.customNavList}`}>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`nav-item ${link.isDropdown ? 'dropdown' : ''}`}>
                {!link.isDropdown ? (
                  <a
                    className={`nav-link ${
                      location.pathname === link.href
                        ? styles.navLinkActive
                        : styles.navLink
                    }`}
                    href={link.href}>
                    {link.name}
                  </a>
                ) : (
                  <>
                    <a
                      className={`nav-link dropdown-toggle ${
                        link.dropdownItems.some((item) =>
                          location.pathname.startsWith(item.href)
                        )
                          ? styles.navLinkActive
                          : styles.navLink
                      }`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {link.name}
                    </a>
                    <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                      {link.dropdownItems.map((item, idx) => (
                        <li key={idx}>
                          <a
                            className="dropdown-item"
                            href={item.href}
                            target={
                              link.name === 'Login' ? '_blank' : '_self'
                            }
                            rel={
                              link.name === 'Login'
                                ? 'noopener noreferrer'
                                : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                      <li>
                        <hr
                          className={`dropdown-divider ${styles.dropdownDivider}`}
                        />
                      </li>
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
