import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const newsItems = [
  {
    id: 1,
    date: '2025-02-15',
    title: 'Firebird 5.0.2 lansat',
    excerpt:
      'Echipa Firebird a lansat versiunea 5.0.2, care include corecții de erori și îmbunătățiri de performanță.',
    link: 'https://firebirdsql.org/en/news/',
  },
  {
    id: 2,
    date: '2024-12-10',
    title: 'Firebird 4.0.5 disponibil',
    excerpt:
      'O nouă versiune de mentenanță a seriei Firebird 4.0, cu corecții importante de stabilitate.',
    link: 'https://firebirdsql.org/en/news/',
  },
  {
    id: 3,
    date: '2024-10-20',
    title: 'Conferința anuală Firebird 2024',
    excerpt:
      'Înregistrați-vă pentru conferința anuală a comunității Firebird, ce va aduce laolaltă utilizatori și dezvoltatori din întreaga lume.',
    link: 'https://firebirdsql.org/en/conference/',
  },
];

const features = [
  {
    icon: '🔒',
    title: 'Securitate avansată',
    desc: 'Autentificare robustă, criptare și control granular al accesului pentru a proteja datele dumneavoastră.',
  },
  {
    icon: '⚡',
    title: 'Performanță ridicată',
    desc: 'Optimizat pentru tranzacții ACID complete, cu arhitectură multi-generațională (MGA) care asigură acces concurent fără blocaje.',
  },
  {
    icon: '🌍',
    title: 'Multiplatformă',
    desc: 'Disponibil pe Linux, Windows, macOS și alte sisteme UNIX. O singură bază de cod pentru toate platformele.',
  },
  {
    icon: '📦',
    title: 'Ușor de implementat',
    desc: 'Poate fi utilizat ca server dedicat, server înglobat sau bibliotecă în aplicații, fără licențiere sau configurații complicate.',
  },
  {
    icon: '📝',
    title: 'SQL complet',
    desc: 'Suport complet pentru SQL:2003, proceduri stocate, triggere, funcții definite de utilizator și multe alte caracteristici avansate.',
  },
  {
    icon: '🆓',
    title: 'Complet gratuit',
    desc: 'Open source sub licenta IDPL/LGPL. Utilizare fără restricții în aplicații comerciale și open source.',
  },
];

function Home() {
  return (
    <main className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              Firebird — Baza de date relațională
              <br />
              <span className="highlight">open source</span>
            </h1>
            <p className="hero-subtitle">
              Firebird este un sistem de gestiune a bazelor de date relaționale (RDBMS) cu funcționalitate completă,
              care rulează pe Linux, Windows și o varietate de platforme Unix. Este disponibil complet gratuit și
              fără costuri de licențiere.
            </p>
            <div className="hero-buttons">
              <Link to="/descarcari" className="btn btn-hero-primary">
                Descarcă Firebird
              </Link>
              <Link to="/documentatie" className="btn btn-hero-secondary">
                Documentație
              </Link>
            </div>
            <div className="hero-version">
              Versiunea curentă:{' '}
              <a
                href="https://firebirdsql.org/en/firebird-5-0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebird 5.0
              </a>{' '}
              |{' '}
              <a
                href="https://firebirdsql.org/en/firebird-4-0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firebird 4.0 LTS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">De ce Firebird?</h2>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Downloads split */}
      <section className="news-downloads-section">
        <div className="container news-downloads-grid">
          {/* News */}
          <div className="news-col">
            <h2 className="section-title">Știri recente</h2>
            {newsItems.map((item) => (
              <article key={item.id} className="news-card">
                <time className="news-date">{item.date}</time>
                <h3 className="news-title">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h3>
                <p className="news-excerpt">{item.excerpt}</p>
              </article>
            ))}
            <a
              href="https://firebirdsql.org/en/news/"
              className="link-more"
              target="_blank"
              rel="noopener noreferrer"
            >
              Toate știrile →
            </a>
          </div>

          {/* Quick Downloads */}
          <div className="downloads-col">
            <h2 className="section-title">Descărcări rapide</h2>
            <div className="download-box">
              <h3>Firebird 5.0 (Stabil)</h3>
              <ul className="download-list">
                <li>
                  <a href="https://firebirdsql.org/en/firebird-5-0/" target="_blank" rel="noopener noreferrer">
                    🪟 Windows (64-bit)
                  </a>
                </li>
                <li>
                  <a href="https://firebirdsql.org/en/firebird-5-0/" target="_blank" rel="noopener noreferrer">
                    🐧 Linux (64-bit)
                  </a>
                </li>
                <li>
                  <a href="https://firebirdsql.org/en/firebird-5-0/" target="_blank" rel="noopener noreferrer">
                    🍎 macOS (64-bit)
                  </a>
                </li>
              </ul>
              <Link to="/descarcari" className="btn btn-download">
                Toate descărcările
              </Link>
            </div>

            <div className="download-box">
              <h3>Firebird 4.0 (LTS)</h3>
              <ul className="download-list">
                <li>
                  <a href="https://firebirdsql.org/en/firebird-4-0/" target="_blank" rel="noopener noreferrer">
                    🪟 Windows (64-bit)
                  </a>
                </li>
                <li>
                  <a href="https://firebirdsql.org/en/firebird-4-0/" target="_blank" rel="noopener noreferrer">
                    🐧 Linux (64-bit)
                  </a>
                </li>
                <li>
                  <a href="https://firebirdsql.org/en/firebird-4-0/" target="_blank" rel="noopener noreferrer">
                    🍎 macOS (64-bit)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Firebird */}
      <section className="about-section">
        <div className="container">
          <h2 className="section-title">Despre Firebird</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Firebird este un sistem de gestiune a bazelor de date relaționale (RDBMS) care oferă
                multe caracteristici standard ANSI SQL și rulează pe Linux, Windows și o varietate de
                platforme Unix. Firebird oferă concurență excelentă, performanță ridicată și suport
                lingvistic puternic pentru proceduri stocate și triggere.
              </p>
              <p>
                A fost utilizat în producție sub diferite denumiri de la 1981. Firebird 1.0 a fost lansat
                în 2001 ca software open source derivat din InterBase 6.0 al Borland. Versiunile moderne
                Firebird includ multe îmbunătățiri față de versiunile Borland InterBase.
              </p>
              <p>
                Proiectul Firebird este gestionat de o echipă de voluntari și susținut de Firebird Foundation.
                Nu există niciun cost de licențiere sau taxe de abonament pentru utilizarea Firebird.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">25+</div>
                <div className="stat-label">ani de dezvoltare</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">open source & gratuit</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">3</div>
                <div className="stat-label">moduri de implementare</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">∞</div>
                <div className="stat-label">fără limitări de licență</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
