import React from 'react';
import './PageCommon.css';

const supportGroups = [
  {
    id: 'gratuit',
    title: 'Suport gratuit din partea comunității',
    options: [
      {
        icon: '📋',
        title: 'Întrebări frecvente (FAQ)',
        desc: 'Răspunsuri la cele mai comune întrebări despre instalarea, configurarea și utilizarea Firebird.',
        links: [
          { label: 'Firebird FAQ (firebirdfaq.org)', href: 'http://www.firebirdfaq.org/' },
          { label: 'FAQ pe firebirdsql.org', href: 'https://firebirdsql.org/en/faq/' },
        ],
      },
      {
        icon: '📧',
        title: 'Liste de discuții',
        desc: 'Listele de emailuri ale comunității Firebird sunt principalul canal de suport gratuit.',
        links: [
          { label: 'firebird-support (asistență generală)', href: 'https://groups.google.com/g/firebird-support' },
          { label: 'Toate listele de discuții', href: 'https://firebirdsql.org/en/mailing-lists/' },
        ],
      },
      {
        icon: '❓',
        title: 'Stack Overflow',
        desc: 'Puneți întrebări tehnice folosind tag-ul [firebird] pentru răspunsuri rapide.',
        links: [
          { label: 'Întrebări Firebird pe Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/firebird' },
        ],
      },
    ],
  },
  {
    id: 'resurse',
    title: 'Resurse pentru auto-ajutorare',
    options: [
      {
        icon: '📚',
        title: 'Documentație',
        desc: 'Ghiduri complete, note de lansare și referințe SQL.',
        links: [
          { label: 'Documentație Firebird', href: '/documentatie' },
          { label: 'Toate manualele de referință', href: 'https://firebirdsql.org/en/reference-manuals/' },
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
    ],
  },
  {
    id: 'comercial',
    title: 'Suport comercial',
    options: [
      {
        icon: '🏢',
        title: 'Furnizori de suport',
        desc: 'Incidente punctuale, abonamente de suport continuu și servicii speciale oferite de companii specializate.',
        links: [
          { label: 'Suport comercial Firebird', href: 'https://firebirdsql.org/en/support/' },
          { label: 'IBPhoenix', href: 'https://firebirdsql.org/ibphoenix' },
          { label: 'RED SOFT', href: 'https://firebirdsql.org/redsoft-red-soft' },
        ],
      },
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
        <nav className="support-nav" aria-label="Secțiuni suport">
          {supportGroups.map((group) => (
            <a key={group.id} href={'#' + group.id}>{group.title}</a>
          ))}
        </nav>
        {supportGroups.map((group) => (
          <section key={group.id} id={group.id} className="support-section">
            <h2 className="support-section-title">{group.title}</h2>
            <div className="support-grid">
              {group.options.map((option) => (
                <div key={option.title} className="support-card">
                  <div className="support-icon">{option.icon}</div>
                  <h3>{option.title}</h3>
                  <p>{option.desc}</p>
                  <ul>
                    {option.links.map((link) => (
                      <li key={link.href}>
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
          </section>
        ))}
        <div className="info-box">
          <h3>💡 Sfat</h3>
          <p>
            Înainte de a posta o întrebare, consultați{' '}
            <a href="http://www.firebirdfaq.org/" target="_blank" rel="noopener noreferrer">
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
