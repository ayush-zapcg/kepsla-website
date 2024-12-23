import './Navbar.css';

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
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top w-100"
      style={{
        borderRadius: '35px',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.1)'
      }}>
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
          <ul
            className="navbar-nav mb-2 mb-lg-0"
            style={{
              gap: '50px',
              display: 'flex',
              marginLeft: '150px'
            }}>
            {navLinks.map((link, index) => (
              <li
                key={index}
                className={`nav-item ${link.isDropdown ? 'dropdown' : ''}`}>
                {!link.isDropdown ? (
                  <a
                    className={`nav-link ${link.name === 'Home' ? 'active' : ''}`}
                    href={link.href}>
                    {link.name}
                  </a>
                ) : (
                  <>
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {link.name}
                    </a>
                    <ul className="dropdown-menu">
                      {link.dropdownItems.map((item, idx) => (
                        <li key={idx}>
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
