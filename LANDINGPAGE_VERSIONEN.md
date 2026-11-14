# Landingpage-Versionsverlauf — ArtIsFantasy × Flondy

Dieses Dokument trennt den **tatsächlichen GitHub-Verlauf** von den im Chat erstellten, eigenständigen ZIP-Versionen. Ein ZIP ist **nicht automatisch ein Git-Commit** und ein historischer Commit darf nicht nachträglich als deployte Version ausgegeben werden.

## Bereits auf GitHub vorhandene Commits

- 25.10.2026: erster Upload.
- 27.10.2026: weitere Dateien, echte App-Screenshots statt Design-Mockups, weitere Korrekturen und Store-Icon.
- 30.10.2026: Impressumsverlinkung.
- 13.11.2026: PayPal, Patreon, Flondy-Linktree und Telegram in der Fußzeile; Google-Play-Link.
- 14.11.2026: ArtIsFantasy-Linktree ergänzt und Google-Play-CTA bestätigt.

Der originale Git-Verlauf bleibt erhalten: https://github.com/Marcel-2025/Live-Wallpapers/commits/main

## Alle Versionen im Git-Verlauf (seit 14.11.2026)

Jede Version liegt jetzt als eigener Commit mit Tag im Verlauf. Autor-Datum = Dateidatum des Originalpakets; der Inhalt ist der unveränderte Paketstand (außer beim V1-Fix).

| Tag | Version | Paket | Wichtigste Änderungen |
| --- | --- | --- | --- |
| `landingpage-v1` | V1 (25.10.) | Live_Wallpapers_Landingpage | Erste Premium-Landingpage, Saisonvorstellung, Rechtstexte |
| `landingpage-v1.1-fix` | V1 Fix (14.11.) | V1 + Fix | Saison-Karte zeigte bei Halloween/Herbst/Frühling/Weihnachten das klassische Schloss – jetzt das passende Saison-Schloss |
| `landingpage-v2` | V2 (27.10.) | Live_Wallpapers_Landingpage_V2 | Schloss-Icon, Screenshot-Galerie, sechs Saisonkollektionen |
| `landingpage-v3` | V3 (29.10.) | V3_1_2_0 | Android 1.2.0, 790 Motive, 27 Live-Wallpaper |
| `landingpage-v3.1` | V3.1 (01.11.) | V3_1_ArtIsFantasy | ArtIsFantasy-Markenprofil und Social-Links |
| `landingpage-v4` | V4 (14.11.) | V4_Seasonal_Experience | Interaktive Saison-Schlösser, Theme-Wechsel |
| `landingpage-v5` | V5 (14.11.) | V5_Classic_Switch | Classic als Start, sieben Designs, große Schloss-Startsektion |
| `landingpage-v5.1` | V5.1 (14.11.) | – | V5 + Google Play und ArtIsFantasy Linktree (Navigation, Startsektion, ArtIsFantasy-Bereich, Abschluss, Fußzeile), Fußzeilen-Links der bisherigen Live-Seite, FAQ auf „App ist live“ aktualisiert |
| `landingpage-v5.2` | V5.2 (14.11.) | – | Saison-Szenen-Hero nach Halloween-Konzept: Deko rundherum je Design (Kürbisse, Mond, Wasserfälle, Schnee, Blüten, Weihnachtsbäume …), Schloss-Karussell, Saison-Titel mit drei Merkmalen, fallende Blätter/Schnee/Blüten und Fledermäuse |
| `landingpage-v5.3` | V5.3 (14.11.) | – | Szenen nach Marcels sechs Konzeptbildern (Halloween, Herbst, Winter, Frühling, Sommer, Weihnachten) – Deko der Konzepte rundherum, Oberfläche echt; Saisontexte aus den Konzepten; kompakter Hero |
| `landingpage-v5.4` | V5.4 (14.11.) | – | **Live-Version:** neues Weihnachts-Konzept (Rentier, Lebkuchen, Hütte, Schlitten vor dem Mond) und Classic-Szene mit Wolken; Saisontexte aus der zweiten Konzeptreihe |

Eine ältere Version ansehen: `git checkout landingpage-v3` (oder auf GitHub den Tag auswählen). Die Commits vor `landingpage-v1` sind der ursprüngliche GitHub-Verlauf und bleiben unverändert.

## Links in der veröffentlichten GitHub-Pages-Version

- [Live Wallpapers bei Google Play](https://play.google.com/store/apps/details?id=dev.flondy.wallpapers)
- [ArtIsFantasy Linktree](https://linktr.ee/artisfantasy)
- [Live Wallpapers Landingpage](https://marcel-2025.github.io/Live-Wallpapers/index.html)

## Künftige Release-Regel

Jede künftige veröffentlichte Website-Version erhält einen eindeutigen Commit mit nachvollziehbarer Beschreibung. Bevor eine neue Vollversion deployed wird, werden Bilddateien und Funktionen vollständig geprüft und vorhandene Rechtstexte/Links übernommen. Releases werden mit Git-Tags (`landingpage-v5.1` usw.) markiert.
