'use strict';
(() => {
  const translations = {
    de: {
      experienceEyebrow:'DYNAMIC SEASONS',experienceTitle:'Eine neue Atmosphäre. <em>Jede Jahreszeit.</em>',experienceLead:'Das Erscheinungsbild und ausgewählte Empfehlungen verändern sich passend zur Saison. Dein Lieblingsdesign bleibt jederzeit auswählbar.',experienceSelection:'VOLLES SAISON-ERLEBNIS',experienceFeature1:'Wechselndes Design',experienceFeature1Text:'Der gesamte Look passt sich der Saison an.',experienceFeature2:'Saisonale Effekte',experienceFeature2Text:'Farben, Animationen und Atmosphäre.',experienceFeature3:'Passende Live-Wallpaper',experienceFeature3Text:'Entdecke die Magie aller Jahreszeiten.',experiencePrimary:'Premium entdecken',experienceSecondary:'App-Vorschau ansehen',experienceTip:'Wähle ein Design und erlebe die Designvorschau.',
      navFeatures:'Funktionen',navSeasons:'Jahreszeiten',navScreens:'Einblicke',navCTA:'Bei Google Play',playCTA:'Bei Google Play laden',linktreeCTA:'ArtIsFantasy Linktree',socialLinktree:'Alle ArtIsFantasy-Links',
      heroEyebrow:'DIE MAGIE BEGINNT HIER',heroTitle:'Ein bisschen <em>Magie.</em><br>Für deinen Bildschirm.',
      heroLead:'790 handverlesene Wallpaper – darunter 27 animierte Live-Hintergründe. Erkunde Fantasy-Welten, Kosmos, Natur und alle Jahreszeiten in 78 Kategorien.',
      heroPrimary:'App-Vorschau ansehen',heroSecondary:'Kollektionen entdecken',heroSoon:'Android 1.2.0 · Veröffentlichung in Vorbereitung',heroPlatform:'Build erstellt & automatisch getestet · Gerätetest steht aus',heroFloatTop:'Kuratierte Kollektionen',heroFloatTitle:'Winter Dreams',heroFloatBottom:'Fantasie für jede Saison',
      featureKicker:'DIE APP',featureTitle:'Kleine Details.<br><em>Große Wirkung.</em>',featureLead:'Eine kuratierte Welt aus Farbe, Licht und Bewegung – geschaffen, um deinem Smartphone einen unverwechselbaren Look zu geben.',
      feature1Title:'Live statt langweilig',feature1Text:'Atmosphärische Animationen und fantastische Szenen für unterstützte Android-Geräte.',feature2Title:'Entdecke deinen Stil',feature2Text:'78 befüllte Kategorien – von Fantasy und AMOLED bis Autos, Anime-Stil, Tieren und Natur.',feature3Title:'Alles, was du liebst',feature3Text:'Favoriten, persönliche Kollektionen, Downloads und Freischaltungen bleiben lokal auf deinem Gerät.',feature4Title:'Saisonale Highlights',feature4Text:'Sieben wählbare App-Designs inklusive Classic und sechs Saisons – auf Wunsch automatisch passend zum Datum.',
      stat1:'Wallpaper insgesamt',stat2:'HD-Hintergrundbilder',stat3:'animierte Live-Wallpaper',stat4:'befüllte Kategorien',stat5:'kuratierte Kollektionen',
      catalogKicker:'KATALOG 1.2.0',catalogTitle:'Mehr Welten.<br><em>Mehr zum Entdecken.</em>',catalogLead:'Entdecke vielfältige neue Themen – von verträumten Winterabenden bis zu futuristischen Maschinen.',cat1Title:'Fantasy & Magie',cat1Text:'Märchenschlösser, magische Kreaturen und fantastische Abenteuerwelten.',cat1Pill:'Fantasy · Helden · Mystik',cat2Title:'Kosmos & Ästhetik',cat2Text:'Sternenhimmel, abstrakte Kunst, AMOLED-Motive und leuchtende Digital Art.',cat2Pill:'Space · AMOLED · Digital Art',cat3Title:'Fahrzeuge & Technik',cat3Text:'Sportwagen, Motorräder, Rennsport, futuristische Maschinen und Technik.',cat3Pill:'JDM · Racing · Maschinen',cat4Title:'Natur & Emotion',cat4Text:'Tierwelt, Naturpanoramen, stimmungsvolle Szenen und Landschaften.',cat4Pill:'Natur · Tiere · Stimmungen',deliveryTitle:'HD-Qualität bei Bedarf.',deliveryText:'Die Android-App enthält zunächst Vorschaubilder. HD-Originale und Live-Videos werden bei Bedarf über Google Play nachgeladen. Die Play-Asset-Delivery-Funktion wird noch im internen Test geprüft.',
      seasonKicker:'SEASONAL WORLDS',seasonTitle:'Sechs Jahreszeiten.<br><em>Unendlich viel Magie.</em>',seasonLead:'Jede Kollektion hat ihren eigenen Look. Das Schloss bleibt unser App-Icon – diese Motive gehören zu den Jahreszeiten.',seasonSelection:'AUSGEWÄHLTE KOLLEKTION',
      shotsKicker:'APP PREVIEW',shotsTitle:'Mehr Einblicke.<br><em>Mehr Magie.</em>',shotsLead:'Sieben Premium-Screenshots zeigen Startseite, Einzelmotiv, Kollektion, Live-Bereich, Suche, Entdecken und Design. Beim Sprachwechsel passen sich auch die Screenshots an.',shotsNote:'Hinweis: Die Bilder sind hochwertige Design-Mockups der geplanten App-Oberfläche. Beim Sprachwechsel wird automatisch die passende deutsche oder englische Version angezeigt.',shot1:'Startseite',shot2:'Vorschau & Festlegen',shot3:'Kollektion',shot4:'Live-Wallpaper',shot5:'Suche & Vorschläge',shot6:'Entdecken',shot7:'Design & Themen',
      premiumTitle:'Kunst, die bleibt.<br><em>Momente, die leuchten.</em>',premiumLead:'Wähle einzelne Kunstwerke über Credits oder nutze Premium als monatliches oder jährliches Abo. Im Android-Release-Build ist Google Play Billing integriert; echte Käufe müssen noch im Play-Test geprüft werden.',premiumP1:'Einzelne Motive dauerhaft freischalten',premiumP2:'Premium-Abo mit Zugriff auf alle Motive',premiumP3:'Vier Credit-Pakete in Google Play',premiumSoon:'Kaufabwicklung integriert · Live-Test ausstehend',
      faqTitle:'Noch <em>Fragen?</em>',faqLead:'Antworten zu Android, Käufen, Downloads und dem aktuellen Entwicklungsstand.',faq1Q:'Ist die App schon verfügbar?',faq1A:'Ja. Live Wallpapers gibt es für Android bei Google Play. Den Link findest du oben auf dieser Seite.',faq2Q:'Funktionieren Live-Wallpaper auf Android und iOS?',faq2A:'Die hier beschriebene Version 1.2.0 ist eine Android-App mit Live-Wallpaper-Dienst. Eine vergleichbare iOS-App ist derzeit nicht als fertiger Build dokumentiert.',faq3Q:'Sind alle Wallpaper kostenpflichtig?',faq3A:'Nein. Viele Motive kannst du direkt nutzen. Zusätzlich gibt es vier Credit-Pakete und ein Premium-Abo (monatlich oder jährlich). Preise zeigt Google Play an.',faq4Q:'Woher stammen die Kunstwerke?',faq4A:'ArtIsFantasy gestaltet KI-generierte digitale Kunst und Fantasy-Motive. Flondy entwickelt die Android-App, mit der diese Werke als Wallpaper erlebbar werden.',faq5Q:'Was passiert mit Credits beim Deinstallieren?',faq5A:'Profil, Credit-Guthaben und Freischaltungen werden in Version 1.2.0 lokal verwaltet. Nach einer Deinstallation können diese lokalen Daten verloren gehen. Das Abo wird separat über Google Play verwaltet; eine vollständige Wiederherstellung aller lokalen Freischaltungen ist nicht bestätigt.',faq6Q:'Muss ich alle HD-Dateien sofort herunterladen?',faq6A:'Nein. HD-Bilder und Live-Videos sind in Asset-Pakete aufgeteilt, die Google Play bei der Installation mitliefert. Du musst nichts separat herunterladen.',
      aboutTitle:'ArtIsFantasy.<br><em>Wo Fantasie auf KI trifft.</em>',aboutIntro:'Entdecke KI-generierte Kunst mit magischen Fantasy-Welten, verträumten Landschaften, mythischen Kreaturen und gemütlichen Wintermotiven.',aboutDetails:'ArtIsFantasy erschafft digitale Kunst, KI-Animationen, Shorts und entspannende Ambiente-Videos. Flondy bringt ausgewählte Motive mit Live Wallpapers auf dein Android-Gerät.',aboutP1:'✦ Fantasy & digitale Kunst',aboutP2:'✦ Magische Welten & Landschaften',aboutP3:'✦ Mythische Kreaturen',aboutP4:'✦ Saisonale Ästhetik',aboutP5:'✦ KI-Animationen & Shorts',aboutP6:'✦ Entspannende Ambiente-Videos',communityTitle:'Werde Teil der ArtIsFantasy-Community',communityLead:'Folge neuen Kunstwerken, Reels und Fantasy-Welten auf deinen Lieblingsplattformen.',socialDeviant:'Galerie & exklusive Kunst',socialInstagram:'Kunst, Reels & Highlights',socialTiktok:'Fantasy-Clips & Shorts',socialFacebook:'Bilder & Community',supportMessage:'Unterstütze die kreative Arbeit: Exklusive Kunstwerke und VIP-Mitgliedschaften gibt es auf DeviantArt.',
      ctaTitle:'Dein nächster Hintergrund?<br><em>Ein kleines Kunstwerk.</em>',ctaLead:'Android · 790 Wallpaper. Jetzt bei Google Play laden und unsere Kunst entdecken.',ctaArt:'ArtIsFantasy entdecken',ctaDev:'Flondy Apps ansehen',footerIntro:'AI-generierte Fantasy-Kunst von ArtIsFantasy trifft auf App-Entwicklung von Flondy.',footerPrivacy:'Datenschutzerklärung',footerImprint:'Impressum',footerDelete:'Konto & Daten löschen',footerContact:'Kontakt',footerTag:'Bring Fantasy to Your Screen ✦',
      legalIntroPrivacy:'Datenschutzerklärung',legalIntroImprint:'Impressum',legalIntroDeletion:'Konto & Daten löschen',legalSubPrivacy:'Informationen zum Datenschutz auf dieser Website und zum geplanten Funktionsumfang der App.',legalSubImprint:'Angaben zum verantwortlichen Anbieter der Website.',legalSubDeletion:'So kannst du Auskunft und Löschung deiner Daten anfordern.'
    },
    en: {
      experienceEyebrow:'DYNAMIC SEASONS',experienceTitle:'A new atmosphere. <em>Every season.</em>',experienceLead:'The appearance and featured collections change with your chosen season. Your favorite design is always just one click away.',experienceSelection:'THE FULL SEASONAL EXPERIENCE',experienceFeature1:'Dynamic design',experienceFeature1Text:'The entire look adapts to your selected season.',experienceFeature2:'Seasonal effects',experienceFeature2Text:'Distinct colors, subtle animations and atmosphere.',experienceFeature3:'Matching live wallpapers',experienceFeature3Text:'Discover the magic of every season.',experiencePrimary:'Explore Premium',experienceSecondary:'Explore app preview',experienceTip:'Choose a design to experience the seasonal preview.',
      navFeatures:'Features',navSeasons:'Seasons',navScreens:'Previews',navCTA:'Get it on Google Play',playCTA:'Get it on Google Play',linktreeCTA:'ArtIsFantasy Linktree',socialLinktree:'All ArtIsFantasy links',
      heroEyebrow:'THE MAGIC STARTS HERE',heroTitle:'A little <em>magic.</em><br>For your screen.',
      heroLead:'Discover 790 curated wallpapers, including 27 animated live backgrounds. Explore fantasy, space, nature, and seasonal worlds across 78 categories.',
      heroPrimary:'Explore app preview',heroSecondary:'Discover collections',heroSoon:'Android 1.2.0 · Release in preparation',heroPlatform:'Built & automated tests passed · Device testing pending',heroFloatTop:'Curated collections',heroFloatTitle:'Winter Dreams',heroFloatBottom:'A world for every season',
      featureKicker:'THE APP',featureTitle:'Small details.<br><em>Big impact.</em>',featureLead:'A curated world of color, light and motion – designed to give your phone a look all its own.',
      feature1Title:'Make it live',feature1Text:'Atmospheric animations and fantasy scenes for compatible Android devices.',feature2Title:'Find your style',feature2Text:'78 populated categories, from fantasy and AMOLED to cars, anime-inspired art, animals and nature.',feature3Title:'Keep what you love',feature3Text:'Favorites, custom collections, downloads and unlocks are stored locally on your device.',feature4Title:'Seasonal highlights',feature4Text:'Seven selectable themes including Classic and six seasons – with optional automatic seasonal switching.',
      stat1:'total wallpapers',stat2:'HD wallpapers',stat3:'animated live wallpapers',stat4:'populated categories',stat5:'curated collections',
      catalogKicker:'CATALOG 1.2.0',catalogTitle:'More worlds.<br><em>More to discover.</em>',catalogLead:'Explore diverse new themes – from dreamy winter evenings to futuristic machinery.',cat1Title:'Fantasy & Magic',cat1Text:'Fairytale castles, magical creatures and spectacular imaginary worlds.',cat1Pill:'Fantasy · Heroes · Mystery',cat2Title:'Space & Aesthetics',cat2Text:'Stars, abstract art, AMOLED themes and glowing digital artwork.',cat2Pill:'Space · AMOLED · Digital Art',cat3Title:'Vehicles & Tech',cat3Text:'Sports cars, motorcycles, racing, futuristic vehicles and technology.',cat3Pill:'JDM · Racing · Machines',cat4Title:'Nature & Mood',cat4Text:'Animals, panoramic landscapes, peaceful moments and atmospheric scenes.',cat4Pill:'Nature · Animals · Moods',deliveryTitle:'HD quality, on demand.',deliveryText:'The Android app includes previews first. HD originals and live videos are downloaded on demand via Google Play. Play Asset Delivery still needs verification in internal testing.',
      seasonKicker:'SEASONAL WORLDS',seasonTitle:'Six collections.<br><em>Endless magic.</em>',seasonLead:'Each seasonal collection has its own aesthetic. Our castle remains the main app icon – these designs represent the seasons.',seasonSelection:'SELECTED COLLECTION',
      shotsKicker:'APP PREVIEW',shotsTitle:'More previews.<br><em>More magic.</em>',shotsLead:'Seven premium screenshots show Home, single artwork, collection, live section, search, explore and theme settings. The screenshot language also changes with the site language.',shotsNote:'Note: These are premium design mockups of the planned app interface. Switching languages automatically shows the matching German or English screenshots.',shot1:'Home',shot2:'Preview & Set',shot3:'Collection',shot4:'Live Wallpapers',shot5:'Search & Suggestions',shot6:'Explore',shot7:'Theme & Design',
      premiumTitle:'Art to keep.<br><em>Moments that shine.</em>',premiumLead:'Unlock individual artworks with Credits or choose Premium with a monthly or annual subscription. Google Play Billing is integrated in the Android release build; real purchases have yet to be tested through Google Play.',premiumP1:'Permanent single-artwork unlocks',premiumP2:'Premium subscription for full access',premiumP3:'Four Google Play Credit packs',premiumSoon:'Payment flow implemented · Live tests pending',
      faqTitle:'Any <em>questions?</em>',faqLead:'Answers about Android, purchases, downloads and the current development stage.',faq1Q:'Is the app available yet?',faq1A:'Yes. Live Wallpapers is available for Android on Google Play. Use the button at the top of this page.',faq2Q:'Do live wallpapers work on Android and iOS?',faq2A:'Version 1.2.0 described here is an Android app with a live wallpaper service. A corresponding finished iOS build is not documented.',faq3Q:'Are all wallpapers paid?',faq3A:'No. Many wallpapers are ready to use. There are also four Credit packs and a monthly or annual Premium subscription. Prices are shown by Google Play.',faq4Q:'Who creates the artwork?',faq4A:'ArtIsFantasy creates AI-generated fantasy and digital artwork. Flondy develops the Android app that brings selected artworks to your screen.',faq5Q:'What happens to Credits if I uninstall?',faq5A:'Version 1.2.0 stores your profile, Credits and unlocks locally. Uninstalling can cause these local data to be lost. Subscriptions are managed separately in Google Play; complete restoration of all local unlocks is not confirmed.',faq6Q:'Do I need to download all HD files right away?',faq6A:'No. HD images and live videos are split into asset packs that Google Play delivers with the installation. Nothing needs to be downloaded separately.',
      aboutTitle:'ArtIsFantasy.<br><em>Where Imagination Meets AI.</em>',aboutIntro:'Discover AI-generated digital art, magical fantasy worlds, dreamy landscapes, mythical creatures and cozy winter scenes.',aboutDetails:'ArtIsFantasy creates digital fantasy art, AI animations, shorts and relaxing ambience videos. Flondy brings selected works to Android through Live Wallpapers.',aboutP1:'✦ AI Art & Digital Fantasy',aboutP2:'✦ Magical Worlds & Landscapes',aboutP3:'✦ Mythical Creatures',aboutP4:'✦ Cozy & Seasonal Aesthetics',aboutP5:'✦ AI Animations & Shorts',aboutP6:'✦ Relaxing Ambience Videos',communityTitle:'Join the ArtIsFantasy Community',communityLead:'Explore new creations, reels and fantasy worlds on your favorite platforms.',socialDeviant:'Gallery & exclusive artwork',socialInstagram:'Artwork, reels & highlights',socialTiktok:'Fantasy clips & shorts',socialFacebook:'Art & community',supportMessage:'Support the creative journey: Discover exclusive artwork and VIP memberships on DeviantArt.',
      ctaTitle:'Your next wallpaper?<br><em>A little work of art.</em>',ctaLead:'Android · 790 wallpapers. Get it on Google Play and explore our art.',ctaArt:'Explore ArtIsFantasy',ctaDev:'Discover Flondy Apps',footerIntro:'AI-generated fantasy artwork by ArtIsFantasy meets app development by Flondy.',footerPrivacy:'Privacy Policy',footerImprint:'Legal Notice',footerDelete:'Delete account & data',footerContact:'Contact',footerTag:'Bring Fantasy to Your Screen ✦',
      legalIntroPrivacy:'Privacy Policy',legalIntroImprint:'Legal Notice',legalIntroDeletion:'Delete account & data',legalSubPrivacy:'Information about privacy on this website and the planned app features.',legalSubImprint:'Information about the provider responsible for this website.',legalSubDeletion:'Learn how to request access to or erasure of personal data.'
    }
  };
  const seasonLabels = {
    classic:{emoji:'🏰',title:'Classic',de:'Das klassische Fantasy-Schloss in Violett, Blau und Gold.',en:'The signature fantasy castle in violet, blue and gold.',particle:['✦','✧','✦']},
    halloween:{emoji:'🎃',title:'Halloween',de:'Geheimnisvolle Welten, magische Nächte und leuchtende Kürbisse.',en:'Mysterious worlds, enchanted nights and glowing pumpkins.',particle:['🦇','🍂','✦','🦇','🍁']},
    autumn:{emoji:'🍂',title:'Autumn',de:'Goldene Wälder, warme Abendstimmung und magische Herbstwelten.',en:'Golden forests, warm evening light and magical autumn worlds.',particle:['🍂','🍁','🍂','✦']},
    winter:{emoji:'❄️',title:'Winter',de:'Eine magische Winterwelt mit funkelnden Landschaften, Nordlichtern und kristallklarer Schönheit.',en:'A magical winter world with sparkling landscapes, northern lights and crystal-clear beauty.',particle:['❄','✦','❅','❆']},
    spring:{emoji:'🌸',title:'Spring',de:'Blühende Landschaften, zarte Blüten und eine frische, romantische Atmosphäre.',en:'Blooming landscapes, delicate blossoms and a fresh, romantic atmosphere.',particle:['🌸','✿','🌸','✦']},
    summer:{emoji:'☀️',title:'Summer',de:'Sonnige Welten, blühende Landschaften und kristallklares Wasser.',en:'Sunny worlds, blooming landscapes and crystal-clear water.',particle:['✦','✧','🦋','✦']},
    christmas:{emoji:'🎄',title:'Christmas',de:'Eine magische Winterwelt voller Lichter, Schnee und festlicher Stimmung.',en:'A magical winter world full of lights, snow and festive spirit.',particle:['❄','✧','✦','❅']}
  };
  const seasonOrder = ['classic','halloween','autumn','winter','spring','summer','christmas'];
  const seasonCarouselOrder = ['classic','halloween','autumn','winter','spring','summer','christmas'];
  const seasonImage = (name,size='full') => `assets/castle-${name}-${size}.webp`;
  const seasonAmbient = name => (window.matchMedia('(max-width: 820px)').matches ? `assets/castle-${name}-ambient.webp` : `assets/scene-${name}.webp`);
  let lastBackdropSeason=null;
  let backdropIndex=0;
  const qs = new URLSearchParams(location.search);
  let lang = qs.get('lang') === 'en' ? 'en' : 'de';
  let selectedSeason = (() => {try{const p=new URLSearchParams(location.search).get('season');if(seasonOrder.includes(p))return p;const saved=localStorage.getItem('artisfantasy-season-v5');return seasonOrder.includes(saved)?saved:'classic';}catch(_){return 'classic';}})();
  const $ = selector => document.querySelector(selector);

  const screenshotData = {
    de:[
      {src:'assets/screenshot-de-01.webp', caption:'Startseite', alt:'Startseite der Live Wallpapers App'},
      {src:'assets/screenshot-de-02.webp', caption:'Vorschau & Festlegen', alt:'Einzelmotiv mit Vorschau und Freischaltung'},
      {src:'assets/screenshot-de-03.webp', caption:'Kollektion', alt:'Kollektion mit mehreren Weihnachtsmotiven'},
      {src:'assets/screenshot-de-04.webp', caption:'Live-Wallpaper', alt:'Live-Wallpaper Übersicht'},
      {src:'assets/screenshot-de-05.webp', caption:'Suche & Vorschläge', alt:'Suche mit Vorschlägen'},
      {src:'assets/screenshot-de-06.webp', caption:'Entdecken', alt:'Kategorien und Entdecken Bereich'},
      {src:'assets/screenshot-de-07.webp', caption:'Design & Themen', alt:'Design und Themen Auswahl'}
    ],
    en:[
      {src:'assets/screenshot-en-01.webp', caption:'Home', alt:'Live Wallpapers app home screen'},
      {src:'assets/screenshot-en-02.webp', caption:'Preview & Set', alt:'Single artwork with preview and unlock actions'},
      {src:'assets/screenshot-en-03.webp', caption:'Collection', alt:'Collection screen with multiple Christmas artworks'},
      {src:'assets/screenshot-en-04.webp', caption:'Live Wallpapers', alt:'Live wallpaper overview'},
      {src:'assets/screenshot-en-05.webp', caption:'Search & Suggestions', alt:'Search view with suggestions'},
      {src:'assets/screenshot-en-06.webp', caption:'Explore', alt:'Categories and explore view'},
      {src:'assets/screenshot-en-07.webp', caption:'Theme & Design', alt:'Theme and design selection screen'}
    ]
  };
  function updateScreenshots(){
    const items=document.querySelectorAll('.screen-item');
    items.forEach((btn,idx)=>{
      const data=screenshotData[lang][idx];
      if(!data)return;
      btn.dataset.preview=data.src;
      btn.dataset.captionDe=screenshotData.de[idx].caption;
      btn.dataset.captionEn=screenshotData.en[idx].caption;
      btn.setAttribute('aria-label', `Screenshot ${data.caption} ${lang==='de'?'vergrößern':'enlarge'}`);
      const img=btn.querySelector('img');
      if(img){img.src=data.src;img.alt=data.alt;}
      const label=btn.querySelector('[data-shot-label]');
      if(label)label.textContent=data.caption;
    });
  }
  function setLanguage(next, updateUrl=false){
    lang=next;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{let k=el.dataset.i18n;if(translations[lang][k])el.textContent=translations[lang][k];});
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{let k=el.dataset.i18nHtml;if(translations[lang][k])el.innerHTML=translations[lang][k];});
    document.querySelectorAll('[data-lang-panel]').forEach(el=>{el.hidden=el.dataset.langPanel!==lang;});
    document.querySelectorAll('[data-legal-link]').forEach(el=>{const page=el.getAttribute('href').split('?')[0];el.href=page+(lang==='en'?'?lang=en':'');});
    const toggle=$('[data-lang-toggle]');if(toggle){toggle.textContent=lang==='de'?'EN':'DE';toggle.setAttribute('aria-label',lang==='de'?'Switch to English':'Zu Deutsch wechseln');}
    if(updateUrl){try{const u=new URL(location.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');if(location.protocol==='http:'||location.protocol==='https:')history.replaceState(null,'',u.pathname+u.search+u.hash);}catch(_){/* local-file preview */}}
    updateScreenshots();
    if($('#experience-season-title'))updateSeason(selectedSeason);
  }
  function setBackdrop(name){
    if(name===lastBackdropSeason)return;
    const first=$('#season-bg-a'),second=$('#season-bg-b');
    if(!first||!second)return;
    if(lastBackdropSeason===null){first.style.backgroundImage=`url('${seasonAmbient(name)}')`;first.classList.add('visible');second.classList.remove('visible');}
    else{
      const current=backdropIndex===0?first:second;
      const next=backdropIndex===0?second:first;
      next.style.backgroundImage=`url('${seasonAmbient(name)}')`;
      next.classList.add('visible');current.classList.remove('visible');
      backdropIndex=1-backdropIndex;
    }
    lastBackdropSeason=name;
  }
  try{const mq=window.matchMedia('(max-width: 820px)');const onMq=()=>{const s=lastBackdropSeason;if(!s)return;lastBackdropSeason=null;setBackdrop(s);};mq.addEventListener?mq.addEventListener('change',onMq):mq.addListener(onMq);}catch(_){}
  function renderSeasonParticles(name){
    const container=$('#season-particles');if(!container)return;
    container.replaceChildren();
    // Stable positions avoid flashing/random jumps during language changes.
    const codes=[].concat(seasonLabels[name].particle);
    for(let i=0;i<22;i++){
      const item=document.createElement('span');item.className='season-particle';item.textContent=codes[i%codes.length];item.dataset.kind=codes[i%codes.length];
      item.style.left=`${(i*47+11)%97}%`;item.style.top=`${(i*23+7)%82}%`;
      item.style.animationDelay=`-${(i*1.7).toFixed(1)}s`;item.style.animationDuration=`${8+(i%5)*2}s`;
      item.style.fontSize=`${9+(i%4)*5}px`;container.append(item);
    }
  }
  function renderSeasonCarousel(name){
    const selected=seasonCarouselOrder.indexOf(name);
    document.querySelectorAll('.experience-icon').forEach(button=>{
      const slot=Number(button.dataset.slot);
      const season=seasonCarouselOrder[(selected+slot+seasonCarouselOrder.length)%seasonCarouselOrder.length];
      const data=seasonLabels[season];
      const img=button.querySelector('img');
      const source=seasonImage(season,slot===0?'full':'small');
      if(img.getAttribute('src')!==source)img.src=source;
      img.alt=`${data.title} – Fantasy castle app icon`;
      button.dataset.iconSeason=season;
      button.classList.toggle('active',slot===0);
      button.setAttribute('aria-label',`${data.emoji} ${data.title} ${lang==='de'?'auswählen':'select'}`);
      button.setAttribute('aria-pressed',String(slot===0));
    });
  }
  function swapCenterIcon(name, animate){
    const img=document.querySelector('[data-theme-large-icon]');
    if(!img)return;
    const src=seasonImage(name,'full');
    if(img.getAttribute('src')===src)return;
    const frame=img.closest('.v5-icon-shell');
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(animate && !reduced && frame && img.complete && img.naturalWidth){
      frame.querySelectorAll('.icon-crossfade-old').forEach(e=>e.remove());
      const old=img.cloneNode();
      old.removeAttribute('id');old.removeAttribute('data-theme-large-icon');
      old.classList.add('icon-crossfade-old');old.setAttribute('aria-hidden','true');
      frame.append(old);
      requestAnimationFrame(()=>requestAnimationFrame(()=>old.classList.add('fade-away')));
      old.addEventListener('transitionend',()=>old.remove(),{once:true});
      setTimeout(()=>old.remove(),700);
    }
    img.src=src;
  }
  function updateSeason(name,userInitiated=false){
    if(!seasonLabels[name])return;
    const changed=selectedSeason!==name||lastBackdropSeason===null;
    selectedSeason=name;
    document.body.dataset.activeSeason=name;
    const data=seasonLabels[name];
    document.querySelectorAll('[data-season]').forEach(btn=>{
      const active=btn.dataset.season===name;
      btn.setAttribute('aria-selected',String(active));
      btn.setAttribute('aria-pressed',String(active));
      btn.tabIndex=active?0:-1;
    });
    const label=$('#experience-season-title');if(label)label.textContent=`${data.emoji} ${data.title}`;
    const description=$('#experience-season-description');if(description)description.textContent=data[lang];
    const icon=document.querySelector('[data-theme-large-icon]');
    if(icon)icon.alt=`${data.title}: fantasy castle seasonal app icon`;
    if(changed){setBackdrop(name);renderSeasonParticles(name);}
    const decorLeft=$('#season-decor-left'),decorRight=$('#season-decor-right');
    if(decorLeft)decorLeft.textContent=data.emoji;
    if(decorRight)decorRight.textContent= name==='halloween'?'🦇':name==='autumn'?'🍁':name==='winter'?'❄':name==='spring'?'🌸':name==='summer'?'☀':'✦';
    document.querySelectorAll('[data-theme-logo]').forEach(img=>{const path=seasonImage(name,'small');if(img.getAttribute('src')!==path)img.src=path;});
    renderSeasonCarousel(name);
    swapCenterIcon(name,userInitiated);
    const favicon=document.querySelector('link[rel="icon"]');if(favicon)favicon.href=`assets/favicon-${name}.png`;
    const themeColor=document.querySelector('meta[name="theme-color"]');
    if(themeColor)themeColor.content=getComputedStyle(document.body).getPropertyValue('--theme-chrome').trim()||'#080914';
    if(userInitiated){
      try{localStorage.setItem('artisfantasy-season-v5',name);}catch(_){}
      try{const u=new URL(location.href);u.searchParams.set('season',name);if(location.protocol==='http:'||location.protocol==='https:')history.replaceState(null,'',u.pathname+u.search+u.hash);}catch(_){/* local-file preview */}
    }
  }
  document.querySelectorAll('[data-season]').forEach(btn=>btn.addEventListener('click',()=>updateSeason(btn.dataset.season,true)));
  document.querySelectorAll('.experience-icon').forEach(btn=>btn.addEventListener('click',()=>updateSeason(btn.dataset.iconSeason,true)));
  function cycleSeason(shift){const index=seasonOrder.indexOf(selectedSeason);updateSeason(seasonOrder[(index+shift+seasonOrder.length)%seasonOrder.length],true);}
  $('#season-prev')?.addEventListener('click',()=>cycleSeason(-1));
  $('#season-next')?.addEventListener('click',()=>cycleSeason(1));
  $('#experience-switch')?.addEventListener('keydown',event=>{
    const directions={ArrowRight:1,ArrowLeft:-1,Home:-99,End:99};
    if(!(event.key in directions))return;
    event.preventDefault();
    if(event.key==='Home')updateSeason(seasonOrder[0],true);
    else if(event.key==='End')updateSeason(seasonOrder[seasonOrder.length-1],true);
    else cycleSeason(directions[event.key]);
    document.querySelector(`[data-season="${selectedSeason}"]`)?.focus();
  });
  document.querySelectorAll('[data-lang-toggle]').forEach(btn=>btn.addEventListener('click',()=>setLanguage(lang==='de'?'en':'de',true)));
  const menu=$('#site-menu'),menuToggle=$('#menu-toggle');
  if(menu&&menuToggle){menuToggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen');});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));}
  const scroller=$('#screenshots-scroll');
  if(scroller){const step=()=>{const item=scroller.querySelector('.screen-item');return (item?.getBoundingClientRect().width||152)+(parseFloat(getComputedStyle(scroller).gap)||18);};$('#gallery-prev')?.addEventListener('click',()=>scroller.scrollBy({left:-step(),behavior:'smooth'}));$('#gallery-next')?.addEventListener('click',()=>scroller.scrollBy({left:step(),behavior:'smooth'}));}
  const dialog=$('#preview-dialog');
  if(dialog){const image=$('#dialog-image'),caption=$('#dialog-caption');document.querySelectorAll('[data-preview]').forEach(btn=>btn.addEventListener('click',()=>{image.src=btn.dataset.preview;caption.textContent=lang==='de'?btn.dataset.captionDe:btn.dataset.captionEn;dialog.showModal();}));$('#dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});}
  if($('#year'))$('#year').textContent=String(new Date().getFullYear());
  setLanguage(lang);
})();
