import React from 'react';
import './PageCommon.css';

const devResources = [
  {
    icon: '💻',
    title: 'Cod sursă',
    desc: 'Codul sursă Firebird este găzduit pe GitHub. Puteți naviga, descărca sau contribui la codul sursă.',
    links: [
      { label: 'Firebird pe GitHub', href: 'https://github.com/FirebirdSQL/firebird' },
      { label: 'Toate repozitoriile Firebird', href: 'https://github.com/FirebirdSQL' },
    ],
  },
  {
    icon: '🗺️',
    title: 'Foaie de parcurs (Roadmap)',
    desc: 'Planurile pentru versiunile viitoare ale Firebird, funcționalitățile propuse și prioritățile de dezvoltare.',
    links: [
      { label: 'Planuri de viitor Firebird', href: 'https://firebirdsql.org/en/road-map/' },
    ],
  },
  {
    icon: '🐛',
    title: 'Urmărirea problemelor',
    desc: 'Sistemul de urmărire a erorilor și cererilor de funcționalități pentru Firebird.',
    links: [
      { label: 'GitHub Issues', href: 'https://github.com/FirebirdSQL/firebird/issues' },
    ],
  },
  {
    icon: '📝',
    title: 'Ghid de contribuție',
    desc: 'Informații despre cum puteți contribui la proiectul Firebird: cod, documentație, testare și altele.',
    links: [
      { label: 'Ghid de contribuție', href: 'https://github.com/FirebirdSQL/firebird/blob/master/CONTRIBUTING.md' },
      { label: 'Documentație pentru contribuitori', href: 'https://firebirdsql.org/en/documentation-development/' },
    ],
  },
  {
    icon: '🔬',
    title: 'Construirea din sursă',
    desc: 'Instrucțiuni pentru compilarea Firebird din sursă pe diferite platforme.',
    links: [
      { label: 'Instrucțiuni de compilare', href: 'https://github.com/FirebirdSQL/firebird/blob/master/builds/README' },
    ],
  },
  {
    icon: '📊',
    title: 'Seturi de teste',
    desc: 'Seturile de teste automate folosite pentru validarea calității Firebird.',
    links: [
      { label: 'Firebird QA pe GitHub', href: 'https://github.com/FirebirdSQL/firebird-qa' },
    ],
  },
];

const releases = [
  { version: 'Firebird 5.0.3', date: '2025-07-14', notes: 'http://www.firebirdsql.org/en/firebird-5-0-3/', type: 'Stabil' },
  { version: 'Firebird 4.0.6', date: '2025-07-15', notes: 'http://www.firebirdsql.org/en/firebird-4-0-6/', type: 'LTS' },
  { version: 'Firebird 3.0.13', date: '2025-07-15', notes: 'http://www.firebirdsql.org/en/firebird-3-0-13/', type: 'Întreținere' },
  { version: 'Firebird 2.5', date: '2010-10-04', notes: 'https://firebirdsql.org/en/firebird-2-5/', type: 'EOL' },
];

function Development() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1>Dezvoltare</h1>
          <p>Resurse pentru dezvoltatorii care contribuie la sau cu Firebird SQL.</p>
        </div>
      </div>
      <div className="container page-body">
        <div className="breadcrumb">
          <a href="/">Acasă</a> &rsaquo; Dezvoltare
        </div>
        <p className="intro-text">
          Firebird este un proiect open source condus de o comunitate de voluntari dedicați. Contribuțiile
          la cod, documentație, testare și traduceri sunt binevenite. Toate resursele de care aveți nevoie
          pentru a contribui sunt disponibile mai jos.
        </p>

        <div className="dev-grid">
          {devResources.map((res, i) => (
            <div key={i} className="dev-card">
              <div className="dev-icon">{res.icon}</div>
              <h2>{res.title}</h2>
              <p>{res.desc}</p>
              <ul>
                {res.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h2 className="subsection-title">Istoricul lansărilor</h2>
        <div className="releases-table-wrap">
          <table className="releases-table">
            <thead>
              <tr>
                <th>Versiune</th>
                <th>Data lansării</th>
                <th>Stare</th>
                <th>Note</th>
              </tr>
            </thead>
            <tbody>
              {releases.map((r, i) => (
                <tr key={i}>
                  <td><strong>{r.version}</strong></td>
                  <td>{r.date}</td>
                  <td>
                    <span className={`badge ${r.type === 'Stabil' ? 'badge-stable' : r.type === 'LTS' ? 'badge-lts' : r.type === 'Întreținere' ? 'badge-maintenance' : 'badge-eol'}`}>
                      {r.type}
                    </span>
                  </td>
                  <td>
                    <a href={r.notes} target="_blank" rel="noopener noreferrer">
                      Vezi informații
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default Development;
