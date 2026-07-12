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
        <p>Diese allgemeinen Geschäftsbedingungen dienen der transparenten Abwicklung unserer Leistungen.</p>
        <div class="info-card">
          <h3>1. Leistungsumfang</h3>
          <p>Die Leistungen von Empax werden individuell nach Auftrag und Vereinbarung erbracht.</p>
          <h3>2. Zahlung</h3>
          <p>Die vereinbarten Entgelte sind rechtzeitig zu begleichen.</p>
          <h3>3. Haftung</h3>
          <p>Empax haftet nur im Rahmen der gesetzlichen Bestimmungen.</p>
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
