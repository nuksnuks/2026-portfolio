import { FaGithub } from 'react-icons/fa';
import { LuArrowUpRight, LuArrowDown, LuCodeXml, LuDatabase, LuCloud, LuMail } from 'react-icons/lu';
import profileImage from '/profilbillede.jpg'



const skills = [
  ['Sprog', 'TypeScript', 'JavaScript', 'SQL', 'HTML5', 'CSS / SCSS'],
  ['Frontend', 'React', 'Next.js', 'Vue.js', 'Vite', 'Zustand', 'Pinia'],
  ['Backend', 'Node.js', 'Express.js', 'REST APIs', 'Authentication', 'Firebase Functions'],
  ['Databaser', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase Firestore'],
  ['Cloud & DevOps', 'Docker', 'GitHub Actions', 'Nginx', 'Apache', 'Linux', 'Firebase Hosting'],
  ['Værktøjer', 'Git', 'GitHub', 'Postman', 'VS Code', 'Jira', 'Figma'],
];
const experience = [
  { company: 'Nordatlantisk Hus', role: 'Kommunikations- og kulturkoordinator', period: 'Feb. — mar. 2026', description: 'SoMe-marketing, eventplanlægning og koordinering samt opdatering og vedligeholdelse af den officielle hjemmeside.' },
  { company: 'GodFysioterapi', role: 'Web Specialist', period: 'Aug. — sep. 2025', description: 'Opsætning og migration af WordPress-website, DNS-konfiguration, GDPR-compliance og optimering af abonnementer og omkostninger.' },
  { company: 'AirPlate', role: 'App Developer', period: 'Jul. — sep. 2024', description: 'Appudvikling i React Native, API-integration og deployment til Google Play og App Store med Expo. Serverimplementering og visualisering af geografiske koordinater med Mapbox.' },
];

export default function HomePage() {
  return <>
    <a className="skip-link" href="#main">Gå til indhold</a>
    <header className="site-header wrap">
      <a className="wordmark" href="#" aria-label="David Wogelius, forside">dw<span>.</span></a>
      <nav aria-label="Hovednavigation"><a href="#projekter">Projekter</a><a href="#om">Om mig</a><a href="#erfaring">Erfaring</a></nav>
      <a className="nav-contact" href="#kontakt">Lad os tale sammen <LuArrowUpRight /></a>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-dot" /> SOFTWARE- & WEBUDVIKLER</p>
          <h1 id="hero-title">David<br />Wogelius<span>.</span></h1>
          <p className="hero-statement">Gennemtænkt kode.<br />Gode digitale oplevelser.</p>
          <p className="hero-description">Jeg bygger webapplikationer, hvor solid teknik og en god brugeroplevelse går hånd i hånd. Fra den første idé til den færdige løsning.</p>
          <div className="hero-actions"><a className="button primary" href="#projekter">Se mine projekter <LuArrowDown /></a><a className="text-link" href="https://github.com/nuksnuks" target="_blank" rel="noopener noreferrer"><FaGithub /> GitHub <LuArrowUpRight /></a></div>
        </div>
        <div className="portrait-area"><div className="portrait-frame"><img src={profileImage} /><span className="portrait-corner" aria-hidden="true">DW / 2026</span></div><div className="portrait-caption"><span>Fra frontend til backend.</span><span>Med blik for helheden.</span></div></div>
      </section>
      <div className="tech-strip wrap"><span>MIT PRIMÆRE STACK</span><div>{['TypeScript', 'React', 'Node.js', 'SQL', 'Firebase', 'Docker'].map(item => <span key={item}>{item}</span>)}</div></div>
      <section id="projekter" className="section wrap">
        <div className="section-heading"><div><p className="eyebrow">01 / UDVALGT ARBEJDE</p><h2>Fra idé til virkelighed.</h2></div><p>Et udvalg af projekter, hvor design,<br className="desktop-break" /> udvikling og problemløsning mødes.</p></div>
        <div className="project-grid">
          <article className="project-card"><a className="project-visual radar-visual" href="https://play.google.com/store/apps/details?id=com.anonymous.airPlateReactApp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" aria-label="Se Drone Detection App på Google Play"><div className="visual-label">AIRPLATE <span>MOBILE APPLICATION</span></div><div className="radar" aria-hidden="true"><div className="radar-axis" /><i className="radar-point point-one" /><i className="radar-point point-two" /><span className="radar-center">+</span></div><div className="visual-bottom">Drone detection<span>↗</span></div></a><div className="project-info"><div className="project-meta">MOBILAPP <span>REACT NATIVE · EXPO · MAPBOX</span></div><h3><a href="https://play.google.com/store/apps/details?id=com.anonymous.airPlateReactApp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">Drone Detection App <LuArrowUpRight /></a></h3><p>Fra geografiske data til en intuitiv mobiloplevelse. Udviklet i samarbejde med medstuderende over et 12-ugers projektforløb.</p></div></article>
          <article className="project-card"><a className="project-visual planner-visual" href="https://wogelplanner.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Besøg WogelPlanner"><div className="visual-label">WOGELPLANNER <span>WEB APPLICATION</span></div><div className="planner-art" aria-hidden="true"><div className="planner-sidebar"><b>w.</b><span /><span /><span /></div><div className="planner-board"><div className="board-heading">Projektoversigt <span>+ Ny opgave</span></div><div className="board-columns">{['Planlagt', 'I gang', 'Færdig'].map((label, index) => <div key={label}><small><i />{label}</small><div className="task"><em className={`task-label label-${index}`} /><strong>{['Research & indsigt', 'Designsystem', 'Projektstruktur'][index]}</strong><span /><span /><footer><i /> <small>•••</small></footer></div>{index !== 1 && <div className="task short-task"><span /><span /></div>}</div>)}</div></div></div><div className="visual-bottom">Overblik. Struktur. Fremdrift.<span>↗</span></div></a><div className="project-info"><div className="project-meta">WEBAPP <span>BACHELORPROJEKT · PROJEKTSTYRING</span></div><h3><a href="https://wogelplanner.vercel.app/" target="_blank" rel="noopener noreferrer">WogelPlanner <LuArrowUpRight /></a></h3><p>Et samlet overblik over opgaver, tidsplaner og workflows. En projektstyringsapp udviklet til mit bachelorprojekt.</p></div></article>
        </div>
        <div className="project-footnote"><span>Du ser også et af mine projekter lige nu — denne portfolio.</span><a className="text-link" href="https://github.com/nuksnuks" target="_blank" rel="noopener noreferrer">Mere på GitHub <LuArrowUpRight /></a></div>
      </section>
      <section id="om" className="about-section"><div className="wrap about-grid"><div><p className="eyebrow">02 / OM MIG</p><h2>Teknisk funderet.<br />Nysgerrig af natur.</h2><div className="education"><span>UDDANNELSE</span><p>Professionsbachelor i webudvikling</p><p>Multimediedesigner</p></div></div><div className="about-copy"><p>Jeg er softwareudvikler med en professionsbachelor i webudvikling og en solid forståelse for hele processen bag en webapplikation.</p><p>Jeg trives i krydsfeltet mellem struktur og kreativitet. Min tilgang er pragmatisk: forstå problemet, vælg de rigtige værktøjer, og byg en løsning, der er god at bruge og nem at arbejde videre med.</p><div className="expertise-list">{[{ icon: LuCodeXml, title: 'Full-stack udvikling', text: 'Moderne interfaces og robuste løsninger på tværs af frontend og backend.' }, { icon: LuDatabase, title: 'API’er & data', text: 'Velstrukturerede databaser, autentificering og stabile integrationer.' }, { icon: LuCloud, title: 'Cloud & deployment', text: 'Fra lokalt udviklingsmiljø til en applikation i produktion.' }].map(({ icon: Icon, title, text }) => <div className="expertise" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></div></section>
      <section id="erfaring" className="section wrap experience-grid"><div><p className="eyebrow">03 / ERFARING</p><h2>Læring gennem<br />praksis.</h2><p className="section-intro">Erfaring fra udvikling, digitale platforme og tværfagligt samarbejde.</p></div><div className="experience-list">{experience.map(item => <article className="experience-item" key={item.company}><div className="experience-top"><span>{item.period}</span><span className="internship">Praktik</span></div><h3>{item.role}</h3><p className="company">{item.company}</p><p>{item.description}</p></article>)}</div></section>
      <section className="section wrap skills-section"><div className="section-heading"><div><p className="eyebrow">04 / VÆRKTØJSKASSEN</p><h2>Teknologien bag.</h2></div><p>Værktøjer, jeg arbejder med<br />for at bygge holdbare løsninger.</p></div><div className="skills-grid">{skills.map(([label, ...items]) => <div className="skill-group" key={label}><h3>{label}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section id="kontakt" className="contact-section"><div className="wrap"><p className="eyebrow">05 / NÆSTE SKRIDT</p><div className="contact-heading"><h2>Skal vi bygge<br />noget sammen<span>?</span></h2><a className="contact-arrow" href="mailto:david.wogelius@gmail.com" aria-label="Skriv en email til David"><LuArrowUpRight /></a></div><p>Har du et projekt, en mulighed eller bare lyst til en snak?<br />Jeg vil gerne høre fra dig.</p><div className="contact-links"><a href="mailto:david.wogelius@gmail.com"><LuMail /> david.wogelius@gmail.com</a><a href="tel:+4552224102">+45 52 22 41 02 <LuArrowUpRight /></a></div></div></section>
    </main>
    <footer className="site-footer wrap"><a className="wordmark" href="#" aria-label="Til toppen">dw<span>.</span></a><span>© {new Date().getFullYear()} David Wogelius</span><a href="https://github.com/nuksnuks" target="_blank" rel="noopener noreferrer">GitHub <LuArrowUpRight /></a></footer>
  </>;
}
