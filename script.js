/* =========================================================
   WIESENHEIM HOF – SCRIPT.JS
========================================================= */


/* =========================================================
   ÜBERSETZUNGEN DE / IT / EN
========================================================= */

const translations = {
  de: {
    nav_start: "Start",
    nav_farm: "Hof",
    nav_apartments: "Ferienwohnungen",
    nav_gallery: "Galerie",
    nav_arrival: "Anfahrt",
    nav_contact: "Kontakt",

    hero_subtitle: "Ferienwohnungen in Terenten · Südtirol",
    request_button: "Jetzt anfragen",
    discover: "Entdecken ↓",

    intro_title: "Herzlich willkommen",
    intro_text:
      "Der Wiesenheim Hof liegt auf rund 1.360 m Meereshöhe in sonniger und ruhiger Lage oberhalb von Terenten. Von hier aus genießen Sie einen direkten Blick auf die Terner Erdpyramiden, erreichen das idyllische Mühlental in wenigen Minuten und starten direkt vor der Haustür zu zahlreichen Wanderungen.",

    farm_kicker: "Unser Hof",
    farm_title: "Urlaub am Wiesenheim Hof",

    farm_text_1:
      "Der Wiesenheim Hof wird von Familie Oberhofer bewirtschaftet und liegt in sonniger, ruhiger Lage oberhalb von Terenten.",

    farm_text_2:
      "Auf unserem Hof leben Kühe, Kälber, Hühner und Katzen. Besonders Familien mit Kindern genießen den direkten Kontakt zu den Tieren und die entspannte Atmosphäre.",

    farm_text_3:
      "Von unserem Hof genießen Sie einen schönen Blick auf die Terner Erdpyramiden. Das Mühlental sowie zahlreiche Wander- und Spazierwege befinden sich in unmittelbarer Nähe.",

    highlight_1: "Ruhige Lage",
    highlight_2: "Echter Bauernhof",
    highlight_3: "Natur erleben",
    highlight_4: "Familiäre Atmosphäre",

    apartments_kicker: "Ferienwohnungen",
    apartments_title: "Ihr Zuhause auf Zeit",

    sole_info: "Bis zu 4 Personen · 1 Schlafzimmer · 4 Betten",

    sole_text:
      "Unsere Ferienwohnung Sole bietet Platz für bis zu vier Personen und eignet sich ideal für Familien oder Freunde, die ihren Urlaub in ruhiger und naturnaher Umgebung verbringen möchten.",

    sole_f1: "Bis zu 4 Personen",
    sole_f2: "1 Schlafzimmer",
    sole_f3: "4 Betten",

    luna_info: "Bis zu 3 Personen · 1 Schlafzimmer · 3 Betten",

    luna_text:
      "Die Ferienwohnung Luna bietet Platz für bis zu drei Personen und ist ideal für Paare oder kleine Familien. Sie verfügt über eine voll ausgestattete Küche, einen gemütlichen Wohnbereich sowie einen Balkon mit Blick ins Grüne.",

    luna_f1: "Bis zu 3 Personen",
    luna_f2: "1 Schlafzimmer",
    luna_f3: "3 Betten",

    common_f4: "Voll ausgestattete Küche",
    common_f5: "Gemütlicher Wohnbereich",
    common_f6: "Balkon",
    common_f7: "Kostenloses WLAN",
    common_f8: "Parkplatz",
    common_f9: "Bettwäsche und Handtücher",

    gallery_kicker: "Galerie",
    gallery_title: "Impressionen vom Wiesenheim Hof",

    arrival_kicker: "Anfahrt",
    arrival_title: "So finden Sie zu uns",
    arrival_heading: "Bitte über die Sonnenbergstraße anfahren",

    arrival_text_1:
      "Für eine problemlose Anreise empfehlen wir Ihnen, den Wiesenheim Hof ausschließlich über die Sonnenbergstraße anzufahren.",

    arrival_text_2:
      "Bitte geben Sie unsere Adresse in Ihr Navigationsgerät ein und achten Sie darauf, dass die Route über die Sonnenbergstraße führt.",

    route_1_title: "Terenten Ortszentrum",
    route_1_text: "Richtung Sonnenberg fahren",
    route_2_title: "Sonnenbergstraße",
    route_2_text: "Der Straße bergwärts folgen",

    contact_kicker: "Kontakt",
    contact_title: "Wir freuen uns auf Ihre Anfrage",

    phone: "Telefon:",
    to_follow: "wird ergänzt",
    tax_number: "Steuernummer:",
    vat_number: "MwSt.-Nr.:",

    form_name: "Name",
    form_email: "E-Mail",
    form_phone: "Telefon",
    form_message: "Ihre Nachricht",

    footer_text: "Ruhe, Natur und Urlaub am Bauernhof.",

    legal_imprint: "Impressum",
    legal_privacy: "Datenschutz",
    legal_cookies: "Cookie-Richtlinie",
    legal_settings: "Cookie-Einstellungen",

    cookie_title: "Datenschutz-Einstellungen",

    cookie_text:
      "Diese Website verwendet technisch notwendige Speicherfunktionen. Optionale Dienste werden nur nach Ihrer Zustimmung aktiviert.",

    cookie_more: "Weitere Informationen",
    cookie_necessary: "Nur notwendige",
    cookie_accept: "Alle akzeptieren",

    weather_unavailable: "Wetter nicht verfügbar",
    weather_sunny: "sonnig",
    weather_cloudy: "leicht bewölkt",
    weather_rain: "Regen",
    weather_snow: "Schnee",
    weather_changeable: "wechselhaft"
  },

  it: {
    nav_start: "Home",
    nav_farm: "Il maso",
    nav_apartments: "Appartamenti",
    nav_gallery: "Galleria",
    nav_arrival: "Come arrivare",
    nav_contact: "Contatti",

    hero_subtitle: "Appartamenti a Terento · Alto Adige",
    request_button: "Richiedi ora",
    discover: "Scopri ↓",

    intro_title: "Benvenuti",

    intro_text:
      "Il Wiesenheim Hof si trova a circa 1.360 m di altitudine, in posizione soleggiata e tranquilla sopra Terento. Da qui si gode una vista diretta sulle Piramidi di Terra di Terento, si raggiunge in pochi minuti la Valle dei Mulini e si parte direttamente dal maso per numerose escursioni.",

    farm_kicker: "Il nostro maso",
    farm_title: "Vacanze al Wiesenheim Hof",

    farm_text_1:
      "Il Wiesenheim Hof è gestito dalla famiglia Oberhofer e si trova in una posizione soleggiata e tranquilla sopra Terento.",

    farm_text_2:
      "Nel nostro maso vivono mucche, vitelli, galline e gatti. Le famiglie con bambini apprezzano in particolare il contatto diretto con gli animali e l'atmosfera rilassata.",

    farm_text_3:
      "Dal maso si gode una bella vista sulle Piramidi di Terra di Terento. La Valle dei Mulini e numerosi sentieri si trovano nelle immediate vicinanze.",

    highlight_1: "Posizione tranquilla",
    highlight_2: "Autentico maso",
    highlight_3: "Vivere la natura",
    highlight_4: "Atmosfera familiare",

    apartments_kicker: "Appartamenti",
    apartments_title: "La vostra casa in vacanza",

    sole_info: "Fino a 4 persone · 1 camera · 4 letti",

    sole_text:
      "L'appartamento Sole ospita fino a quattro persone ed è ideale per famiglie o amici che desiderano trascorrere una vacanza tranquilla a contatto con la natura.",

    sole_f1: "Fino a 4 persone",
    sole_f2: "1 camera",
    sole_f3: "4 letti",

    luna_info: "Fino a 3 persone · 1 camera · 3 letti",

    luna_text:
      "L'appartamento Luna ospita fino a tre persone ed è ideale per coppie o piccole famiglie. Dispone di cucina attrezzata, zona giorno accogliente e balcone con vista sul verde.",

    luna_f1: "Fino a 3 persone",
    luna_f2: "1 camera",
    luna_f3: "3 letti",

    common_f4: "Cucina attrezzata",
    common_f5: "Zona giorno accogliente",
    common_f6: "Balcone",
    common_f7: "Wi-Fi gratuito",
    common_f8: "Parcheggio",
    common_f9: "Biancheria e asciugamani",

    gallery_kicker: "Galleria",
    gallery_title: "Impressioni dal Wiesenheim Hof",

    arrival_kicker: "Come arrivare",
    arrival_title: "Come raggiungerci",
    arrival_heading: "Arrivare tramite Sonnenbergstraße",

    arrival_text_1:
      "Per un arrivo senza problemi consigliamo di raggiungere il Wiesenheim Hof esclusivamente tramite la Sonnenbergstraße.",

    arrival_text_2:
      "Inserite il nostro indirizzo nel navigatore e assicuratevi che il percorso passi dalla Sonnenbergstraße.",

    route_1_title: "Centro di Terento",
    route_1_text: "Seguire la direzione Sonnenberg",
    route_2_title: "Sonnenbergstraße",
    route_2_text: "Proseguire in salita",

    contact_kicker: "Contatti",
    contact_title: "Saremo lieti di ricevere la vostra richiesta",

    phone: "Telefono:",
    to_follow: "da aggiungere",
    tax_number: "Codice fiscale:",
    vat_number: "Partita IVA:",

    form_name: "Nome",
    form_email: "E-mail",
    form_phone: "Telefono",
    form_message: "Il vostro messaggio",

    footer_text: "Quiete, natura e vacanze al maso.",

    legal_imprint: "Impressum",
    legal_privacy: "Privacy",
    legal_cookies: "Informativa cookie",
    legal_settings: "Impostazioni cookie",

    cookie_title: "Impostazioni privacy",

    cookie_text:
      "Questo sito utilizza funzioni di memoria tecnicamente necessarie. I servizi opzionali vengono attivati solo con il vostro consenso.",

    cookie_more: "Ulteriori informazioni",
    cookie_necessary: "Solo necessari",
    cookie_accept: "Accetta tutti",

    weather_unavailable: "Meteo non disponibile",
    weather_sunny: "soleggiato",
    weather_cloudy: "poco nuvoloso",
    weather_rain: "pioggia",
    weather_snow: "neve",
    weather_changeable: "variabile"
  },

  en: {
    nav_start: "Home",
    nav_farm: "Farm",
    nav_apartments: "Apartments",
    nav_gallery: "Gallery",
    nav_arrival: "Directions",
    nav_contact: "Contact",

    hero_subtitle: "Holiday apartments in Terenten · South Tyrol",
    request_button: "Send enquiry",
    discover: "Discover ↓",

    intro_title: "Welcome",

    intro_text:
      "Wiesenheim Hof is located at around 1,360 metres above sea level in a sunny and peaceful position above Terenten. From here you can enjoy a direct view of the Terenten earth pyramids, reach the Mill Valley within a few minutes and start numerous hikes directly from the farm.",

    farm_kicker: "Our farm",
    farm_title: "Holidays at Wiesenheim Hof",

    farm_text_1:
      "Wiesenheim Hof is run by the Oberhofer family and enjoys a sunny, quiet location above Terenten.",

    farm_text_2:
      "Cows, calves, chickens and cats live on our farm. Families with children especially enjoy the close contact with the animals and the relaxed atmosphere.",

    farm_text_3:
      "The farm offers a beautiful view of the Terenten earth pyramids. The Mill Valley and numerous walking and hiking trails are nearby.",

    highlight_1: "Peaceful location",
    highlight_2: "Authentic farm",
    highlight_3: "Experience nature",
    highlight_4: "Family atmosphere",

    apartments_kicker: "Apartments",
    apartments_title: "Your holiday home",

    sole_info: "Up to 4 guests · 1 bedroom · 4 beds",

    sole_text:
      "Apartment Sole accommodates up to four guests and is ideal for families or friends who would like to spend a peaceful holiday close to nature.",

    sole_f1: "Up to 4 guests",
    sole_f2: "1 bedroom",
    sole_f3: "4 beds",

    luna_info: "Up to 3 guests · 1 bedroom · 3 beds",

    luna_text:
      "Apartment Luna accommodates up to three guests and is ideal for couples or small families. It has a fully equipped kitchen, a cosy living area and a balcony overlooking the greenery.",

    luna_f1: "Up to 3 guests",
    luna_f2: "1 bedroom",
    luna_f3: "3 beds",

    common_f4: "Fully equipped kitchen",
    common_f5: "Cosy living area",
    common_f6: "Balcony",
    common_f7: "Free Wi-Fi",
    common_f8: "Parking",
    common_f9: "Bed linen and towels",

    gallery_kicker: "Gallery",
    gallery_title: "Impressions of Wiesenheim Hof",

    arrival_kicker: "Directions",
    arrival_title: "How to find us",
    arrival_heading: "Please arrive via Sonnenbergstraße",

    arrival_text_1:
      "For a trouble-free arrival, we recommend reaching Wiesenheim Hof exclusively via Sonnenbergstraße.",

    arrival_text_2:
      "Enter our address in your navigation system and make sure the route leads via Sonnenbergstraße.",

    route_1_title: "Terenten village centre",
    route_1_text: "Follow signs towards Sonnenberg",
    route_2_title: "Sonnenbergstraße",
    route_2_text: "Continue uphill",

    contact_kicker: "Contact",
    contact_title: "We look forward to your enquiry",

    phone: "Phone:",
    to_follow: "to be added",
    tax_number: "Tax number:",
    vat_number: "VAT number:",

    form_name: "Name",
    form_email: "Email",
    form_phone: "Phone",
    form_message: "Your message",

    footer_text: "Peace, nature and farm holidays.",

    legal_imprint: "Legal notice",
    legal_privacy: "Privacy",
    legal_cookies: "Cookie policy",
    legal_settings: "Cookie settings",

    cookie_title: "Privacy settings",

    cookie_text:
      "This website uses technically necessary storage functions. Optional services are activated only with your consent.",

    cookie_more: "More information",
    cookie_necessary: "Necessary only",
    cookie_accept: "Accept all",

    weather_unavailable: "Weather unavailable",
    weather_sunny: "sunny",
    weather_cloudy: "partly cloudy",
    weather_rain: "rain",
    weather_snow: "snow",
    weather_changeable: "changeable"
  }
};


/* =========================================================
   SPRACHE UMSCHALTEN
========================================================= */

function getCurrentLanguage() {
  return localStorage.getItem("wiesenheimLanguage") || "de";
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "de";

  document.documentElement.lang = selectedLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;

    if (translations[selectedLanguage][key]) {
      element.textContent = translations[selectedLanguage][key];
    }
  });

  document.querySelectorAll(".languages button").forEach((button) => {
    button.classList.toggle(
      "active",
      button.dataset.lang === selectedLanguage
    );
  });

  localStorage.setItem("wiesenheimLanguage", selectedLanguage);

  loadWeather();
}

document.querySelectorAll(".languages button").forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});


/* =========================================================
   MOBILES MENÜ
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* =========================================================
   HERO-VIDEO ODER BILD
========================================================= */

const heroVideo = document.getElementById("heroVideo");
const heroImage = document.getElementById("heroImage");

if (heroVideo && heroImage) {
  heroVideo.addEventListener("canplay", () => {
    heroVideo.style.display = "block";
    heroImage.style.display = "none";
  });

  heroVideo.addEventListener("error", () => {
    heroVideo.style.display = "none";
    heroImage.style.display = "block";
  });

  const videoSource = heroVideo.querySelector("source");

  if (videoSource) {
    videoSource.addEventListener("error", () => {
      heroVideo.style.display = "none";
      heroImage.style.display = "block";
    });
  }
}


/* =========================================================
   BILDERGALERIE / LIGHTBOX
========================================================= */

const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImage = lightbox.querySelector("img");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  document.querySelectorAll(".lightbox-item").forEach((image) => {
    image.addEventListener("click", () => {
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt || "";

      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");

      document.body.style.overflow = "hidden";
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");

    lightboxImage.src = "";
    document.body.style.overflow = "";
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      lightbox.classList.contains("open")
    ) {
      closeLightbox();
    }
  });
}


/* =========================================================
   WETTER ÜBER OPEN-METEO
========================================================= */

function getWeatherDescription(code, language) {
  const dictionary = translations[language];

  if (code === 0) {
    return dictionary.weather_sunny;
  }

  if (code >= 1 && code <= 3) {
    return dictionary.weather_cloudy;
  }

  if (code >= 51 && code <= 67) {
    return dictionary.weather_rain;
  }

  if (code >= 71 && code <= 77) {
    return dictionary.weather_snow;
  }

  return dictionary.weather_changeable;
}

async function loadWeather() {
  const weatherText = document.getElementById("weatherText");

  if (!weatherText) {
    return;
  }

  const language = getCurrentLanguage();

  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast" +
      "?latitude=46.83" +
      "&longitude=11.78" +
      "&current=temperature_2m,weather_code" +
      "&timezone=Europe%2FRome"
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();

    const temperature = Math.round(data.current.temperature_2m);
    const weatherCode = data.current.weather_code;

    const description = getWeatherDescription(
      weatherCode,
      language
    );

    weatherText.textContent =
      `${temperature}°C · ${description}`;

  } catch (error) {
    weatherText.textContent =
      translations[language].weather_unavailable;
  }
}


/* =========================================================
   COOKIE-BANNER
========================================================= */

const cookieBanner = document.getElementById("cookieBanner");
const cookieNecessary = document.getElementById("cookieNecessary");
const cookieAccept = document.getElementById("cookieAccept");
const openCookieSettings =
  document.getElementById("openCookieSettings");

function showCookieBanner() {
  if (cookieBanner) {
    cookieBanner.classList.add("show");
  }
}

function hideCookieBanner() {
  if (cookieBanner) {
    cookieBanner.classList.remove("show");
  }
}

function saveCookieChoice(choice) {
  localStorage.setItem("wiesenheimCookieChoice", choice);

  hideCookieBanner();

  /*
    Hier können später optionale Dienste aktiviert werden.

    Beispiel:

    if (choice === "all") {
      loadGoogleMaps();
      loadAnalytics();
    }
  */
}

if (!localStorage.getItem("wiesenheimCookieChoice")) {
  window.setTimeout(showCookieBanner, 700);
}

if (cookieNecessary) {
  cookieNecessary.addEventListener("click", () => {
    saveCookieChoice("necessary");
  });
}

if (cookieAccept) {
  cookieAccept.addEventListener("click", () => {
    saveCookieChoice("all");
  });
}

if (openCookieSettings) {
  openCookieSettings.addEventListener("click", () => {
    showCookieBanner();
  });
}


/* =========================================================
   INITIALISIERUNG
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  setLanguage(getCurrentLanguage());
  loadWeather();
});
/* =========================================================
   EINBLENDANIMATIONEN BEIM SCROLLEN
========================================================= */

const revealElements = document.querySelectorAll(
  ".reveal"
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if(entry.isIntersecting){

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold:0.15
  }
);

revealElements.forEach((element) => {

  revealObserver.observe(element);

});/* =====================================================
   HERO PARALLAX
===================================================== */


window.addEventListener("scroll", () => {

    const scrolled = window.scrollY;

    if(heroVideo){

        heroVideo.style.transform =
            `translateY(${scrolled*0.18}px) scale(1.05)`;

    }

});const header = document.querySelector(".site-header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});