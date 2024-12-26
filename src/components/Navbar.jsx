import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#', isDropdown: false },
    {
      name: 'Products',
      isDropdown: true,
      dropdownItems: [
        { name: 'Action', href: '#' },
        { name: 'Another action', href: '#' },
        { name: 'Something else here', href: '#' }
      ]
    },
    {
      name: 'About',
      isDropdown: true,
      dropdownItems: [
        { name: 'Action', href: '#' },
        { name: 'Another action', href: '#' },
        { name: 'Something else here', href: '#' }
      ]
    },
    {
      name: 'Resources',
      isDropdown: true,
      dropdownItems: [
        { name: 'Action', href: '#' },
        { name: 'Another action', href: '#' },
        { name: 'Something else here', href: '#' }
      ]
    },
    {
      name: 'Login',
      isDropdown: true,
      dropdownItems: [
        { name: 'Action', href: '#' },
        { name: 'Another action', href: '#' },
        { name: 'Something else here', href: '#' }
      ]
    },
    { name: 'Contact us', href: '/#', isDropdown: false }
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
                      link.name === 'Home'
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
                        link.name === 'Home'
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
                          <a className="dropdown-item" href={item.href}>
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
