import { useState } from 'react';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', isDropdown: false },
    {
      name: 'Products',
      isDropdown: true,
      dropdownItems: [
        { name: 'Action', href: '#products/action' },
        { name: 'Another action', href: '#products/another' },
        { name: 'Something else here', href: '#products/something' }
      ]
    },
    {
      name: 'About',
      isDropdown: true,
      dropdownItems: [
        { name: 'Action', href: '#about/action' },
        { name: 'Another action', href: '#about/another' },
        { name: 'Something else here', href: '#about/something' }
      ]
    },
    {
      name: 'Resources',
      isDropdown: true,
      dropdownItems: [
        { name: 'Action', href: '#resources/action' },
        { name: 'Another action', href: '#resources/another' },
        { name: 'Something else here', href: '#resources/something' }
      ]
    },
    {
      name: 'Login',
      isDropdown: true,
      dropdownItems: [
        { name: 'Sign In', href: '/login' },
        { name: 'Register', href: '/register' },
        { name: 'Reset Password', href: '/reset-password' }
      ]
    },
    { name: 'Contact us', href: '/contact', isDropdown: false }
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg bg-body-tertiary fixed-top ${styles.customNavbar}`}>
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/assets/Logo.png"
            alt="Company Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>

        <button
          className={`navbar-toggler ${isOpen ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`}
          id="navbarSupportedContent">
          <ul className={styles.customNavList}>
            {navLinks.map((link) => (
              <li
                key={link.name}
                className={`nav-item ${link.isDropdown ? 'dropdown' : ''}`}>
                {!link.isDropdown ? (
                  <a
                    className={`nav-link ${styles.navLink} ${
                      link.name === 'Home' ? styles.active : ''
                    }`}
                    href={link.href}>
                    {link.name}
                  </a>
                ) : (
                  <>
                    <a
                      className={`nav-link ${styles.navLink} dropdown-toggle`}
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {link.name}
                    </a>
                    <ul className={`dropdown-menu ${styles.dropdownMenu}`}>
                      {link.dropdownItems.map((item) => (
                        <li key={item.name}>
                          <a className="dropdown-item" href={item.href}>
                            {item.name}
                          </a>
                        </li>
                      ))}
                      <li>
                        <hr className="dropdown-divider" />
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
