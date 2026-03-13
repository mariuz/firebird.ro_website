import React from 'react';
import './PageCommon.css';

const supportOptions = [
  {
    icon: '📋',
    title: 'Întrebări frecvente (FAQ)',
    desc: 'Găsiți răspunsuri la cele mai comune întrebări despre instalarea, configurarea și utilizarea Firebird.',
    links: [
      { label: 'FAQ pentru utilizatori noi', href: 'https://firebirdsql.org/en/faq-for-new-users/' },
      { label: 'FAQ tehnic', href: 'https://firebirdsql.org/en/technical-faq/' },
    ],
  },
  {
    icon: '📧',
    title: 'Liste de discuții',
    desc: 'Listele de emailuri ale comunității Firebird sunt principalul canal de suport din partea comunității.',
    links: [
      { label: 'firebird-support (asistență generală)', href: 'https://groups.google.com/g/firebird-support' },
      { label: 'Toate listele de discuții', href: 'https://firebirdsql.org/en/firebird-mailing-lists/' },
    ],
  },
  {
    icon: '❓',
    title: 'Stack Overflow',
    desc: 'Puneți întrebări tehnice pe Stack Overflow folosind tag-ul [firebird] pentru răspunsuri rapide.',
    links: [
      { label: 'Întrebări Firebird pe Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/firebird' },
    ],
  },
  {
    icon: '🏢',
    title: 'Suport comercial',
    desc: 'Companii și consultanți care oferă suport profesional comercial pentru Firebird.',
    links: [
      { label: 'Furnizori de suport comercial', href: 'https://firebirdsql.org/en/commercial-support/' },
    ],
  },
  {
    icon: '📚',
    title: 'Documentație',
    desc: 'Ghiduri complete, note de lansare și referințe SQL pentru auto-ajutorare.',
    links: [
      { label: 'Documentație Firebird', href: '/documentatie' },
    ],
  },
  {
    icon: '🐛',
    title: 'Raportarea erorilor',
    desc: 'Ați găsit o eroare în Firebird? Raportați-o în sistemul de urmărire a problemelor de pe GitHub.',
    links: [
      { label: 'Raportați o eroare pe GitHub', href: 'https://github.com/FirebirdSQL/firebird/issues' },
    ],
  },
];

function Support() {
  return (
    <main className="page-content">
      <div className="page-hero">
        <div className="container">
          <h1>Suport</h1>
          <p>Resurse de ajutor și suport pentru utilizatorii Firebird.</p>
        </div>
      </div>
      <div className="container page-body">
        <div className="breadcrumb">
          <a href="/">Acasă</a> &rsaquo; Suport
        </div>
        <p className="intro-text">
          Firebird beneficiază de o comunitate activă care oferă ajutor gratuit prin liste de discuții,
          forumuri și sisteme de urmărire a problemelor. De asemenea, există mai mulți furnizori care
          oferă suport comercial profesional.
        </p>
        <div className="support-grid">
          {supportOptions.map((option, i) => (
            <div key={i} className="support-card">
              <div className="support-icon">{option.icon}</div>
              <h2>{option.title}</h2>
              <p>{option.desc}</p>
              <ul>
                {option.links.map((link, j) => (
                  <li key={j}>
                    {link.href.startsWith('/') ? (
                      <a href={link.href}>{link.label}</a>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="info-box">
          <h3>💡 Sfat</h3>
          <p>
            Înainte de a posta o întrebare, consultați{' '}
            <a href="https://firebirdsql.org/en/faq-for-new-users/" target="_blank" rel="noopener noreferrer">
              FAQ-ul
            </a>{' '}
            și{' '}
            <a href="/documentatie">documentația</a>{' '}
            — este posibil ca răspunsul să fie deja disponibil acolo.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Support;
