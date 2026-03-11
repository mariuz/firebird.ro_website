import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container">
          <Link to="/" className="site-logo">
            <span className="logo-firebird">Firebird</span>
            <span className="logo-ro">.ro</span>
          </Link>
          <div className="header-tagline">
            Baza de date relațională open source — Traducere în română
          </div>
          <div className="header-actions">
            <a
              href="https://firebirdsql.org/en/downloads/"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Descarcă Firebird
            </a>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <div className="container">
          <button
            className="nav-toggle"
            onClick={toggleMenu}
            aria-label="Deschide meniu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
            <li>
              <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                Acasă
              </NavLink>
            </li>
            <li>
              <NavLink to="/documentatie" onClick={() => setMenuOpen(false)}>
                Documentație
              </NavLink>
            </li>
            <li>
              <NavLink to="/descarcari" onClick={() => setMenuOpen(false)}>
                Descărcări
              </NavLink>
            </li>
            <li>
              <NavLink to="/comunitate" onClick={() => setMenuOpen(false)}>
                Comunitate
              </NavLink>
            </li>
            <li>
              <NavLink to="/suport" onClick={() => setMenuOpen(false)}>
                Suport
              </NavLink>
            </li>
            <li>
              <NavLink to="/dezvoltare" onClick={() => setMenuOpen(false)}>
                Dezvoltare
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
