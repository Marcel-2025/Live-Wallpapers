# Live Wallpapers – Premium Landingpage V2

**ArtIsFantasy × Flondy** — eigenständige statische Website für GitHub Pages (HTML/CSS/JavaScript, keine Build-Tools).

## Start
- `index.html` lokal im Browser öffnen; alle Dateien relativ lassen.
- Für GitHub Pages **den Inhalt dieses Ordners** ins Repository-Root hochladen, unter **Settings → Pages** `main / (root)` aktivieren.
- Oder gesamten Ordner auf einen beliebigen statischen Webhost laden.

## Aufbau
- `index.html` – Landingpage mit fixem Schloss-App-Icon (goldener Sichelmond), 6 auswählbaren Saison-Kollektionen, kleiner 9:16 Screenshot-Galerie, Lightbox, Credits-/Premium-Erklärung, FAQ, DE/EN-Umschaltung.
- `assets/styles.css` – responsives Premium-Design; Screenshots werden niemals gestreckt (`aspect-ratio: 9/16`, `object-fit: contain`, max. 190 px Breite auf Desktop, 156 px auf Mobile).
- `assets/main.js` – Sprache in `?lang=en`, Kategorienauswahl, Bildvorschau, Slider, Mobile-Menü. Kein lokales Storage und kein Analytics-SDK.
- `datenschutz.html`, `impressum.html`, `konto-loeschen.html` – bilinguale Rechtstexte **als zu prüfende Vorlagen**.
- `assets/icon-castle.png` – offizielles Icon auf dieser Website.
- `assets/season-*.webp` – saisonale Kategorie-Icons, **nicht** als Haupt-Icon verwendet.
- `assets/screenshot-01.webp` bis `-05.webp` – Bild-Mockups, keine echten Build-Screenshots.

## Vor der Veröffentlichung
1. Vollständige ladungsfähige Anschrift und vollständigen Namen im Impressum und Datenschutz ergänzen. Die Vorlagen nicht ungeprüft veröffentlichen.
2. App-Datenschutzerklärung anhand des **echten Builds** anpassen: SDKs, Berechtigungen, Hosting, Konten, Credits, Käufe, Datenexporte, Aufbewahrungsfristen.
3. Wenn die App bereits veröffentlicht ist: „Coming soon“ anpassen und echte Store-Links ergänzen.
4. App-Vorschau nicht als echten Screenshot ausgeben. Bei Store-Material echte, funktionsgetreue Screenshots verwenden.
5. Verfügbarkeit von Live Wallpapers auf iOS nicht Android gleichsetzen.

## Bilder
- Screenshot-Bilddateien sind von 1080×1920 proportionserhaltend auf 540×960 reduziert; das spart Bandbreite und erhält 9:16. Die Website hat eine Vergrößerungsansicht.
- Farbpalette: Midnight Blue, Violett, Lavendel, Gold, Cyan.
- Alle Bilder, Fonts, CSS, JS lokal. Keine Drittanbieter-Skripte, Werbetracker, Cookies oder Analytics in dieser Version. HTTP-Serverlogs des gewählten Hosts sind separat zu beachten.

Kontakt: flondy.dev@gmail.com
