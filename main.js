import { updateLandingPageViews } from "./counter.js";
import { initNavbarToggle } from "./toggle.js";

updateLandingPageViews();
initNavbarToggle();

const translations = {
  pl: {
    title: "Mter.pl - aplikacje internetowe",
    about: {
      title: "O mnie",
      intro:
        "Witam, nazywam się Michał Terczyński, jestem Frontend Developerem ze specjalizacją w tworzeniu gier i aplikacji internetowych. Zdobyłem doświadczenie w renomowanych firmach takich jak NetEnt, Yggdrasil Gaming i Software Mind, gdzie poszerzyłem wiedzę w zakresie tworzenia angażujących gier oraz wielomodułowych aplikacji biznesowych z wykorzystaniem TypeScript, React, Angular i PixiJS.",
      details:
        "Moje umiejętności techniczne obejmują nowoczesne frameworki JavaScript, tworzenie gier w PixiJS oraz budowanie skalowalnych aplikacji internetowych. Pasjonuję się tworzeniem wysokiej jakości, wydajnego kodu i chętnie podejmuję się zarówno projektów komercyjnych, jak i autorskich.",
    },
    projects: {
      commercial: "Projekty komercyjne",
      personal: "Projekty osobiste",
    },
    accessNotice: {
      title: "Informacja o dostępności",
      description: "Proszę mieć na uwadze, że niektóre z powyższych stron internetowych mogą być niedostępne w Państwa kraju. W razie potrzeby sugerujemy skorzystanie z usługi VPN."
    }
  },
  en: {
    title: "Mter.pl - web apps",
    about: {
      title: "About Me",
      intro:
        "Hi, I'm Michał Terczyński, a Frontend Developer with a strong focus on game development and interactive applications. With experience at companies like NetEnt, Yggdrasil Gaming, and Software Mind, I've developed expertise in creating engaging games and robust enterprise applications using TypeScript, React, Angular, and PixiJS.",
      details:
        "My technical skills include modern JavaScript frameworks, game development with PixiJS, and building scalable web applications. I'm passionate about creating high-quality, performant code and enjoy working on both commercial projects and personal game development endeavors.",
     
    },
    projects: {
      commercial: "Commercial Projects",
      personal: "Personal Projects",
    },
    accessNotice: {
      title: "Access notice",
      description: "Please note that some of the websites linked above may not be accessible in your country. If necessary, consider using a VPN service."
    }
  },
};

// Detect browser language
const userLang = navigator.language || navigator.userLanguage;
console.log(userLang.slice(0, 2));
const shortLang = userLang.slice(0, 2);
const selectedLang = shortLang === "pl" ? "pl" : "en";

// Apply translation
const t = translations[selectedLang];

document.title = t.title;

document.getElementById("aboutTitle").innerText = t.about.title;
document.getElementById("aboutIntro").innerText = t.about.intro;
document.getElementById("aboutDetails").innerText = t.about.details;

document.getElementById("commercial-projects-title").innerText = t.projects.commercial;
document.getElementById("personal-projects-title").innerText = t.projects.personal;

document.getElementById("access-notice-title").innerText = t.accessNotice.title;
document.getElementById("access-notice-description").innerText = t.accessNotice.description;
