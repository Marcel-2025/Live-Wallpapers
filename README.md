# Live Wallpapers – Premium Landingpage V3 · App 1.2.0

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


## Screenshot-Anpassung (V2.1)

Die fünf Screenshot-Mockups wurden verlustarm auf ihren tatsächlichen Bildinhalt beschnitten (308 × 917 Pixel). Die störenden Seitenränder und der helle Streifen am unteren Rand sind entfernt. Die Vorschaukarten nutzen jetzt das passende Seitenverhältnis und zeigen die Motive unverzerrt an. Die Galerie-Pfeile folgen der responsiven Kachelbreite. Das betrifft nur die Vorschau dieser Website, nicht die Google-Play-Screenshots.

## Änderungen V3 (29. Oktober 2026)
- Marketing-Angaben anhand der vom Entwickler bereitgestellten Patch Notes vom 25.10.2026 überarbeitet: 790 Wallpaper = 763 HD + 27 Live, 78 Kategorien, 27 Kollektionen, Android App v1.2.0 / versionCode 13.
- Neues Statistik-Grid, vier Katalogwelten, Hinweise zum On-Demand-Nachladen der Medien.
- Credits: 4 Google-Play-Pakete, Premium-Abo monatlich/jährlich; keine erfundenen Preise.
- Korrekte Statusangaben: Built + automatisierte Tests, aber **kein bestätigter Gerätetest und keine vollständige Play-Test-Verifizierung**. Kein erfundener öffentlicher Store-Link.
- FAQ: rein lokales Profil, mögliches Datenverlustrisiko bei Deinstallation, 22 PAD-Pakete.
- Datenschutz- und Löschseiten um aktuellen Implementierungsstand ergänzt, weitere Abschnitte weiterhin als Audit-Vorlage.
- **WICHTIG:** Die 5 Galerie-Bilder sind weiterhin Design-Mockups, nicht die neuen echten Store-Screenshots der App 1.2.0. Ersetze sie durch die tatsächlich im App-Projekt erzeugten Store-Screenshots, sobald die Dateien vorliegen.
- Die aus V2.1 korrigierte schmale, unverzerrte Screenshot-Galerie ist unverändert erhalten.

## Vor dem Release kritisch prüfen
1. Auf echtem Android-Gerät Live-Wallpaper, Downloads, Wechsel/Verwaltung, Billing, Abo und alle 22 Play-Asset-Delivery-Pakete testen.
2. **Kaufprüfung:** ausschließlich clientseitige Verifizierung mit öffentlichem Google-Play-Schlüssel schützt einen lokalen Credit-Ledger nicht zuverlässig gegen manipulierte Clients. Für verlässliche Entitlements serverseitige Google Play Developer API mit Backend bzw. geeignete Backend-Verifizierung evaluieren. Keine Veröffentlichung mit unzureichendem Betrugsschutz als 'sicher' anpreisen.
3. App-Datenschutz und Impressum durch echte Manifest-, SDK-, Google-Play- und Hosting-Prüfung finalisieren. Vollständige ladungsfähige Anschrift fehlt.
4. Echte Play-Store-Links und aktuelle, tatsächlich aus dem Build aufgenommene Screenshots nach Freigabe hinterlegen.
