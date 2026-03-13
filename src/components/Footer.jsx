import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col">
            <h3>Firebird.ro</h3>
            <p>
              Traducere în limba română a site-ului oficial Firebird SQL. Firebird
              este un sistem de gestiune a bazelor de date relaționale open source.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navigare</h4>
            <ul>
              <li><Link to="/">Acasă</Link></li>
              <li><Link to="/documentatie">Documentație</Link></li>
              <li><Link to="/descarcari">Descărcări</Link></li>
              <li><Link to="/comunitate">Comunitate</Link></li>
              <li><Link to="/suport">Suport</Link></li>
              <li><Link to="/dezvoltare">Dezvoltare</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resurse</h4>
            <ul>
              <li>
                <a href="https://firebirdsql.org" target="_blank" rel="noopener noreferrer">
                  Site oficial (EN)
                </a>
              </li>
              <li>
                <a href="https://github.com/FirebirdSQL/firebird" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://firebirdsql.org/en/firebird-mailing-lists/" target="_blank" rel="noopener noreferrer">
                  Liste de discuții
                </a>
              </li>
              <li>
                <a href="https://stackoverflow.com/questions/tagged/firebird" target="_blank" rel="noopener noreferrer">
                  Stack Overflow
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>
                <a href="https://firebirdsql.org/en/firebird-foundation/" target="_blank" rel="noopener noreferrer">
                  Firebird Foundation
                </a>
              </li>
              <li>
                <a href="https://github.com/mariuz/firebird.ro_website" target="_blank" rel="noopener noreferrer">
                  Contribuie la traducere
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Firebird.ro — Traducere neoficială în română.{' '}
            <a href="https://firebirdsql.org" target="_blank" rel="noopener noreferrer">
              Firebird SQL
            </a>{' '}
            este open source sub licența IDPL/LGPL.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
