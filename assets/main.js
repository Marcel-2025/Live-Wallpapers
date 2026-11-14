'use strict';
(() => {
  const translations = {
    de: {
      experienceEyebrow:'DYNAMIC SEASONS',experienceTitle:'Eine neue Atmosphäre. <em>Jede Jahreszeit.</em>',experienceLead:'Das Erscheinungsbild und die App-Erfahrung verändern sich mit der ausgewählten Saison – mit individuellen Farben, Effekten und Schloss-Icons.',experienceSelection:'VOLLES SAISON-ERLEBNIS',experienceFeature1:'Wechselndes Design',experienceFeature1Text:'Der gesamte Look passt sich der Saison an.',experienceFeature2:'Saisonale Effekte',experienceFeature2Text:'Farben, Animationen und Atmosphäre.',experienceFeature3:'Passende Live-Wallpaper',experienceFeature3Text:'Entdecke die Magie aller Jahreszeiten.',experiencePrimary:'Premium entdecken',experienceSecondary:'App-Vorschau ansehen',experienceTip:'Wähle oben eine Saison oder wechsle mit den Pfeilen – das Design der ganzen Seite passt sich an.',
      navFeatures:'Funktionen',navSeasons:'Jahreszeiten',navScreens:'Einblicke',navCTA:'Premium entdecken',
      heroEyebrow:'DIE MAGIE BEGINNT HIER',heroTitle:'Ein bisschen <em>Magie.</em><br>Für deinen Bildschirm.',
      heroLead:'790 handverlesene Wallpaper – darunter 27 animierte Live-Hintergründe. Erkunde Fantasy-Welten, Kosmos, Natur und alle Jahreszeiten in 78 Kategorien.',
      heroPrimary:'App-Vorschau ansehen',heroSecondary:'Kollektionen entdecken',heroSoon:'Android 1.2.0 · Veröffentlichung in Vorbereitung',heroPlatform:'Build erstellt & automatisch getestet · Gerätetest steht aus',heroFloatTop:'Kuratierte Kollektionen',heroFloatTitle:'Winter Dreams',heroFloatBottom:'Fantasie für jede Saison',
      featureKicker:'DIE APP',featureTitle:'Kleine Details.<br><em>Große Wirkung.</em>',featureLead:'Eine kuratierte Welt aus Farbe, Licht und Bewegung – geschaffen, um deinem Smartphone einen unverwechselbaren Look zu geben.',
      feature1Title:'Live statt langweilig',feature1Text:'Atmosphärische Animationen und fantastische Szenen für unterstützte Android-Geräte.',feature2Title:'Entdecke deinen Stil',feature2Text:'78 befüllte Kategorien – von Fantasy und AMOLED bis Autos, Anime-Stil, Tieren und Natur.',feature3Title:'Alles, was du liebst',feature3Text:'Favoriten, persönliche Kollektionen, Downloads und Freischaltungen bleiben lokal auf deinem Gerät.',feature4Title:'Saisonale Highlights',feature4Text:'Sieben wählbare App-Designs inklusive Classic und sechs Saisons – auf Wunsch automatisch passend zum Datum.',
      stat1:'Wallpaper insgesamt',stat2:'HD-Hintergrundbilder',stat3:'animierte Live-Wallpaper',stat4:'befüllte Kategorien',stat5:'kuratierte Kollektionen',
      catalogKicker:'KATALOG 1.2.0',catalogTitle:'Mehr Welten.<br><em>Mehr zum Entdecken.</em>',catalogLead:'Entdecke vielfältige neue Themen – von verträumten Winterabenden bis zu futuristischen Maschinen.',cat1Title:'Fantasy & Magie',cat1Text:'Märchenschlösser, magische Kreaturen und fantastische Abenteuerwelten.',cat1Pill:'Fantasy · Helden · Mystik',cat2Title:'Kosmos & Ästhetik',cat2Text:'Sternenhimmel, abstrakte Kunst, AMOLED-Motive und leuchtende Digital Art.',cat2Pill:'Space · AMOLED · Digital Art',cat3Title:'Fahrzeuge & Technik',cat3Text:'Sportwagen, Motorräder, Rennsport, futuristische Maschinen und Technik.',cat3Pill:'JDM · Racing · Maschinen',cat4Title:'Natur & Emotion',cat4Text:'Tierwelt, Naturpanoramen, stimmungsvolle Szenen und Landschaften.',cat4Pill:'Natur · Tiere · Stimmungen',deliveryTitle:'HD-Qualität bei Bedarf.',deliveryText:'Die Android-App enthält zunächst Vorschaubilder. HD-Originale und Live-Videos werden bei Bedarf über Google Play nachgeladen. Die Play-Asset-Delivery-Funktion wird noch im internen Test geprüft.',
      seasonKicker:'SEASONAL WORLDS',seasonTitle:'Sechs Jahreszeiten.<br><em>Unendlich viel Magie.</em>',seasonLead:'Jede Kollektion hat ihren eigenen Look. Das Schloss bleibt unser App-Icon – diese Motive gehören zu den Jahreszeiten.',seasonSelection:'AUSGEWÄHLTE KOLLEKTION',
      shotsKicker:'APP PREVIEW',shotsTitle:'Ein Blick hinein.<br><em>Ohne Kompromisse.</em>',shotsLead:'Fünf Design-Mockups als kompakte Vorschau – im korrekten Seitenverhältnis. Zum Vergrößern anklicken.',shotsNote:'Hinweis: Die Bilder sind Design-Mockups, keine Screenshots aus dem aktuellen 1.2.0-Build. Echte Store-Screenshots liegen im App-Projekt vor.',shot1:'Startseite',shot2:'Kategorien & Suche',shot3:'Live-Vorschau',shot4:'Jahreszeiten',shot5:'Favoriten & Premium',
      premiumTitle:'Kunst, die bleibt.<br><em>Momente, die leuchten.</em>',premiumLead:'Wähle einzelne Kunstwerke über Credits oder nutze Premium als monatliches oder jährliches Abo. Im Android-Release-Build ist Google Play Billing integriert; echte Käufe müssen noch im Play-Test geprüft werden.',premiumP1:'Einzelne Motive dauerhaft freischalten',premiumP2:'Premium-Abo mit Zugriff auf alle Motive',premiumP3:'Vier Credit-Pakete in Google Play',premiumSoon:'Kaufabwicklung integriert · Live-Test ausstehend',
      faqTitle:'Noch <em>Fragen?</em>',faqLead:'Antworten zu Android, Käufen, Downloads und dem aktuellen Entwicklungsstand.',faq1Q:'Ist die App schon verfügbar?',faq1A:'Die Android-Version 1.2.0 wurde gebaut und automatische Tests sind erfolgreich durchgelaufen. Geräte-, Play-Asset-Delivery- und echte Kauf-Tests stehen noch aus. Ein offizieller Store-Link folgt nach Freigabe.',faq2Q:'Funktionieren Live-Wallpaper auf Android und iOS?',faq2A:'Die hier beschriebene Version 1.2.0 ist eine Android-App mit Live-Wallpaper-Dienst. Eine vergleichbare iOS-App ist derzeit nicht als fertiger Build dokumentiert.',faq3Q:'Sind alle Wallpaper kostenpflichtig?',faq3A:'Der Android-Release-Build enthält vier Credit-Pakete und ein Premium-Abo (monatlich oder jährlich). Preise werden von Google Play bereitgestellt. Echte Kaufabläufe sind noch nicht im Play-Test bestätigt.',faq4Q:'Woher stammen die Kunstwerke?',faq4A:'ArtIsFantasy gestaltet KI-generierte digitale Kunst und Fantasy-Motive. Flondy entwickelt die Android-App, mit der diese Werke als Wallpaper erlebbar werden.',faq5Q:'Was passiert mit Credits beim Deinstallieren?',faq5A:'Profil, Credit-Guthaben und Freischaltungen werden in Version 1.2.0 lokal verwaltet. Nach einer Deinstallation können diese lokalen Daten verloren gehen. Das Abo wird separat über Google Play verwaltet; eine vollständige Wiederherstellung aller lokalen Freischaltungen ist nicht bestätigt.',faq6Q:'Muss ich alle HD-Dateien sofort herunterladen?',faq6A:'Nein. HD-Bilder und Live-Videos sind in 22 Nachlade-Pakete aufgeteilt. Sie werden bei Bedarf angefordert. Die Auslieferung über Google Play muss noch im internen Test überprüft werden.',
      aboutTitle:'ArtIsFantasy.<br><em>Wo Fantasie auf KI trifft.</em>',aboutIntro:'Entdecke KI-generierte Kunst mit magischen Fantasy-Welten, verträumten Landschaften, mythischen Kreaturen und gemütlichen Wintermotiven.',aboutDetails:'ArtIsFantasy erschafft digitale Kunst, KI-Animationen, Shorts und entspannende Ambiente-Videos. Flondy bringt ausgewählte Motive mit Live Wallpapers auf dein Android-Gerät.',aboutP1:'✦ Fantasy & digitale Kunst',aboutP2:'✦ Magische Welten & Landschaften',aboutP3:'✦ Mythische Kreaturen',aboutP4:'✦ Saisonale Ästhetik',aboutP5:'✦ KI-Animationen & Shorts',aboutP6:'✦ Entspannende Ambiente-Videos',communityTitle:'Werde Teil der ArtIsFantasy-Community',communityLead:'Folge neuen Kunstwerken, Reels und Fantasy-Welten auf deinen Lieblingsplattformen.',socialDeviant:'Galerie & exklusive Kunst',socialInstagram:'Kunst, Reels & Highlights',socialTiktok:'Fantasy-Clips & Shorts',socialFacebook:'Bilder & Community',supportMessage:'Unterstütze die kreative Arbeit: Exklusive Kunstwerke und VIP-Mitgliedschaften gibt es auf DeviantArt.',
      ctaTitle:'Dein nächster Hintergrund?<br><em>Ein kleines Kunstwerk.</em>',ctaLead:'Android 1.2.0 · 790 Wallpaper. Entdecke unsere Kunst und erfahre mehr über die App.',ctaArt:'ArtIsFantasy entdecken',ctaDev:'Flondy Apps ansehen',footerIntro:'AI-generierte Fantasy-Kunst von ArtIsFantasy trifft auf App-Entwicklung von Flondy.',footerPrivacy:'Datenschutzerklärung',footerImprint:'Impressum',footerDelete:'Konto & Daten löschen',footerContact:'Kontakt',footerTag:'Bring Fantasy to Your Screen ✦',
      legalIntroPrivacy:'Datenschutzerklärung',legalIntroImprint:'Impressum',legalIntroDeletion:'Konto & Daten löschen',legalSubPrivacy:'Informationen zum Datenschutz auf dieser Website und zum geplanten Funktionsumfang der App.',legalSubImprint:'Angaben zum verantwortlichen Anbieter der Website.',legalSubDeletion:'So kannst du Auskunft und Löschung deiner Daten anfordern.'
    },
    en: {
      experienceEyebrow:'DYNAMIC SEASONS',experienceTitle:'A new atmosphere. <em>Every season.</em>',experienceLead:'The entire website transforms with your selected season – including fantasy castle icons, colors, effects and atmospheric backgrounds.',experienceSelection:'THE FULL SEASONAL EXPERIENCE',experienceFeature1:'Dynamic design',experienceFeature1Text:'The entire look adapts to your selected season.',experienceFeature2:'Seasonal effects',experienceFeature2Text:'Distinct colors, subtle animations and atmosphere.',experienceFeature3:'Matching live wallpapers',experienceFeature3Text:'Discover the magic of every season.',experiencePrimary:'Explore Premium',experienceSecondary:'Explore app preview',experienceTip:'Choose a season above or use the arrows – the entire page changes with your selection.',
      navFeatures:'Features',navSeasons:'Seasons',navScreens:'Previews',navCTA:'Explore Premium',
      heroEyebrow:'THE MAGIC STARTS HERE',heroTitle:'A little <em>magic.</em><br>For your screen.',
      heroLead:'Discover 790 curated wallpapers, including 27 animated live backgrounds. Explore fantasy, space, nature, and seasonal worlds across 78 categories.',
      heroPrimary:'Explore app preview',heroSecondary:'Discover collections',heroSoon:'Android 1.2.0 · Release in preparation',heroPlatform:'Built & automated tests passed · Device testing pending',heroFloatTop:'Curated collections',heroFloatTitle:'Winter Dreams',heroFloatBottom:'A world for every season',
      featureKicker:'THE APP',featureTitle:'Small details.<br><em>Big impact.</em>',featureLead:'A curated world of color, light and motion – designed to give your phone a look all its own.',
      feature1Title:'Make it live',feature1Text:'Atmospheric animations and fantasy scenes for compatible Android devices.',feature2Title:'Find your style',feature2Text:'78 populated categories, from fantasy and AMOLED to cars, anime-inspired art, animals and nature.',feature3Title:'Keep what you love',feature3Text:'Favorites, custom collections, downloads and unlocks are stored locally on your device.',feature4Title:'Seasonal highlights',feature4Text:'Seven selectable themes including Classic and six seasons – with optional automatic seasonal switching.',
      stat1:'total wallpapers',stat2:'HD wallpapers',stat3:'animated live wallpapers',stat4:'populated categories',stat5:'curated collections',
      catalogKicker:'CATALOG 1.2.0',catalogTitle:'More worlds.<br><em>More to discover.</em>',catalogLead:'Explore diverse new themes – from dreamy winter evenings to futuristic machinery.',cat1Title:'Fantasy & Magic',cat1Text:'Fairytale castles, magical creatures and spectacular imaginary worlds.',cat1Pill:'Fantasy · Heroes · Mystery',cat2Title:'Space & Aesthetics',cat2Text:'Stars, abstract art, AMOLED themes and glowing digital artwork.',cat2Pill:'Space · AMOLED · Digital Art',cat3Title:'Vehicles & Tech',cat3Text:'Sports cars, motorcycles, racing, futuristic vehicles and technology.',cat3Pill:'JDM · Racing · Machines',cat4Title:'Nature & Mood',cat4Text:'Animals, panoramic landscapes, peaceful moments and atmospheric scenes.',cat4Pill:'Nature · Animals · Moods',deliveryTitle:'HD quality, on demand.',deliveryText:'The Android app includes previews first. HD originals and live videos are downloaded on demand via Google Play. Play Asset Delivery still needs verification in internal testing.',
      seasonKicker:'SEASONAL WORLDS',seasonTitle:'Six collections.<br><em>Endless magic.</em>',seasonLead:'Each seasonal collection has its own aesthetic. Our castle remains the main app icon – these designs represent the seasons.',seasonSelection:'SELECTED COLLECTION',
      shotsKicker:'APP PREVIEW',shotsTitle:'Take a closer look.<br><em>Perfectly in proportion.</em>',shotsLead:'Five design mockups shown in compact cards with correct proportions. Click to enlarge.',shotsNote:'Note: These are design mockups, not screenshots captured from build 1.2.0. Actual store screenshots are available in the app project.',shot1:'Home',shot2:'Categories & Search',shot3:'Live Preview',shot4:'Seasons',shot5:'Favorites & Premium',
      premiumTitle:'Art to keep.<br><em>Moments that shine.</em>',premiumLead:'Unlock individual artworks with Credits or choose Premium with a monthly or annual subscription. Google Play Billing is integrated in the Android release build; real purchases have yet to be tested through Google Play.',premiumP1:'Permanent single-artwork unlocks',premiumP2:'Premium subscription for full access',premiumP3:'Four Google Play Credit packs',premiumSoon:'Payment flow implemented · Live tests pending',
      faqTitle:'Any <em>questions?</em>',faqLead:'Answers about Android, purchases, downloads and the current development stage.',faq1Q:'Is the app available yet?',faq1A:'Android version 1.2.0 builds successfully and passed automated tests. Real-device, Play Asset Delivery and purchase tests are still outstanding. The official store link will be added after release.',faq2Q:'Do live wallpapers work on Android and iOS?',faq2A:'Version 1.2.0 described here is an Android app with a live wallpaper service. A corresponding finished iOS build is not documented.',faq3Q:'Are all wallpapers paid?',faq3A:'The Android release build includes four Credit packs plus a monthly or annual Premium subscription. Prices come from Google Play. Real purchase flows are not yet verified in the Play test environment.',faq4Q:'Who creates the artwork?',faq4A:'ArtIsFantasy creates AI-generated fantasy and digital artwork. Flondy develops the Android app that brings selected artworks to your screen.',faq5Q:'What happens to Credits if I uninstall?',faq5A:'Version 1.2.0 stores your profile, Credits and unlocks locally. Uninstalling can cause these local data to be lost. Subscriptions are managed separately in Google Play; complete restoration of all local unlocks is not confirmed.',faq6Q:'Do I need to download all HD files right away?',faq6A:'No. HD images and live videos are split across 22 on-demand asset packs. They are requested when needed. Delivery through Google Play must still be verified in internal testing.',
      aboutTitle:'ArtIsFantasy.<br><em>Where Imagination Meets AI.</em>',aboutIntro:'Discover AI-generated digital art, magical fantasy worlds, dreamy landscapes, mythical creatures and cozy winter scenes.',aboutDetails:'ArtIsFantasy creates digital fantasy art, AI animations, shorts and relaxing ambience videos. Flondy brings selected works to Android through Live Wallpapers.',aboutP1:'✦ AI Art & Digital Fantasy',aboutP2:'✦ Magical Worlds & Landscapes',aboutP3:'✦ Mythical Creatures',aboutP4:'✦ Cozy & Seasonal Aesthetics',aboutP5:'✦ AI Animations & Shorts',aboutP6:'✦ Relaxing Ambience Videos',communityTitle:'Join the ArtIsFantasy Community',communityLead:'Explore new creations, reels and fantasy worlds on your favorite platforms.',socialDeviant:'Gallery & exclusive artwork',socialInstagram:'Artwork, reels & highlights',socialTiktok:'Fantasy clips & shorts',socialFacebook:'Art & community',supportMessage:'Support the creative journey: Discover exclusive artwork and VIP memberships on DeviantArt.',
      ctaTitle:'Your next wallpaper?<br><em>A little work of art.</em>',ctaLead:'Android 1.2.0 · 790 wallpapers. Explore our art and learn more about the app.',ctaArt:'Explore ArtIsFantasy',ctaDev:'Discover Flondy Apps',footerIntro:'AI-generated fantasy artwork by ArtIsFantasy meets app development by Flondy.',footerPrivacy:'Privacy Policy',footerImprint:'Legal Notice',footerDelete:'Delete account & data',footerContact:'Contact',footerTag:'Bring Fantasy to Your Screen ✦',
      legalIntroPrivacy:'Privacy Policy',legalIntroImprint:'Legal Notice',legalIntroDeletion:'Delete account & data',legalSubPrivacy:'Information about privacy on this website and the planned app features.',legalSubImprint:'Information about the provider responsible for this website.',legalSubDeletion:'Learn how to request access to or erasure of personal data.'
    }
  };
  const seasonLabels = {
    halloween:{emoji:'🎃',title:'Halloween',de:'Geheimnisvolle Welten, magische Nächte und leuchtende Kürbisse.',en:'Mysterious worlds, enchanted nights and glowing pumpkins.',particle:'✦'},
    autumn:{emoji:'🍂',title:'Autumn',de:'Goldene Wälder, fallende Blätter und die Wärme des Herbstes.',en:'Golden forests, falling leaves and the warmth of autumn.',particle:'🍂'},
    winter:{emoji:'❄️',title:'Winter',de:'Eiskristalle, verschneite Schlösser und magische Nordlichter.',en:'Icy crystals, snow-covered castles and magical northern lights.',particle:'❄'},
    spring:{emoji:'🌸',title:'Spring',de:'Kirschblüten, Pastellfarben und traumhafte Frühlingswelten.',en:'Cherry blossoms, pastel colors and dreamy spring worlds.',particle:'✿'},
    summer:{emoji:'☀️',title:'Summer',de:'Türkisblaues Wasser, goldene Sonnenstrahlen und Sommermagie.',en:'Turquoise water, golden sunshine and summer magic.',particle:'✦'},
    christmas:{emoji:'🎄',title:'Christmas',de:'Festliche Lichter, Schneeglanz und zauberhafte Weihnachtsnächte.',en:'Festive lights, sparkling snow and enchanting Christmas nights.',particle:'✧'}
  };
  const seasonOrder = ['halloween','autumn','winter','spring','summer','christmas'];
  const seasonCarouselOrder = ['autumn','winter','halloween','spring','summer','christmas'];
  const seasonImage = (name,size='full') => `assets/castle-${name}-${size}.webp`;
  const seasonAmbient = name => `assets/castle-${name}-ambient.webp`;
  let lastBackdropSeason=null;
  let backdropIndex=0;
  const qs = new URLSearchParams(location.search);
  let lang = qs.get('lang') === 'en' ? 'en' : 'de';
  let selectedSeason = (() => {try{const p=new URLSearchParams(location.search).get('season');if(seasonOrder.includes(p))return p;const s=localStorage.getItem('artisfantasy-season-v4');return seasonOrder.includes(s)?s:'halloween';}catch(_){return 'halloween';}})();
  const $ = selector => document.querySelector(selector);
  function setLanguage(next, updateUrl=false){
    lang=next;
    document.documentElement.lang=lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{let k=el.dataset.i18n;if(translations[lang][k])el.textContent=translations[lang][k];});
    document.querySelectorAll('[data-i18n-html]').forEach(el=>{let k=el.dataset.i18nHtml;if(translations[lang][k])el.innerHTML=translations[lang][k];});
    document.querySelectorAll('[data-lang-panel]').forEach(el=>{el.hidden=el.dataset.langPanel!==lang;});
    document.querySelectorAll('[data-legal-link]').forEach(el=>{const page=el.getAttribute('href').split('?')[0];el.href=page+(lang==='en'?'?lang=en':'');});
    const toggle=$('[data-lang-toggle]');if(toggle){toggle.textContent=lang==='de'?'EN':'DE';toggle.setAttribute('aria-label',lang==='de'?'Switch to English':'Zu Deutsch wechseln');}
    if(updateUrl){try{const u=new URL(location.href);if(lang==='en')u.searchParams.set('lang','en');else u.searchParams.delete('lang');if(location.protocol==='http:'||location.protocol==='https:')history.replaceState(null,'',u.pathname+u.search+u.hash);}catch(_){/* local-file preview */}}
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
  function renderSeasonParticles(name){
    const container=$('#season-particles');if(!container)return;
    container.replaceChildren();
    // Stable positions avoid flashing/random jumps during language changes.
    const code=seasonLabels[name].particle;
    for(let i=0;i<17;i++){
      const item=document.createElement('span');item.className='season-particle';item.textContent=code;
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
    renderSeasonCarousel(name);
    if(changed){setBackdrop(name);renderSeasonParticles(name);}
    const decorLeft=$('#season-decor-left'),decorRight=$('#season-decor-right');
    if(decorLeft)decorLeft.textContent=data.emoji;
    if(decorRight)decorRight.textContent= name==='halloween'?'🦇':name==='autumn'?'🍁':name==='winter'?'❄':name==='spring'?'🌸':name==='summer'?'☀':'✦';
    document.querySelectorAll('[data-theme-logo]').forEach(img=>{const path=seasonImage(name,'small');if(img.getAttribute('src')!==path)img.src=path;});
    document.querySelectorAll('[data-theme-large-icon]').forEach(img=>{img.src=seasonImage(name,'full');});
    const favicon=document.querySelector('link[rel="icon"]');if(favicon)favicon.href=`assets/favicon-${name}.png`;
    const themeColor=document.querySelector('meta[name="theme-color"]');
    if(themeColor)themeColor.content=getComputedStyle(document.body).getPropertyValue('--theme-chrome').trim()||'#080914';
    if(userInitiated){
      try{localStorage.setItem('artisfantasy-season-v4',name);}catch(_){}
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
