# Empax – Website

Statische Website für Empax (Taxiservice, Snackautomaten, Späti).
Reines HTML/CSS/JS ohne Build-Schritt – direkt auf GitHub Pages lauffähig.

## Inhalt

```
index.html            Startseite
taxi.html             Taxiservice
snackautomaten.html   Snackautomaten
spaeti.html           Späti
ueber-uns.html        Über uns / Jobs
kontakt.html          Kontakt + Formular (mailto)
impressum.html        Impressum (Gerüst)
datenschutz.html      Datenschutzerklärung (Gerüst)
404.html              Fehlerseite (GitHub Pages nutzt sie automatisch)
robots.txt
.nojekyll             verhindert die Jekyll-Verarbeitung
assets/css/style.css
assets/js/main.js
assets/img/favicon.svg
```

## Auf GitHub Pages veröffentlichen

1. Neues Repository anlegen (z. B. `empax-website`).
2. Alle Dateien dieses Ordners in den Repository-Root legen (nicht in einen Unterordner).
3. Committen und pushen:

   ```bash
   git init
   git add .
   git commit -m "Empax Website"
   git branch -M main
   git remote add origin https://github.com/<benutzer>/<repo>.git
   git push -u origin main
   ```

4. Im Repository: **Settings → Pages → Source: Deploy from a branch**,
   Branch `main`, Ordner `/ (root)`, speichern.
5. Nach ein bis zwei Minuten ist die Seite unter
   `https://<benutzer>.github.io/<repo>/` erreichbar.

### Eigene Domain

Datei `CNAME` im Root anlegen mit einer Zeile, z. B. `www.empax.ch`,
und beim Domain-Anbieter einen CNAME-Eintrag auf `<benutzer>.github.io` setzen.

## Noch zu ergänzen

Alle offenen Angaben sind im Text **gelb hinterlegt** (CSS-Klasse `placeholder`).
Suchen Sie im Projekt nach `class="placeholder"` und ersetzen Sie:

- Telefonnummer (auch in allen `href="tel:..."`)
- E-Mail-Adressen (`info@`, `taxi@`, `automaten@`)
- Adresse und Öffnungszeiten
- Taxitarife in `taxi.html`
- Kennzahlen in `ueber-uns.html`
- Handelsregister, UID und vertretungsberechtigte Person in `impressum.html`

Wenn alles eingetragen ist, kann die Markierung entfernt werden: in
`assets/css/style.css` den Block `.placeholder { … }` löschen oder auf
`background: none; border: 0;` setzen.

## Hinweise

- Das Kontaktformular arbeitet ohne Server: es öffnet das E-Mail-Programm
  (`mailto:`). Für ein echtes Formular eignen sich Dienste wie Formspree oder
  Netlify Forms.
- Die Schrift **Inter** wird von Google Fonts geladen. Wer das vermeiden will
  (Datenschutz), lädt die Schriftdateien herunter, legt sie unter
  `assets/fonts/` ab und ersetzt den `<link>` im `<head>` durch `@font-face`.
- Die Illustrationen sind Inline-SVG – keine Bilddateien, keine Lizenzfragen.
- Rechtstexte sind ein Gerüst und ersetzen keine Rechtsberatung.
