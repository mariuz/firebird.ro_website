import React from 'react';
import './PageCommon.css';

const versions = [
  {
    name: 'Firebird 5.0',
    status: 'Stabil',
    statusClass: 'badge-stable',
    date: '2024',
    desc: 'Cea mai recentă versiune stabilă. Include îmbunătățiri de performanță, paralelism la nivel de server și noi funcționalități SQL.',
    platforms: [
      { os: '🪟 Windows', arch: '64-bit', href: 'https://firebirdsql.org/en/firebird-5-0/' },
      { os: '🪟 Windows', arch: '32-bit', href: 'https://firebirdsql.org/en/firebird-5-0/' },
      { os: '🐧 Linux', arch: '64-bit (.tar.gz)', href: 'https://firebirdsql.org/en/firebird-5-0/' },
      { os: '🐧 Linux', arch: '64-bit (.rpm)', href: 'https://firebirdsql.org/en/firebird-5-0/' },
      { os: '🐧 Linux', arch: '64-bit (.deb)', href: 'https://firebirdsql.org/en/firebird-5-0/' },
      { os: '🍎 macOS', arch: '64-bit', href: 'https://firebirdsql.org/en/firebird-5-0/' },
    ],
    releaseNotes: 'https://firebirdsql.org/file/documentation/release_notes/Firebird-5.0.0-ReleaseNotes.pdf',
  },
  {
    name: 'Firebird 4.0',
    status: 'LTS',
    statusClass: 'badge-lts',
    date: '2021',
    desc: 'Versiunea cu suport pe termen lung (LTS). Recomandat pentru medii de producție care necesită stabilitate maximă.',
    platforms: [
      { os: '🪟 Windows', arch: '64-bit', href: 'https://firebirdsql.org/en/firebird-4-0/' },
      { os: '🪟 Windows', arch: '32-bit', href: 'https://firebirdsql.org/en/firebird-4-0/' },
      { os: '🐧 Linux', arch: '64-bit (.tar.gz)', href: 'https://firebirdsql.org/en/firebird-4-0/' },
      { os: '🐧 Linux', arch: '64-bit (.rpm)', href: 'https://firebirdsql.org/en/firebird-4-0/' },
      { os: '🐧 Linux', arch: '64-bit (.deb)', href: 'https://firebirdsql.org/en/firebird-4-0/' },
      { os: '🍎 macOS', arch: '64-bit', href: 'https://firebirdsql.org/en/firebird-4-0/' },
    ],
    releaseNotes: 'https://firebirdsql.org/file/documentation/release_notes/Firebird-4.0-ReleaseNotes.pdf',
  },
  {
    name: 'Firebird 3.0',
    status: 'Întreținere',
    statusClass: 'badge-maintenance',
    date: '2016',
    desc: 'Versiune în faza de întreținere. Sunt furnizate numai corecții de securitate critice.',
    platforms: [
      { os: '🪟 Windows', arch: '64-bit', href: 'https://firebirdsql.org/en/firebird-3-0/' },
      { os: '🐧 Linux', arch: '64-bit', href: 'https://firebirdsql.org/en/firebird-3-0/' },
      { os: '🍎 macOS', arch: '64-bit', href: 'https://firebirdsql.org/en/firebird-3-0/' },
    ],
    releaseNotes: 'https://firebirdsql.org/file/documentation/release_notes/Firebird-3.0-ReleaseNotes.pdf',
  },
];

const tools = [
  { name: 'FlameRobin', desc: 'Instrument GUI gratuit pentru administrarea bazelor de date Firebird.', href: 'http://flamerobin.org/' },
  { name: 'IBExpert', desc: 'Instrument IDE puternic pentru Firebird și InterBase (versiune freeware disponibilă).', href: 'https://ibexpert.net/' },
  { name: 'DBeaver', desc: 'Client universal de baze de date cu suport Firebird.', href: 'https://dbeaver.io/' },
  { name: 'Jaybird (JDBC)', desc: 'Driver JDBC oficial pentru Firebird, pentru aplicații Java.', href: 'https://firebirdsql.org/en/jdbc-driver/' },
  { name: 'FirebirdClient (.NET)', desc: 'Provider ADO.NET oficial pentru Firebird, pentru aplicații .NET.', href: 'https://firebirdsql.org/en/net-provider/' },
  { name: 'Driver ODBC', desc: 'Driver ODBC oficial pentru conectarea la Firebird din orice aplicație ODBC.', href: 'https://firebirdsql.org/en/odbc-driver/' },
];

function Downloads() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1>Descărcări</h1>
          <p>Descărcați Firebird și instrumentele asociate pentru platforma dumneavoastră.</p>
        </div>
      </div>
      <div className="container page-body">
        <div className="breadcrumb">
          <a href="/">Acasă</a> &rsaquo; Descărcări
        </div>

        <div className="info-box">
          <h3>ℹ️ Notă</h3>
          <p>
            Linkurile de descărcare duc la pagina oficială Firebird în engleză. Alegeți versiunea și
            platforma potrivite pentru sistemul dumneavoastră.
          </p>
        </div>

        <h2 className="subsection-title">Versiuni Firebird Server</h2>
        {versions.map((v, i) => (
          <div key={i} className="version-card">
            <div className="version-header">
              <div>
                <h3>
                  {v.name}{' '}
                  <span className={`badge ${v.statusClass}`}>{v.status}</span>
                </h3>
                <p className="version-date">Lansată: {v.date}</p>
              </div>
              <a href={v.releaseNotes} className="btn-outline" target="_blank" rel="noopener noreferrer">
                Note de lansare
              </a>
            </div>
            <p className="version-desc">{v.desc}</p>
            <div className="platform-list">
              {v.platforms.map((p, j) => (
                <a key={j} href={p.href} className="platform-link" target="_blank" rel="noopener noreferrer">
                  <span className="platform-os">{p.os}</span>
                  <span className="platform-arch">{p.arch}</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <h2 className="subsection-title">Instrumente și drivere</h2>
        <div className="tools-grid">
          {tools.map((t, i) => (
            <div key={i} className="tool-card">
              <h3>
                <a href={t.href} target="_blank" rel="noopener noreferrer">
                  {t.name}
                </a>
              </h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Downloads;
