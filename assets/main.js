'use strict';
(() => {
  const translations = {
    de: {
      navFeatures:'Highlights',navSeasons:'Jahreszeiten',navScreens:'Screenshots',navCTA:'App ansehen ↗',
      heroEyebrow:'DIE MAGIE BEGINNT HIER',heroTitle:'Ein bisschen <em>Magie.</em><br>Für deinen Bildschirm.',
      heroLead:'Entdecke atemberaubende Fantasy-Kunst, lebendige Hintergründe und Kollektionen, die sich mit den Jahreszeiten verändern. Dein nächstes Lieblings-Wallpaper wartet.',
      heroPrimary:'App-Vorschau ansehen',heroSecondary:'Kollektionen entdecken',heroSoon:'Bald verfügbar',heroPlatform:'Für Android entwickelt · iOS-Konzept',heroFloatTop:'Magische Kollektionen',heroFloatTitle:'Winter Dreams',heroFloatBottom:'Fantasie für jede Saison',
      featureKicker:'DIE APP',featureTitle:'Kleine Details.<br><em>Große Wirkung.</em>',featureLead:'Eine kuratierte Welt aus Farbe, Licht und Bewegung – geschaffen, um deinem Smartphone einen unverwechselbaren Look zu geben.',
      feature1Title:'Live statt langweilig',feature1Text:'Atmosphärische Animationen und fantastische Szenen für unterstützte Android-Geräte.',feature2Title:'Entdecke deinen Stil',feature2Text:'Fantasy, Natur, Space, Neon und mehr – übersichtlich in thematischen Welten.',feature3Title:'Alles, was du liebst',feature3Text:'Merke Lieblingsmotive, entdecke Sammlungen und finde deine Kunstwerke wieder.',feature4Title:'Saisonale Highlights',feature4Text:'Von mystischem Halloween bis zur gemütlichen Weihnachtszeit – immer neue Stimmungen.',
      seasonKicker:'SEASONAL WORLDS',seasonTitle:'Sechs Jahreszeiten.<br><em>Unendlich viel Magie.</em>',seasonLead:'Jede Kollektion hat ihren eigenen Look. Das Schloss bleibt unser App-Icon – diese Motive gehören zu den Jahreszeiten.',seasonSelection:'AUSGEWÄHLTE KOLLEKTION',
      shotsKicker:'APP PREVIEW',shotsTitle:'Ein Blick hinein.<br><em>Ohne Kompromisse.</em>',shotsLead:'Fünf Einblicke in das Design. Original-Proportionen, klein dargestellt – zum Vergrößern einfach anklicken.',shotsNote:'Hinweis: Die Abbildungen zeigen Design-Mockups. Verfügbare Funktionen können sich bis zum Release ändern.',shot1:'Startseite',shot2:'Kategorien & Suche',shot3:'Live-Vorschau',shot4:'Jahreszeiten',shot5:'Favoriten & Premium',
      premiumTitle:'Kunst, die bleibt.<br><em>Momente, die leuchten.</em>',premiumLead:'Neben kostenlosen Motiven sind exklusive Kollektionen und animierte Wallpaper per Credits geplant. Du entscheidest, welche Welten du freischalten möchtest.',premiumP1:'Exklusive Fantasy-Kunst',premiumP2:'Thematische Kollektionen',premiumP3:'Transparente Freischaltungen',premiumSoon:'Premium-Shop in Vorbereitung',
      faqTitle:'Noch <em>Fragen?</em>',faqLead:'Die wichtigsten Antworten rund um Live Wallpapers und die geplanten Funktionen.',faq1Q:'Ist die App schon verfügbar?',faq1A:'Die Landingpage zeigt das Designkonzept. Sobald ein offizieller Store-Link vorliegt, wird er hier ergänzt.',faq2Q:'Funktionieren Live-Wallpaper auf Android und iOS?',faq2A:'Android unterstützt echte animierte Live-Wallpaper. Auf iOS gelten andere Systemgrenzen: Bilder können gespeichert und kompatible Live Photos für die manuelle Einrichtung vorbereitet werden.',faq3Q:'Sind alle Wallpaper kostenpflichtig?',faq3A:'Geplant ist eine Auswahl kostenloser Motive sowie optionale Premium-Inhalte per Credits. Konkrete Preise werden in der App vor einem Kauf angezeigt.',faq4Q:'Woher stammen die Kunstwerke?',faq4A:'Das Design und die Motive entstehen unter ArtIsFantasy. Die App wird unter dem Entwicklerbranding Flondy umgesetzt.',
      ctaTitle:'Dein nächster Hintergrund?<br><em>Ein kleines Kunstwerk.</em>',ctaLead:'Entdecke die Welt hinter Live Wallpapers und bleib auf dem Laufenden.',ctaArt:'ArtIsFantasy entdecken',ctaDev:'Flondy Apps ansehen',footerIntro:'Fantasievolle digitale Kunst trifft auf moderne App-Entwicklung.',footerPrivacy:'Datenschutzerklärung',footerImprint:'Impressum',footerDelete:'Konto & Daten löschen',footerContact:'Kontakt',footerTag:'Bring Fantasy to Your Screen ✦',
      legalIntroPrivacy:'Datenschutzerklärung',legalIntroImprint:'Impressum',legalIntroDeletion:'Konto & Daten löschen',legalSubPrivacy:'Informationen zum Datenschutz auf dieser Website und zum geplanten Funktionsumfang der App.',legalSubImprint:'Angaben zum verantwortlichen Anbieter der Website.',legalSubDeletion:'So kannst du Auskunft und Löschung deiner Daten anfordern.'
    },
    en: {
      navFeatures:'Highlights',navSeasons:'Seasons',navScreens:'Screenshots',navCTA:'Explore app ↗',
      heroEyebrow:'THE MAGIC STARTS HERE',heroTitle:'A little <em>magic.</em><br>For your screen.',
      heroLead:'Discover breathtaking fantasy art, captivating backgrounds and collections that change with the seasons. Your next favorite wallpaper is waiting.',
      heroPrimary:'Explore app preview',heroSecondary:'Discover collections',heroSoon:'Coming soon',heroPlatform:'Designed for Android · iOS concept',heroFloatTop:'Magical collections',heroFloatTitle:'Winter Dreams',heroFloatBottom:'A world for every season',
      featureKicker:'THE APP',featureTitle:'Small details.<br><em>Big impact.</em>',featureLead:'A curated world of color, light and motion – designed to give your phone a look all its own.',
      feature1Title:'Make it live',feature1Text:'Atmospheric animations and fantasy scenes for compatible Android devices.',feature2Title:'Find your style',feature2Text:'Fantasy, nature, space, neon and more – beautifully organized into themed worlds.',feature3Title:'Keep what you love',feature3Text:'Save your favorite artwork, discover collections and find your favorites again.',feature4Title:'Seasonal highlights',feature4Text:'From mystical Halloween to cozy Christmas – fresh moods throughout the year.',
      seasonKicker:'SEASONAL WORLDS',seasonTitle:'Six collections.<br><em>Endless magic.</em>',seasonLead:'Each seasonal collection has its own aesthetic. Our castle remains the main app icon – these designs represent the seasons.',seasonSelection:'SELECTED COLLECTION',
      shotsKicker:'APP PREVIEW',shotsTitle:'Take a closer look.<br><em>Perfectly in proportion.</em>',shotsLead:'Five glimpses of the design. Compact previews with correct proportions – click any image to enlarge.',shotsNote:'Note: These images are design mockups. Features may change before release.',shot1:'Home',shot2:'Categories & Search',shot3:'Live Preview',shot4:'Seasons',shot5:'Favorites & Premium',
      premiumTitle:'Art to keep.<br><em>Moments that shine.</em>',premiumLead:'Alongside free artwork, exclusive collections and animated wallpapers are planned as optional credit unlocks. Choose the worlds you love.',premiumP1:'Exclusive fantasy art',premiumP2:'Curated collections',premiumP3:'Transparent unlocks',premiumSoon:'Premium shop in development',
      faqTitle:'Any <em>questions?</em>',faqLead:'A few important answers about Live Wallpapers and its planned features.',faq1Q:'Is the app available yet?',faq1A:'This landing page showcases the design concept. Official store links will be added when available.',faq2Q:'Do live wallpapers work on Android and iOS?',faq2A:'Android supports actual animated live wallpapers. iOS has different system limitations: images can be exported, and compatible Live Photos may be prepared for manual setup.',faq3Q:'Are all wallpapers paid?',faq3A:'A selection of free artwork and optional premium content unlocked with credits is planned. Prices will be shown in the app before any purchase.',faq4Q:'Who creates the artwork?',faq4A:'The artwork and visual world are created under ArtIsFantasy. The app is developed under the Flondy brand.',
      ctaTitle:'Your next wallpaper?<br><em>A little work of art.</em>',ctaLead:'Explore the world behind Live Wallpapers and stay in the loop.',ctaArt:'Explore ArtIsFantasy',ctaDev:'Discover Flondy Apps',footerIntro:'Imaginative digital art meets modern app development.',footerPrivacy:'Privacy Policy',footerImprint:'Legal Notice',footerDelete:'Delete account & data',footerContact:'Contact',footerTag:'Bring Fantasy to Your Screen ✦',
      legalIntroPrivacy:'Privacy Policy',legalIntroImprint:'Legal Notice',legalIntroDeletion:'Delete account & data',legalSubPrivacy:'Information about privacy on this website and the planned app features.',legalSubImprint:'Information about the provider responsible for this website.',legalSubDeletion:'Learn how to request access to or erasure of personal data.'
    }
  };
  const seasonLabels = {
    halloween:{de:['🎃 Halloween – Midnight Magic','Geheimnisvolle Burgen, Kürbislicht und eine Prise Gänsehaut.'],en:['🎃 Halloween – Midnight Magic','Mysterious castles, glowing pumpkins and a touch of spooky magic.']},
    autumn:{de:['🍂 Autumn – Golden Hours','Goldene Wälder, warme Lichter und gemütliche Fantasiewelten.'],en:['🍂 Autumn – Golden Hours','Golden forests, warm lights and cozy fantasy worlds.']},
    winter:{de:['❄️ Winter – Frozen Dreams','Verschneite Königreiche, eisblaue Nächte und das Leuchten der Polarlichter.'],en:['❄️ Winter – Frozen Dreams','Snowy kingdoms, icy blue nights and glowing northern lights.']},
    spring:{de:['🌸 Spring – Blossom Tales','Blütenzauber, neue Farben und frische Landschaften.'],en:['🌸 Spring – Blossom Tales','Blooming magic, fresh colors and spring landscapes.']},
    summer:{de:['☀️ Summer – Paradise Light','Palmen, türkisblaues Wasser und goldene Sonnenuntergänge.'],en:['☀️ Summer – Paradise Light','Palm trees, turquoise waters and golden sunsets.']},
    christmas:{de:['🎄 Christmas – Starlit Wishes','Funkelnde Lichter, Winterdörfer und festliche Magie.'],en:['🎄 Christmas – Starlit Wishes','Twinkling lights, snowy villages and holiday magic.']}
  };
  const qs = new URLSearchParams(location.search);
  let lang = qs.get('lang') === 'en' ? 'en' : 'de';
  let selectedSeason = 'winter';
  const $ = selector => document.querySelector(selector);
  function setLanguage(next, updateUrl=false){
    lang=next;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{let k=el.dataset.i18n;if(translations[lang][k])el.textContent=translations[lang][k];});
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{let k=el.dataset.i18nHtml;if(translations[lang][k])el.innerHTML=translations[lang][k];});
    document.querySelectorAll('[data-lang-panel]').forEach(el=>{el.hidden=el.dataset.langPanel!==lang;});
    document.querySelectorAll('[data-legal-link]').forEach(el=>{const page=el.getAttribute('href').split('?')[0];el.href=page+(lang==='en'?'?lang=en':'');});
    const toggle=$('[data-lang-toggle]');if(toggle){toggle.textContent=lang==='de'?'EN':'DE';toggle.setAttribute('aria-label',lang==='de'?'Switch to English':'Zu Deutsch wechseln');}
    if(updateUrl){const u=new URL(location.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');history.replaceState(null,'',u.pathname+u.search+u.hash);}
    if($('#season-detail-title'))updateSeason(selectedSeason);
  }
  function updateSeason(name){
    if(!seasonLabels[name])return;
    selectedSeason=name;
    document.querySelectorAll('.season-card').forEach(btn=>btn.setAttribute('aria-pressed',String(btn.dataset.season===name)));
    if($('#season-detail-title'))$('#season-detail-title').textContent=seasonLabels[name][lang][0];
    if($('#season-detail-description'))$('#season-detail-description').textContent=seasonLabels[name][lang][1];
    if($('#season-detail-image')){let img=$('#season-detail-image');img.src=`assets/season-${name}-tiny.webp`;img.alt=name;}
  }
  document.querySelectorAll('[data-season]').forEach(btn=>btn.addEventListener('click',()=>updateSeason(btn.dataset.season)));
  document.querySelectorAll('[data-lang-toggle]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(lang==='de'?'en':'de',true)));
  const menu=$('#site-menu'),menuToggle=$('#menu-toggle');
  if(menu&&menuToggle){menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));}
  const scroller=$('#screenshots-scroll');
  if(scroller){$('#gallery-prev')?.addEventListener('click',()=>scroller.scrollBy({left:-225,behavior:'smooth'}));$('#gallery-next')?.addEventListener('click',()=>scroller.scrollBy({left:225,behavior:'smooth'}));}
  const dialog=$('#preview-dialog');
  if(dialog){const image=$('#dialog-image'),caption=$('#dialog-caption');document.querySelectorAll('[data-preview]').forEach(btn=>btn.addEventListener('click',()=>{image.src=btn.dataset.preview;caption.textContent=lang==='de'?btn.dataset.captionDe:btn.dataset.captionEn;dialog.showModal();}));$('#dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});}
  if($('#year'))$('#year').textContent=String(new Date().getFullYear());
  setLanguage(lang);
})();
