(function () {
  const root = document.getElementById('root');

  const services = [
    {
      slug: 'taxi-service',
      title: 'Taxi-Service',
      summary: 'Schnelle, sichere und moderne Mobilität für Stadt, Region und besondere Anlässe.',
      description: 'Wir bieten einen zuverlässigen Taxi-Service mit freundlicher Betreuung, klarer Kommunikation und einem Fokus auf Komfort und Pünktlichkeit.',
      bullets: ['Pünktliche Abfahrten', 'Saubere und komfortable Fahrzeuge', 'Flexible Fahrten für Alltag und Reisen'],
      image: '/src/Taxi_Springbrunnen.jpeg',
      contactText: 'Wir freuen uns, Sie sicher und entspannt an Ihr Ziel zu bringen.'
    },
    {
      slug: 'snackpack',
      title: 'SNACKPACK',
      summary: 'Moderne Snackautomaten für praktische, jederzeit verfügbare kleine Genüsse.',
      description: 'SnackPack ergänzt Orte mit einem unkomplizierten und hochwertigen Service: frische Snacks und Getränke direkt dort, wo sie gebraucht werden.',
      bullets: ['Frische Auswahl', 'Einfache Bedienung', 'Flexible Einsatzmöglichkeiten'],
      image: '/src/Snackpack.png',
      contactText: 'Sprechen Sie mit uns über die passende Lösung für Ihren Ort oder Ihr Unternehmen.'
    }
  ];

  const navItems = [
    { key: 'home', label: 'Startseite', hash: '/' },
    { key: 'services', label: 'Dienstleistungen', hash: '/dienstleistungen' },
    { key: 'about', label: 'Über uns', hash: '/ueber-uns' },
    { key: 'contact', label: 'Kontakt', hash: '/kontakt' },
    { key: 'agb', label: 'AGB', hash: '/agb' },
    { key: 'imprint', label: 'Impressum', hash: '/impressum' }
  ];

  let currentRoute = '/';
  let activeService = services[0];

  function readRoute() {
    const hash = window.location.hash.replace('#', '') || '/';
    if (hash.startsWith('/dienstleistungen/')) {
      const slug = hash.split('/').pop();
      activeService = services.find((item) => item.slug === slug) || services[0];
      return '/dienstleistungen/detail';
    }
    if (hash === '/dienstleistungen') {
      return '/dienstleistungen';
    }
    if (hash === '/ueber-uns') {
      return '/ueber-uns';
    }
    if (hash === '/kontakt') {
      return '/kontakt';
    }
    if (hash === '/agb') {
      return '/agb';
    }
    if (hash === '/impressum') {
      return '/impressum';
    }
    return '/';
  }

  function navigate(target) {
    window.location.hash = target;
    currentRoute = readRoute();
    render();
  }

  function renderHomePage() {
    return `
      <section class="page-block">
        <div class="hero-card hero-card--split hero-card--brand">
          <div>
            <p class="eyebrow">Empax • dynamisch • zukunftsorientiert • nah am Kunden</p>
            <h2>Verlässliche Services für den Alltag.</h2>
            <p>Empax bietet praktische Lösungen für Menschen und Unternehmen. Ob zuverlässige Fahrdienste oder moderne Verpflegungslösungen – wir setzen auf Qualität, schnellen Service und langfristiges Vertrauen.</p>
            <p>Unsere Leistungen richten sich an Privatpersonen, Unternehmen und Veranstalter. Wir legen grossen Wert auf Sauberkeit, Pünktlichkeit und respektvollen Umgang — dafür steht unser Team jeden Tag ein.</p>
            <ul>
              <li>Flexible Buchungsoptionen für private und geschäftliche Fahrten</li>
              <li>Moderne Snack- und Getränkeangebote für Orte mit Bedarf</li>
              <li>Persönlicher Service und transparente Preise</li>
            </ul>
            <div class="hero-actions">
              <a class="btn btn-primary" href="#/dienstleistungen">Unsere Leistungen</a>
              <a class="btn btn-secondary" href="#/kontakt">Kontakt aufnehmen</a>
            </div>
          </div>
          <div class="image-frame hero-image-frame">
            <img src="/src/Logo.png" alt="Empax Logo" />
          </div>
        </div>
      </section>
      <section class="page-block">
        <div class="grid services-grid">
          ${services.map((service) => `
            <article class="service-card">
              <div class="image-frame service-image-frame">
                <img src="${service.image}" alt="${service.title}" />
              </div>
              <div class="service-card-body">
                <h4>${service.title}</h4>
                <p>${service.summary}</p>
                <a class="text-link" href="#/dienstleistungen/${service.slug}">Mehr erfahren →</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>`;
  }

  function renderAboutPage() {
    return `
      <section class="page-block">
        <h2>Über uns</h2>
        <p class="lead">Empax steht für flexible, moderne und vertrauensvolle Lösungen rund um Mobilität und Service.</p>
        <div class="grid detail-grid">
          <article class="info-card">
            <h3>Unsere Haltung</h3>
            <p>Wir arbeiten zuverlässig, kundenorientiert und mit einem klaren Blick auf die Bedürfnisse unserer Partner und Gäste.</p>
          </article>
          <article class="info-card">
            <h3>Was wir auszeichnet</h3>
            <ul>
              <li>Persönlicher Kontakt</li>
              <li>Saubere und moderne Ausstattung</li>
              <li>Klare Kommunikation und schnelle Abstimmung</li>
            </ul>
          </article>
        </div>
      </section>`;
  }

  function renderContactPage() {
    return `
      <section class="page-block">
        <h2>Kontakt</h2>
        <p class="lead">Wir freuen uns über Ihre Anfrage.</p>
        <div class="grid detail-grid">
          <article class="info-card">
            <h3>Kontakt</h3>
            <p>E-Mail: <a class="contact-link" href="mailto:info@empax.ch">info@empax.ch</a><br />Telefon: <a class="contact-link" href="tel:+41763882611">+41 76 388 26 11</a></p>
          </article>
          <article class="info-card">
            <h3>Adresse</h3>
            <p>EMPAX GmbH<br />Alte-Landstrasse 8<br />8872 Weesen<br />Schweiz</p>
          </article>
        </div>
      </section>`;
  }

  function renderAgbsPage() {
    return `
      <section class="page-block">
        <h2>AGB</h2>
        <p>Diese allgemeinen Geschäftsbedingungen regeln das Vertragsverhältnis zwischen Empax und unseren Kundinnen und Kunden.</p>
        <div class="info-card">
          <h3>1. Leistungsumfang</h3>
          <p>Die Leistungen werden nach Auftragserteilung und individueller Vereinbarung erbracht.</p>
          <h3>2. Vertragsabschluss</h3>
          <p>Der Vertrag kommt mit der Bestätigung durch Empax oder durch Inanspruchnahme der Leistung zustande.</p>
          <h3>3. Preise</h3>
          <p>Alle Preise verstehen sich in CHF inkl. der gesetzlichen Mehrwertsteuer, sofern nicht anders angegeben.</p>
          <h3>4. Zahlung</h3>
          <p>Zahlungen sind innert der vereinbarten Frist zu leisten. Bei Zahlungsverzug behalten wir uns Mahn- und Verzugszinsen vor.</p>
          <h3>5. Stornierung</h3>
          <p>Stornierungen müssen so früh wie möglich gemeldet werden; es können Gebühren anfallen.</p>
          <h3>6. Umbuchung</h3>
          <p>Umbuchungen werden nach Verfügbarkeit berücksichtigt und können kostenpflichtig sein.</p>
          <h3>7. Pflichten der Kundinnen und Kunden</h3>
          <p>Kundinnen und Kunden verpflichten sich zu einem verantwortungsvollen Verhalten gegenüber Fahrern, Personal und Fahrzeugen.</p>
          <h3>8. Reinigungsschäden</h3>
          <p>Für Verschmutzungen und Schäden, die über den üblichen Gebrauch hinausgehen, haftet die Kundin bzw. der Kunde.</p>
          <h3>9. Spezielle Reinigungsregel</h3>
          <p>Wer im Fahrzeug erbricht, haftet für anfallende Reinigungs- und Ersatzkosten; diese Kosten sind von der betreffenden Person zu tragen.</p>
          <h3>10. Mitnahme von Gegenständen</h3>
          <p>Gegenstände dürfen nur mitgenommen werden, sofern sie sicher verstaut werden können und keine Gefahr darstellen.</p>
          <h3>11. Haftung</h3>
          <p>Empax haftet für Schäden nur im gesetzlich zulässigen Umfang und soweit diese durch grobe Fahrlässigkeit oder Vorsatz verursacht wurden.</p>
          <h3>12. Verspätungen</h3>
          <p>Verspätungen können in Einzelfällen auftreten; wir informieren über Verzögerungen, sobald möglich.</p>
          <h3>13. Datenschutz</h3>
          <p>Personenbezogene Daten werden vertraulich behandelt und nur zur Abwicklung der Leistung verwendet.</p>
          <h3>14. Verhalten im Fahrzeug</h3>
          <p>Offene Getränke, gefährliche Gegenstände und Störverhalten sind untersagt. Bei Verstössen kann ein Ausschluss von der Fahrt erfolgen.</p>
          <h3>15. Haustiere</h3>
          <p>Haustiere sind nur nach vorheriger Absprache erlaubt und müssen so transportiert werden, dass sie andere Fahrgäste nicht belästigen.</p>
          <h3>16. Haftung für mitgeführte Sachen</h3>
          <p>Mitgeführte Gegenstände werden nach bestem Wissen behandelt. Empax übernimmt keine Haftung für Wertgegenstände.</p>
          <h3>17. Subunternehmer</h3>
          <p>Empax kann Leistungserbringer zur Vertragserfüllung einsetzen; verantwortlich bleibt Empax.</p>
          <h3>18. Änderung der AGB</h3>
          <p>Empax behält sich Änderungen der AGB vor; Kunden werden über wesentliche Änderungen informiert.</p>
          <h3>19. Anwendbares Recht</h3>
          <p>Es gilt schweizerisches Recht; Gerichtsstand ist nach Möglichkeit der Sitz von Empax.</p>
          <h3>20. Salvatorische Klausel</h3>
          <p>Sollten einzelne Bestimmungen unwirksam sein, berührt dies nicht die Gültigkeit der übrigen Bestimmungen.</p>
        </div>
      </section>`;
  }

  function renderImprintPage() {
    return `
      <section class="page-block">
        <h2>Impressum</h2>
        <div class="grid detail-grid">
          <article class="info-card">
            <h3>Unternehmen</h3>
            <p><strong>EMPAX GmbH</strong><br />Alte-Landstrasse 8<br />8872 Weesen<br />Schweiz</p>
          </article>
          <article class="info-card">
            <h3>Kontakt</h3>
            <p>E-Mail: <a class="contact-link" href="mailto:info@empax.ch">info@empax.ch</a><br />Telefon: <a class="contact-link" href="tel:+41763882611">+41 76 388 26 11</a></p>
          </article>
        </div>
      </section>`;
  }

  function renderServicesPage() {
    return `
      <section class="page-block">
        <h2>Dienstleistungen</h2>
        <p class="lead">Wir bieten moderne und zuverlässige Lösungen für Alltag, Mobilität und Gästeerlebnis.</p>
        <div class="grid services-grid">
          ${services.map((service) => `
            <article class="service-card">
              <div class="image-frame service-image-frame">
                <img src="${service.image}" alt="${service.title}" />
              </div>
              <div class="service-card-body">
                <h4>${service.title}</h4>
                <p>${service.summary}</p>
                <a class="text-link" href="#/dienstleistungen/${service.slug}">Mehr erfahren →</a>
              </div>
            </article>
          `).join('')}
        </div>
      </section>`;
  }

  function renderServicePage() {
    return `
      <section class="page-block">
        <div class="hero-card hero-card--split">
          <div>
            <p class="eyebrow">Dienstleistung</p>
            <h2>${activeService.title}</h2>
            <p>${activeService.description}</p>
          </div>
          <div class="image-frame">
            <img src="${activeService.image}" alt="${activeService.title}" />
          </div>
        </div>

        <div class="grid detail-grid">
          <article class="info-card">
            <h3>Beschreibung</h3>
            <p>${activeService.description}</p>
          </article>
          <article class="info-card">
            <h3>Typische Merkmale</h3>
            <ul>
              ${activeService.bullets.map((item) => `<li>${item}</li>`).join('')}
            </ul>
          </article>
        </div>

        <div class="contact-cta">
          <h3>Interesse geweckt?</h3>
          <p>${activeService.contactText}</p>
          <a class="btn btn-primary" href="#/kontakt">Kontakt aufnehmen</a>
        </div>
      </section>`;
  }

  function renderSidebar() {
    return `
      <aside class="sidebar">
        <div class="brand-block">
          <img class="brand-logo" src="/src/Logo.png" alt="Empax Logo" />
          <div>
            <h1>Empax</h1>
            <p>Praktische Lösungen für Mobilität und Service.</p>
          </div>
        </div>
        <nav class="nav-links">
          ${navItems.map((item) => `
            <button class="nav-link${currentRoute === (item.hash === '/' ? '/' : item.hash) ? ' is-active' : ''}" data-nav="${item.hash}">
              ${item.label}
            </button>
          `).join('')}
        </nav>
      </aside>`;
  }

  function renderContent() {
    if (currentRoute === '/ueber-uns') {
      return renderAboutPage();
    }
    if (currentRoute === '/kontakt') {
      return renderContactPage();
    }
    if (currentRoute === '/agb') {
      return renderAgbsPage();
    }
    if (currentRoute === '/impressum') {
      return renderImprintPage();
    }
    if (currentRoute === '/dienstleistungen') {
      return renderServicesPage();
    }
    if (currentRoute === '/dienstleistungen/detail') {
      return renderServicePage();
    }
    return renderHomePage();
  }

  function render() {
    root.innerHTML = `
      <div class="app-shell">
        ${renderSidebar()}
        <main class="page-content">${renderContent()}</main>
      </div>`;

    document.querySelectorAll('[data-nav]').forEach((button) => {
      button.addEventListener('click', () => navigate(button.getAttribute('data-nav')));
    });
  }

  window.addEventListener('hashchange', () => {
    currentRoute = readRoute();
    render();
  });

  currentRoute = readRoute();
  render();
})();
