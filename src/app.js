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
        <p>Die nachfolgenden Allgemeinen Geschäftsbedingungen (AGB) regeln die Rechtsverhältnisse zwischen der EMPAX GmbH (nachfolgend "Empax") und ihren Kundinnen und Kunden in der Schweiz.</p>
        <div class="info-card">
          <h3>1. Geltungsbereich</h3>
          <p>Diese AGB gelten für alle von Empax angebotenen Dienstleistungen, sofern nicht schriftlich etwas anderes vereinbart wurde.</p>

          <h3>2. Vertragsabschluss</h3>
          <p>Ein Vertrag kommt mit der schriftlichen oder elektronischen Auftragsbestätigung durch Empax oder durch die tatsächliche Leistungserbringung zustande.</p>

          <h3>3. Leistungen</h3>
          <p>Art und Umfang der Leistungen richten sich nach der Leistungsbeschreibung, dem Angebot sowie ergänzenden Vereinbarungen.</p>

          <h3>4. Preise und Kostentragung</h3>
          <p>Alle Preise verstehen sich in Schweizer Franken (CHF) zuzüglich allfälliger Nebenkosten, sofern nicht anders vereinbart. Kosten für zusätzliche Leistungen werden gesondert berechnet.</p>

          <h3>5. Zahlung und Fälligkeit</h3>
          <p>Rechnungen sind innerhalb der vereinbarten Frist ohne Abzug zu bezahlen. Bei Verzug werden Verzugszinsen und Mahnkosten in Rechnung gestellt.</p>

          <h3>6. Annullation und Stornierung</h3>
          <p>Stornierungen sind dem Kundenservice möglichst frühzeitig mitzuteilen. Bei kurzfristigen Stornierungen können Stornogebühren anfallen, deren Höhe sich nach dem Einzelfall richtet.</p>

          <h3>7. Umbuchungen</h3>
          <p>Umbuchungen werden nach Verfügbarkeit und gegen allenfalls anfallender Gebühr vorgenommen.</p>

          <h3>8. Sonderleistungen und Reinigung</h3>
          <p>Sonderleistungen und umfangreiche Reinigungen (z. B. nach Verschmutzungen) werden nach effektivem Aufwand verrechnet. Der Kunde ist für grobe Verschmutzungen und Schäden verantwortlich.</p>

          <h3>9. Besondere Reinigungsregel (Erbrechen)</h3>
          <p>Erbricht eine Person im Fahrzeug, trägt diese Person die durch die Reinigung und allfällige Ersatzleistungen verursachten Kosten. Empax behält sich vor, in solchen Fällen eine angemessene Reinigungsgebühr zu erheben.</p>

          <h3>10. Pflichten der Kundinnen und Kunden</h3>
          <p>Die Kundin bzw. der Kunde hat Anweisungen des Personals zu befolgen und für die Sicherheit im Fahrzeug Sorge zu tragen. Störendes Verhalten kann zum Ausschluss von Fahrten führen.</p>

          <h3>11. Mitnahme von Gegenständen und Tieren</h3>
          <p>Die Mitnahme von Gepäck und Tieren ist zulässig, sofern dadurch keine Gefahr oder Belästigung entsteht und die Regeln von Empax eingehalten werden.</p>

          <h3>12. Haftungsbeschränkung</h3>
          <p>Empax haftet nur für Schäden, die auf grober Fahrlässigkeit oder Vorsatz beruhen. Für leichte Fahrlässigkeit ist die Haftung ausgeschlossen, soweit gesetzlich zulässig.</p>

          <h3>13. Haftung für mitgeführte Sachen</h3>
          <p>Empax übernimmt keine Haftung für mitgeführte Wertgegenstände, soweit keine besondere Vereinbarung vorliegt.</p>

          <h3>14. Höhere Gewalt</h3>
          <p>Bei Ereignissen höherer Gewalt (z. B. Streiks, Naturereignisse, behördliche Massnahmen) ist Empax von der Leistungspflicht befreit; bereits erbrachte Teilleistungen sind gesondert zu vergüten.</p>

          <h3>15. Datenschutz</h3>
          <p>Personenbezogene Daten werden gemäß geltendem Datenschutzrecht verarbeitet und nur zur Vertragserfüllung und Abrechnung genutzt. Details sind in der Datenschutzerklärung geregelt.</p>

          <h3>16. Reklamationen</h3>
          <p>Reklamationen sind unverzüglich, spätestens jedoch innerhalb von 7 Tagen nach Leistungserbringung schriftlich bei Empax einzureichen.</p>

          <h3>17. Gewährleistung</h3>
          <p>Offensichtliche Mängel sind sofort, versteckte Mängel nach deren Entdeckung mitzuteilen. Gewährleistungsansprüche richten sich nach den gesetzlichen Bestimmungen.</p>

          <h3>18. Übertragung und Subunternehmer</h3>
          <p>Empax darf Leistungen ganz oder teilweise durch Subunternehmer erbringen lassen. Rechte und Pflichten aus dem Vertrag bleiben unberührt.</p>

          <h3>19. Änderung der AGB</h3>
          <p>Empax behält sich vor, diese AGB mit angemessener Frist anzupassen. Wesentliche Änderungen werden den Kunden mitgeteilt.</p>

          <h3>20. Anwendbares Recht und Gerichtsstand</h3>
          <p>Es gilt schweizerisches Recht. Soweit zulässig, wird als Gerichtsstand der Sitz von Empax vereinbart.</p>
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
