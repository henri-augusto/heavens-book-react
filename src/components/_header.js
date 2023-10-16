import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './_header.css';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const Header = () => {
  return (
    <header>
      <Desktop>
        <div className="container py-4 px-3 mx-auto">
          <div className="logo">
            <span className="title">HEAVEN'S BOOK</span>
            <span className="subtitle">ONLINE E-BOOK PARADISE</span>
          </div>
          <nav className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Livros
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Categorias
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Desktop>

      <Mobile>
        <nav className="navbar">
          <div className="container-fluid">
            <div>
              <a className="navbar-brand" href="/">
                <img
                  src="/img/logo-red.png"
                  alt="Bootstrap"
                  width="150"
                  height="24"
                ></img>
              </a>
            </div>
            <div className="container-togglers">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <button className="navbar-toggler">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-bookmark-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
                </svg>
              </button>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabIndex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Heaven's Book
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Livros
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Cursos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Categorias
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Sobre
                    </a>
                  </li>
                </ul>
                <form className="d-flex mt-3" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Procure por um book"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </Mobile>
    </header>
  );
};

export default Header;
