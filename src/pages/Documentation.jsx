import React from 'react';
import './PageCommon.css';

const docSections = [
  {
    title: 'Ghid de început rapid',
    desc: 'Instalarea Firebird, crearea primei baze de date și efectuarea primelor interogări SQL.',
    links: [
      { label: 'Ghid de start rapid Firebird 3.0', href: 'http://www.firebirdsql.org/file/documentation/reference_manuals/user_manuals/html/qsg3.html' },
      { label: 'Instalare Firebird', href: 'https://firebirdsql.org/en/getting-firebird/' },
    ],
  },
  {
    title: 'Referință limbaj SQL',
    desc: 'Documentație completă pentru limbajul SQL al Firebird, inclusiv DDL, DML, proceduri stocate și triggere.',
    links: [
      { label: 'Referință SQL Firebird 5.0', href: 'https://firebirdsql.org/file/documentation/html/en/refdocs/fblangref50/firebird-50-language-reference.html' },
      { label: 'Referință SQL Firebird 4.0', href: 'https://firebirdsql.org/file/documentation/html/en/refdocs/fblangref40/firebird-40-language-reference.html' },
      { label: 'Referință SQL Firebird 3.0', href: 'https://firebirdsql.org/file/documentation/html/en/refdocs/fblangref30/firebird-30-language-reference.html' },
    ],
  },
  {
    title: 'Note de lansare',
    desc: 'Informații despre funcționalitățile noi, modificările și corecțiile de erori din fiecare versiune.',
    links: [
      { label: 'Note lansare Firebird 5.0.3', href: 'https://www.firebirdsql.org/file/documentation/release_notes/Firebird-5.0.3-ReleaseNotes.pdf' },
      { label: 'Note lansare Firebird 4.0.6', href: 'https://www.firebirdsql.org/file/documentation/release_notes/Firebird-4.0.6-ReleaseNotes.pdf' },
    ],
  },
  {
    title: 'Ghid de administrare',
    desc: 'Configurarea și administrarea unui server Firebird: securitate, backup, recuperare și monitorizare.',
    links: [
      { label: 'Ghid administrare Firebird 3', href: 'https://firebirdsql.org/file/documentation/chunk/en/refdocs/fbadmin/firebird-admin.html' },
    ],
  },
  {
    title: 'Documentație pentru dezvoltatori',
    desc: 'API-uri, drivere, instrumente de acces la date și ghiduri pentru integrarea Firebird în aplicații.',
    links: [
      { label: 'Driver JDBC (Jaybird)', href: 'https://firebirdsql.org/en/jdbc-driver/' },
      { label: 'Driver .NET (FirebirdClient)', href: 'https://firebirdsql.org/en/net-provider/' },
      { label: 'Driver ODBC', href: 'https://firebirdsql.org/en/odbc-driver/' },
      { label: 'Driver Python (fdb)', href: 'https://firebirdsql.org/en/python-driver/' },
    ],
  },
  {
    title: 'Cărți despre Firebird',
    desc: 'Publicații și cărți disponibile despre utilizarea și administrarea Firebird.',
    links: [
      { label: 'Cărți recomandate', href: 'https://firebirdsql.org/en/books/' },
    ],
  },
];

function Documentation() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1>Documentație</h1>
          <p>Ghiduri, referințe și resurse complete pentru Firebird SQL în limba română.</p>
        </div>
      </div>
      <div className="container page-body">
        <div className="breadcrumb">
          <a href="/">Acasă</a> &rsaquo; Documentație
        </div>
        <div className="doc-intro">
          <p>
            Documentația Firebird este disponibilă în mai multe formate: HTML online, PDF pentru descărcare
            și text simplu. Mai jos găsiți principalele secțiuni de documentație, organizate pe categorii.
            Traducerile în română sunt în curs de realizare — linkurile duc momentan la versiunile oficiale
            în engleză.
          </p>
        </div>
        <div className="doc-grid">
          {docSections.map((section, i) => (
            <div key={i} className="doc-card">
              <h2>{section.title}</h2>
              <p>{section.desc}</p>
              <ul>
                {section.links.map((link, j) => (
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
        <div className="info-box">
          <h3>📖 Indexul complet al documentației</h3>
          <p>
            Accesați{' '}
            <a href="https://firebirdsql.org/en/documentation/" target="_blank" rel="noopener noreferrer">
              indexul oficial al documentației Firebird
            </a>{' '}
            pentru lista completă a tuturor documentelor disponibile, organizate pe versiuni și tipuri.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Documentation;
