# Live Wallpapers — ArtIsFantasy × Flondy

Premium-Landingpage für **GitHub Pages** mit eigenständigem HTML, CSS, JavaScript und optimierten lokalen Bilddateien. Keine Build-Tools, kein npm, kein externes CDN nötig.

## Dateien

- `index.html` — responsive Landingpage
- `datenschutz.html` — Datenschutzentwurf DE/EN (Landingpage und geplante App)
- `impressum.html` — Impressumsentwurf DE/EN
- `konto-loeschen.html` — Löschanfragen für App-Konten DE/EN
- `assets/styles.css` — komplettes responsives Designsystem
- `assets/main.js` — DE/EN, saisonale Vorschau, Screenshot-Galerie, Mobile-Navigation
- `assets/config.js` — Platz für echte Store-Links
- `assets/*.webp` — optimierte Bilddateien aus dem bisherigen ArtIsFantasy-Design

## Live stellen auf GitHub Pages

1. Ein neues **öffentliches** GitHub-Repository anlegen, etwa `Live-Wallpapers`.
2. Den **Inhalt dieses Ordners** in das Stammverzeichnis des Repositories laden, nicht die ZIP selbst.
3. **Settings → Pages → Build and deployment → Deploy from a branch** aktivieren; Branch `main`, Ordner `/ (root)`.
4. Die ausgegebene Pages-Adresse im Browser öffnen, beispielsweise `https://<dein-benutzername>.github.io/Live-Wallpapers/` (nur ein Beispiel).
5. Nach Prüfung die vollständige Datenschutzerklärungs-URL `.../datenschutz.html` in der Google Play Console eintragen und in der App selbst zugänglich machen.

## Vor der Veröffentlichung UNBEDINGT ergänzen

- **Impressum:** vollständiger bürgerlicher Name, **Straße und Hausnummer** und ggf. weitere rechtlich erforderliche Angaben. Die bekannte Ortsangabe `88605 Meßkirch` reicht allein nicht als ladungsfähige Anschrift.
- **App-Datenschutz:** tatsächliche verwendete SDKs, Cloud-/Backend-Anbieter, Serverstandorte, erfasste Daten, Rechtsgrundlagen, Empfänger, Speicherfristen, Berechtigungen, Kontolöschung, Werbung, Analyse- und Crash-Dienste, Datenübermittlungen und Kaufabwicklung anhand des **fertigen App-Codes** prüfen.
- **Store-Datensicherheit:** Erklärungen müssen dem tatsächlichen Stand des Builds entsprechen. Insbesondere müssen Account-Löschung und Datenschutzangaben tatsächlich in der App zugänglich sein.
- **Funktionen & Claims:** Auf der Website werden Designkonzepte gezeigt, keine bestätigten Live-Screenshots. Nach App-Test Bilder und Texte durch nachweisbare echte App-Screenshots und verfügbare Features ersetzen.
- **Google Play / Apple:** Erst nach Veröffentlichung echte Store-Links in `assets/config.js` ergänzen und die CTA-Texte/Links im HTML darauf umstellen. Aktuell werden absichtlich keine Store-Adressen erfunden.
- **Hosting:** Die Datenschutzerklärung geht von der geplanten Nutzung von GitHub Pages aus. Falls du einen anderen Hoster nutzt, Serverlog-Angaben aktualisieren.
- Die rechtlichen Seiten sind **bearbeitbare Entwürfe, keine geprüften rechtsverbindlichen Texte**.

## Farben und Saison

Die Website zeigt automatisch je nach lokalem Monat Halloween, Herbst, Winter, Frühling, Sommer oder Weihnachten als Voreinstellung. Über die Saison-Chips kannst du die Darstellung testen. Alle Bilder sind lokale Illustrationen, es findet keine Cloud-Generierung im Browser statt.

## Datenschutz der Website

Die ausgelieferte statische Version lädt Bilder, CSS und JavaScript vom eigenen Hosting; keine Analyse-SDKs, Werbe-Cookies, Webfonts oder eingebetteten Social-Media-Widgets. Durch Klick auf externe Links verlässt der Nutzer die Seite. Der Webhoster verarbeitet technisch notwendige Serverlogs.

## Anpassung

Markentexte: `assets/main.js` (DE/EN-Wörterbuch). Medien: `assets/`. Saisonales Artwork und Farben: `seasonData` in `assets/main.js`. Veröffentlichungsstatus und Store-Links: `assets/config.js` und die Call-to-Action-Abschnitte in `index.html`.

## Testen

Du kannst `index.html` direkt im Browser öffnen. Für realitätsnahen GitHub-Pages-Test eignet sich ein lokaler statischer Server:

```bash
python -m http.server 8000
```

Danach `http://localhost:8000` im Browser öffnen.

## Bildquellen

Verwendet werden ausschließlich zuvor in diesem Chat für die ArtIsFantasy-/Live-Wallpapers-App erstellte eigene Konzeptgrafiken. Die Dateien sind für schnellere Auslieferung als WebP optimiert worden.

## Rechtliche Orientierung (offizielle Quellen)

- Google Play User Data: https://support.google.com/googleplay/android-developer/answer/10144311
- Google Play Data safety: https://support.google.com/googleplay/android-developer/answer/10787469
- Apple App Privacy: https://developer.apple.com/app-store/app-privacy-details/
- Deutschland § 5 DDG: https://www.gesetze-im-internet.de/ddg/__5.html
