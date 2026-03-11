import React from 'react';
import './PageCommon.css';

const communityLinks = [
  {
    title: 'Firebird Foundation',
    desc: 'Firebird Foundation este organizația non-profit care susține proiectul Firebird. Puteți deveni membru sau sponsor pentru a contribui la dezvoltarea continuă a Firebird.',
    links: [
      { label: 'Site Firebird Foundation', href: 'https://firebirdsql.org/en/firebird-foundation/' },
      { label: 'Deveniti membru', href: 'https://firebirdsql.org/en/firebird-foundation/' },
    ],
    icon: '🏛️',
  },
  {
    title: 'Liste de discuții (Mailing Lists)',
    desc: 'Participați la discuțiile comunității prin intermediul listelor de emailuri. Există liste separate pentru utilizatori, dezvoltatori și alte subiecte specifice.',
    links: [
      { label: 'Toate listele de discuții', href: 'https://firebirdsql.org/en/mailing-lists/' },
      { label: 'firebird-support (utilizatori generali)', href: 'https://groups.google.com/g/firebird-support' },
      { label: 'firebird-devel (dezvoltatori)', href: 'https://groups.google.com/g/firebird-devel' },
    ],
    icon: '📧',
  },
  {
    title: 'Forum și Stack Overflow',
    desc: 'Puneți întrebări și primiți răspunsuri de la comunitatea activă de utilizatori Firebird pe platformele de discuții online.',
    links: [
      { label: 'Firebird pe Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/firebird' },
      { label: 'Firebird pe Reddit', href: 'https://www.reddit.com/r/firebird/' },
    ],
    icon: '💬',
  },
  {
    title: 'Conferința anuală Firebird',
    desc: 'Conferința anuală a comunității Firebird reunește utilizatori, dezvoltatori și furnizori de soluții din întreaga lume pentru prezentări, ateliere și networking.',
    links: [
      { label: 'Informații conferință', href: 'https://firebirdsql.org/en/conference/' },
    ],
    icon: '🎤',
  },
  {
    title: 'Contribuiți la Firebird',
    desc: 'Firebird este un proiect open source condus de voluntari. Puteți contribui cu cod, documentație, traduceri sau raportarea de erori.',
    links: [
      { label: 'GitHub Firebird', href: 'https://github.com/FirebirdSQL/firebird' },
      { label: 'Raportați erori (tracker)', href: 'https://github.com/FirebirdSQL/firebird/issues' },
      { label: 'Contribuiți la documentație', href: 'https://github.com/FirebirdSQL/firebird-documentation' },
    ],
    icon: '🤝',
  },
  {
    title: 'Comunitatea română',
    desc: 'Comunitatea utilizatorilor Firebird din România. Contribuiți la traducerea documentației în română și la promovarea Firebird în spațiul românesc.',
    links: [
      { label: 'Contribuiți la firebird.ro', href: 'https://github.com/mariuz/firebird.ro_website' },
    ],
    icon: '🇷🇴',
  },
];

function Community() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1>Comunitate</h1>
          <p>Alăturați-vă comunității globale Firebird — utilizatori, dezvoltatori și parteneri.</p>
        </div>
      </div>
      <div className="container page-body">
        <div className="breadcrumb">
          <a href="/">Acasă</a> &rsaquo; Comunitate
        </div>
        <p className="intro-text">
          Firebird are o comunitate activă și primitoare de utilizatori și dezvoltatori din întreaga lume.
          Indiferent dacă ești nou în Firebird sau un utilizator experimentat, există mai multe modalități
          de a te conecta cu alții și de a contribui la proiect.
        </p>
        <div className="community-grid">
          {communityLinks.map((section, i) => (
            <div key={i} className="community-card">
              <div className="community-icon">{section.icon}</div>
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
      </div>
    </main>
  );
}

export default Community;
