import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
       Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasNavbar"
      aria-controls="offcanvasNavbar"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
         Navbar
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Service1
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Service1
                </a>
              </li>
              
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
