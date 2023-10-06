import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Navbar extends Component {
  // static propTypes = { second: third };

  render() {
    return (
      <nav
        className={`navbar fixed-top navbar-dark bg-dark
        } navbar-expand-lg `}
      >
        <div className="container-fluid">
          <a className="navbar-brand order-2 order-lg-1" href="/">
            NewsSeven
          </a>
          <button
            className="navbar-toggler shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`offcanvas offcanvas-start  text-bg-dark  order-lg-2 `}
            tabIndex="-1"
            id="offcanvasDarkNavbar"
            aria-labelledby="offcanvasDarkNavbarLabel"
          >
            <div className={`offcanvas-header  `}>
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                Dark offcanvas
              </h5>
              <button
                type="button"
                className={`btn-close btn-close-white  shadow-none`}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className={`offcanvas-body `}>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
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
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  Search
                </button>
                {/* <button className="btn btn-success" onClick={props.sam}type="button">Search</button> */}
              </form>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
